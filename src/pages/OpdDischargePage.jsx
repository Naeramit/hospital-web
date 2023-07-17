import HeaderMain from '../layouts/HeaderMain'
import PatientData from '../features/user/components/PatientData'
import OpdDischarge from '../features/user/components/OpdDischarge'
import DischargeTailBar from '../features/user/components//DischargeTailBar'



import { getHistory, getAllDrugOrder ,addDrugOrder, deleteDrugOrder} from '../api/consultation-api'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

export default function OpdDischargePage() {
    const { consultationId } = useParams()
    const [ patient , setPatient] = useState({})
    const [ createUser, setCreateUser] = useState({})
    const [ orderList , setOrderList ] = useState([])
    const [ workspaceId, setWorkspace] = useState('')
    const [ addBar , setAddBar] = useState('')
    const [ editId , setEditId] = useState(null)
    const [ error , setError]  = useState('')



    const handleOnChange = (e) => {
      setAddBar(e.target.value)
      setError(null)
    }


    const handleOnClickAddOrder =  async (e) => {
      e.preventDefault()


      const inputDiagnosis =  e.target.form["Create New Order"].value

      // console.log(drugPrediction(inputDiagnosis))

      if (inputDiagnosis?.trim() == ""){
          setError("Order can not be empty")
          return
      }


      const payload = {drugOrder:
        [{
          "drugId": 1, 
          "drugDescriptionId": 1, 
          "unitNumber": 18,
          "onset": 2
        }]
      }
      // const rs = await addDrugOrder(consultationId, payload)

      // console.log(rs.data[0])

      // setOrderList([rs.data[0],...orderList])

    }

    const handleOnClickDelete = async (e) => {
      const drugorderId = e.target.id
      const rs = await deleteDrugOrder(consultationId, drugorderId)

      if (rs.data.result){
          const index = orderList.findIndex( order =>  order.id == drugorderId )
          const newOrder = [...orderList]
          newOrder.splice(index,1)
          setOrderList(newOrder)

      }
    }

    const handleOnClickUpdateMode = async (e) => {
      e.preventDefault()

      const drugorderId = e.target.id
      setEditId(drugorderId)

      const order = orderList.find(order =>  order.id == drugorderId)
      const text = order.drug.name + " " + order.drugDescription.description
      document.getElementById("addBarInput").value = text
    }




useEffect( () => {
  getHistory(consultationId).then( res => {
      setCreateUser(res.data[0].user.firstName + " " +res.data[0].user.lastName)
      setPatient(res.data[0].patient)
      setWorkspace(res.data[0].workspaceId)
  })
  getAllDrugOrder(consultationId).then( res => {
    setOrderList(res.data)
  
  })

}, [])







  return (
    <>
      <HeaderMain title="OPD-GP: Consultation => Discharge"  />
      <PatientData patient={patient} createUser={createUser}/>
      <div className="flex  flex-col  items-center">
        <OpdDischarge  orderList={orderList} 
         handleOnChange={handleOnChange} 
         handleOnClickAddOrder={handleOnClickAddOrder}
         handleOnClickDelete={handleOnClickDelete}
         handleOnClickUpdateMode={handleOnClickUpdateMode }
        //  handleOnClickUpdate={handleOnClickUpdate}
         addBar={addBar}
         defaultAdd="1"
         err = {error}
         editId= {editId}   

        />
        
      </div>

      <DischargeTailBar workspaceId={workspaceId} consultationId={consultationId}/>

    </>
  )
}
