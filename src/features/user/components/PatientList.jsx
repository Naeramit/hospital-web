import {dateTimeTH } from '../../../utils/datetime'
import { Link } from 'react-router-dom';


export default function  PatientList(prop) {
  const { list } = prop



  const patientList = list.map(patient => (
    <Link to={`/doctor/CH/${patient.id}`} key={patient.id} id={patient.id}>
      <div className='h-[30px] bg-base-100  flex  justify-around items-center  rounded-lg mt-1 hover:bg-base-300'>
        <div className="flex  justify-center   items-center min-w-[300px] h-[30px]">
          <div className="text-1xl font-bold "> {dateTimeTH(patient.createdAt)} </div>
        </div>

        <div className="flex  justify-center items-center  min-w-[100px] h-[30px]">
          <div className="text-1xl font-bold"> { patient.attendUserId ? "Attend" : "Unattend" } </div>
        </div>

        <div className="flex  justify-center items-center  min-w-[200px] h-[30px]">
          <div className="text-1xl font-bold"> {patient.patient.id} </div>
        </div>
        <div className="flex  justify-around items-center  min-w-[500px] h-[30px]">
          <div className="text-1xl font-bold"> {patient.patient.firstName}  </div>
          <div className="text-1xl font-bold"> {patient.patient.lastName}</div>
        </div>
      </div>
    </Link>

  )
  )
  return (
    <div className=" w-full max-h-[400px] h-[400px]  mt-2 flex flex-col items-center  ">
    
      {patientList}
    </div>
  )
}
