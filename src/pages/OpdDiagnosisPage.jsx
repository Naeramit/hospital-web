import HeaderMain from '../layouts/HeaderMain'
import ConsultationMenu from '../features/user/components/ConsultationMenu'
import OpdDiagnosis from '../features/user/components/OpdDiagnosis'
import PatientData from '../features/user/components/PatientData'
import DiagTailBar from '../features/user/components/DiagTailBar'

import { getHistory, getDiagnosis , addDiagnosis, deleteDiagnosis,  updateDiagnosis } from '../api/consultation-api'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

export default function DiagnosisPage() {
    const { consultationId } = useParams()
    const [ diagList , setDiagList ] = useState([])
    const [ patient , setPatient] = useState({})
    const [ createUser, setCreateUser] = useState({})
    const [ addBar , setAddBar] = useState('')
    const [ defaultAdd, setDefaultAdd] = useState(1)
    const [ editId , setEditId] = useState(null)
    const [ error , setError]  = useState('')


    const handleOnChange = (e) => {
        setAddBar(e.target.value)
        setError(null)
    }

    const handleOnClickAddDiag =  async (e) => {
        e.preventDefault()


        const inputType = e.target.form["type"].value
        const inputDiagnosis =  e.target.form["Create New Diagnosis"].value

        if (inputDiagnosis?.trim() == ""){
            setError("Diagnosis can not be empty")
            return
        }


        const checkCurentPD = diagList.find( el => el.type == 1)
        const checkAddPD = inputType == 1


        if (!!checkCurentPD && checkAddPD) {
            setError("Principle Diagnosis must  have only one.")
            return
        }

        if (checkAddPD ){
            setDefaultAdd(2)
        }

        const payload = {diagnosis:[{type: inputType , diagnosis: inputDiagnosis}]}
        const rs = await addDiagnosis(consultationId, payload)

        if (inputType == 1) {
            setDiagList([rs.data[0],...diagList])
        }else{
            setDiagList([...diagList, rs.data[0]])
        }

    }

    const handleOnClickDelete = async (e) => {
        const diagnosisId = e.target.id
        const rs = await deleteDiagnosis(consultationId, diagnosisId)


        if (rs.data.result){
            const index = diagList.findIndex( diag =>  diag.id == diagnosisId)
            const newDiag = [...diagList]
            newDiag.splice(index,1)
            setDiagList(newDiag)

        }
    }

    const handleOnClickUpdateMode = async (e) => {
        e.preventDefault()

        const diagnosisId = e.target.id
        setEditId(diagnosisId)

        const diag = diagList.find(diag =>  diag.id == diagnosisId)
        const text = diag.diagnosis
        document.getElementById("addBarInput").value = text
    }

    const handleOnClickUpdate = async (e) => {
        e.preventDefault()

        const inputType = e.target.form["type"].value


        const checkCurentPD = diagList.find( el => el.type == 1)
        const checkAddPD = inputType == 1


        if (!!checkCurentPD && checkAddPD) {
            setError("Principle Diagnosis must  have only one.")
            document.getElementById("addBarInput").value = ""
            setEditId(null)
            return
        }
        const diagnosisId = editId
        const typeNubmer =  e.target.form["type"].value
        const payload = {"diagnosis": addBar, "type": typeNubmer}

        if (addBar?.trim() == ""){
            setError("Diagnosis can not be empty")
            return
        }
        const rs = await updateDiagnosis(consultationId, diagnosisId, payload)
        if (rs.data.result){
            const editDiag = diagList.find( diag => diag.id == diagnosisId )
            editDiag["diagnosis"] = addBar
            editDiag["type"] = typeNubmer  
        }
        document.getElementById("addBarInput").value = ""
        setEditId(null)
    }





    useEffect( () => {
        getHistory(consultationId).then( res => {
            setPatient(res.data[0].patient)
            setCreateUser(res.data[0].user.firstName + " " +res.data[0].user.lastName)
        })
        getDiagnosis(consultationId).then( res => {
            setDiagList(res.data)
            return res.data
        }).then( diagList => {
            const checkCurentPD = diagList.find( el => el.type == 1)
            if (!!checkCurentPD) {
                setDefaultAdd(2)
            }
        }) 
      }, [])


 
    return (
        <>
            <HeaderMain title="OPD-GP: Consultation"  />
            <PatientData patient={patient} createUser={createUser}/>
            <ConsultationMenu active="6"  consultationId={consultationId}/>
            <div className="flex  flex-col  items-center">
                <OpdDiagnosis 
                diagList={diagList}  
                handleOnChange={handleOnChange} 
                handleOnClickAddDiag={handleOnClickAddDiag}
                handleOnClickDelete={handleOnClickDelete}
                handleOnClickUpdateMode={handleOnClickUpdateMode }
                handleOnClickUpdate={handleOnClickUpdate}
                addBar={addBar}
                defaultAdd={defaultAdd}
                err = {error}
                editId= {editId}   
                />         
            </div>
            { diagList.length != 0 &&
                <DiagTailBar consultationId={consultationId}/>
            }
        </>
    )
}