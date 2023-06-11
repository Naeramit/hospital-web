
export default function PatientList(prop) {
  const { list } = prop



  const patientList = list.map(patient => (

      <div className='h-[30px] bg-base-100  flex  justify-around items-center  rounded-lg mt-1 hover:bg-base-300' key={patient.patientId} id={patient.patientId}>
        <div className="flex  justify-center   items-center min-w-[300px] h-[30px]">
          <div className="text-1xl font-bold "> {patient.createdAt} </div>
        </div>

        <div className="flex  justify-center items-center  min-w-[100px] h-[30px]">
          <div className="text-1xl font-bold"> { patient.attendUserId ? "Attend" : "Unattend" } </div>
        </div>

        <div className="flex  justify-center items-center  min-w-[200px] h-[30px]">
          <div className="text-1xl font-bold"> {patient.patientId} </div>
        </div>
        <div className="flex  justify-around items-center  min-w-[500px] h-[30px]">
          <div className="text-1xl font-bold"> {patient.firstName}  </div>
          <div className="text-1xl font-bold"> {patient.lastName}</div>
        </div>
      </div>

  )
  )
  return (
    <div className=" w-full max-h-[400px] h-[400px]  mt-2 flex flex-col items-center  ">
    
      {patientList}
    </div>
  )
}
