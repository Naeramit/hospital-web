import HeaderMain from '../layouts/HeaderMain'
import OpdDoctorMenu from '../features/user/components/OpdDoctorMenu'
import OpdDoctor from '../features/user/components/OpdDoctor'
import {getAllTask} from '../api/workspace-api'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

 
export default function DoctorOpdPage() {
  const [ patientList , setPatientList ] = useState([])
  const {workspaceId} = useParams()


  useEffect( () => {
    getAllTask(workspaceId).then( res => 
      setPatientList(res.data)
    )
  }, [])
  

  return (
    <>
    <HeaderMain title="WORKSPACE - OPD GP"  />
    <OpdDoctorMenu active="1" />
    <div className="flex  flex-col  h-screen  w-full  items-center justify-start mt-[20px]  rounded-lg">
        <OpdDoctor patientList={patientList}/>
    </div>
</>
  )
}
