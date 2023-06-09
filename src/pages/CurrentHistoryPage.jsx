import CurrentHistory from '../features/user/components/CurrentHistory';
import HeaderMain from '../layouts/HeaderMain'
import ManDoctorLogo from '../icons/male-doctor.svg'
import Menu from '../features/user/components/Menu'


export default function WorkspacePage() {
    return (
        <>
            <HeaderMain title="Consultation" name="นพ.สวัสดี มีสุข" logo={ManDoctorLogo} />
            <Menu active="1" />
            <div className="flex h-screen justify-center mt-[20px]">
                <CurrentHistory/>
            </div>
        </>
    )
}