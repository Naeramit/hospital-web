import Diagnosis from '../features/user/components/Diagnosis';
import HeaderMain from '../layouts/HeaderMain'
import ManDoctorLogo from '../icons/male-doctor.svg'
import ConsultationMenu from '../features/user/components/ConsultationMenu'
import PatientData from '../features/user/components/PatientData'

export default function WorkspacePage() {
    const patient =  {patientId: 15, attendUser : "พย.สบายดี มีสุข" ,firstName:"ทดสอบ" , lastName: "ไม่ค่อยสบาย" , age: {year: "60", month: "8"} , healthInsurance: "หลักประกันสุขภาพแห่งชาติ"}
    const diagList = [{id:1 ,  name: "Chronic Headache"}, {id:2, name: "Insomnia"}, {id:3, name: "Drug Allergy"}]
 
 
    return (
        <>
            <HeaderMain title="Consultation" name="นพ.สวัสดี มีสุข" logo={ManDoctorLogo} />
            <PatientData patient={patient}/>
            <ConsultationMenu active="6" />
            <div className="flex  flex-col  items-center">
                <Diagnosis diagList={diagList} />         
            </div>
        </>
    )
}