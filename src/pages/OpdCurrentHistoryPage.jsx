import OpdCurrentHistory from '../features/user/components/OpdCurrentHistory';
import HeaderMain from '../layouts/HeaderMain'
import ConsultationMenu from '../features/user/components/ConsultationMenu'
import PatientData from '../features/user/components/PatientData'

import { getHistory, updateHistory  } from '../api/consultation-api'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';


export default function OpdCurrentHistoryPage() {
    const { consultationId } = useParams()
    const [ consultation , setConsultation ] = useState({})
    const [ patient , setPatient] = useState({})
    const [ createUser, setCreateUser] = useState({})
    const [ recorded , setRecord] = useState(false)


    const handleOnChange = (e) => {
        setConsultation({...consultation , [e.target.name]:e.target.value})
    }

    const handleOnClick =  async (e) => {
        e.preventDefault()
        const {id, cc, pi, pe, ph, addition} = consultation
        const payload = {cc, pi, pe, ph, addition}
        await updateHistory(id, payload)
        setRecord(true)   
    }


    useEffect( () => {
        getHistory(consultationId).then( res => {
            setConsultation(res.data[0])
            setPatient(res.data[0].patient)
            setCreateUser(res.data[0].user.firstName + " " +res.data[0].user.lastName)
        })
      }, [])



    return (
        <>
            <HeaderMain title="OPD-GP: Consultation"  />
            <PatientData patient={patient} createUser={createUser}/>
            <ConsultationMenu active="1" recorded={recorded} consultationId={consultationId}/>
            <div className="flex  justify-center">
                <OpdCurrentHistory history={consultation} recorded={recorded} handleOnChange={handleOnChange} handleOnClick={handleOnClick}/> 
            </div>
        </>
    )
}