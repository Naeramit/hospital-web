import HeaderMain from '../layouts/HeaderMain'
import ManDoctorLogo from '../icons/male-doctor.svg'
import ConsultationMenu from '../features/user/components/ConsultationMenu'
import OpdDiagnosis from '../features/user/components/OpdDiagnosis'
import PatientData from '../features/user/components/PatientData'
import DiagTailBar from '../features/user/components/DiagTailBar'

export default function DiagnosisPage() {
    const patient =  {patientId: 15, attendUser : "พย.สบายดี มีสุข" ,firstName:"ทดสอบ" , lastName: "ไม่ค่อยสบาย" , age: {year: "60", month: "8"} , healthInsurance: "หลักประกันสุขภาพแห่งชาติ"}
    const diagList = [{id:1 ,  name: "Chronic Headache", type:1, statusBar: "recieved" ,  func:{ del:true, update:null }}, {id:2, name: "Insomnia", type:2, statusBar: "" , func:{ del:true, update:true }}, {id:3, name: "Drug Allergy", type:3, statusBar: "" , func:{ del:true, update:null }}]
 
    return (
        <>
            <HeaderMain title="OPD-GP: Consultation" name="นพ.สวัสดี มีสุข" logo={ManDoctorLogo} />
            <PatientData patient={patient}/>
            <ConsultationMenu active="6" />
            <div className="flex  flex-col  items-center">
                <OpdDiagnosis diagList={diagList} />         
            </div>
            <DiagTailBar/>
        </>
    )
}