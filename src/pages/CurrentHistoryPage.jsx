import CurrentHistory from '../features/user/components/CurrentHistory';
import HeaderMain from '../layouts/HeaderMain'
import ManDoctorLogo from '../icons/male-doctor.svg'
import ConsultationMenu from '../features/user/components/ConsultationMenu'
import PatientData from '../features/user/components/PatientData'

export default function WorkspacePage() {
    const patient =  [{patientId: 15, attendUser : "พย.สบายดี มีสุข" ,firstName:"ทดสอบ" , lastName: "ไม่ค่อยสบาย" , age: {year: "60", month: "8"} , healthInsurance: "หลักประกันสุขภาพแห่งชาติ"}]
    return (
        <>
            <HeaderMain title="Consultation" name="นพ.สวัสดี มีสุข" logo={ManDoctorLogo} />
            <PatientData patient={patient[0]}/>
            <ConsultationMenu active="1" />
            <div className="flex  justify-center">
                <CurrentHistory/>
            </div>
        </>
    )
}