import HeaderMain from '../layouts/HeaderMain'
import Workspace from '../features/user/components/workspace'



export default function WorkspacePage() {
    return (
        <>
            <HeaderMain title="My Workspace" />
            <div className="flex  justify-center">
                <Workspace />
            </div>
        </>
    )
}
