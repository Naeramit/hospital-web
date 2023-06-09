import HeaderMain from '../layouts/HeaderMain'
import ManDoctorLogo from '../icons/male-doctor.svg'
import Workspace from '../features/user/components/workspace'



export default function WorkspacePage() {
    return (
        <>
            <HeaderMain title="My Workspace" name="นพ.สวัสดี มีสุข" logo={ManDoctorLogo} />
            <div className="flex  justify-center">
                <Workspace/>
            </div>
        </>
    )
}
