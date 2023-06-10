


export default function PatientData(prop) {
  const { patient } = prop


  return (
    <div className=" w-full min-h-[50px] flex  justify-between  items-center  bg-orange-200">
      <div className="w-[200px] min-h-[40px]  font-bold flex justify-start items-center pl-2">
        {`Patient-Id : ${patient.patientId}`}
      </div>
      <div className=" min-h-[40px] flex  justify-start items-center font-bold ">
        <div className="w-[60px]">
          Name:
        </div>
        <div className=" flex gap-6">
          <div >
            {`${patient.firstName}`}
          </div>
          <div >
            {`${patient.lastName}`}
          </div>
        </div>
      </div>
      <div className="w-[200px] min-h-[40px]  font-bold flex justify-start items-center">
        {`Age:  ${patient.age.year} years ${patient.age.month} month`}
      </div>
      <div className="w-[400px] min-h-[40px]  font-bold flex justify-start items-center">
        {`Health Insurance: ${patient.healthInsurance}`}
      </div>
      <div className="w-[300px] min-h-[40px]  font-bold flex justify-start items-center">
        {`Consulted By ${patient.attendUser}`}
      </div>
    </div>
  )
}
