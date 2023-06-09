import RegistryForm from '../features/auth/components/RegistryForm';
import HeaderMain from '../layouts/HeaderMain'
import AdminLogo from '../icons/admin-logo.svg'
import Menu from '../features/admin/components/Menu'


export default function RegistryPage() {
    return (
        <>
            <HeaderMain title="User Management" name="เนรมิต ฤทธิยา" logo={AdminLogo} />
            <Menu active="1" />
            <div className="flex h-screen justify-center mt-[20px]">
                <RegistryForm />
            </div>
        </>
    )
}