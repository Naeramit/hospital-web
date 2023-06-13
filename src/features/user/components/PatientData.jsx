
import {age} from '../../../utils/datetime'




export default function PatientData(prop) {
  const  {patient, createUser} = prop 
  const healthInsurance = patient.healthInsurance == 1 ? "หลักประกันสุขภาพแห่งชาติ" : patient.healthInsurance == 2 ? "ประกันสังคม" :  patient.healthInsurance == 3 ? "ข้าราชการ" : "ไม่มีสิทธิการรักษา" 
  const Age = age(patient.birthdate)
  return (
    <div className=" w-full min-h-[50px] flex  justify-between  items-center  bg-orange-200">
      <div className="w-[200px] min-h-[40px]  font-bold flex justify-start items-center pl-2">
        {`Patient-Id : ${patient.id}`}
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
        {`Age:  ${Age.year} years ${Age.month} month`}
      </div>
      <div className="w-[400px] min-h-[40px]  font-bold flex justify-start items-center">
        {`Health Insurance: ${healthInsurance}`}
      </div>
      <div className="w-[300px] min-h-[40px]  font-bold flex justify-start items-center">
        {`Consulted By ${createUser}`}
      </div>
    </div>
  )
}
