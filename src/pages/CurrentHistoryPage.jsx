import CurrentHistory from '../features/user/components/CurrentHistory';
import HeaderMain from '../layouts/HeaderMain'
import ManDoctorLogo from '../icons/male-doctor.svg'
import ConsultationMenu from '../features/user/components/ConsultationMenu'


export default function WorkspacePage() {
    return (
        <>
            <HeaderMain title="Consultation" name="นพ.สวัสดี มีสุข" logo={ManDoctorLogo} />
            <ConsultationMenu active="1" />
            <div className="flex  justify-center">
                <CurrentHistory/>
            </div>
        </>
    )
}