import RegistryForm from '../features/admin/components/RegistryForm';
import HeaderMain from '../layouts/HeaderMain'
import AdminLogo from '../icons/admin-logo.svg'
import Menu from '../features/admin/components/Menu'


export default function RegistryPage() {
    const gender = [{ id: 1, value: "male" }, { id: 2, value: "female" }]
    const role = [{ id: 1, value: "physician" }, { id: 2, value: "dentist" }, { id: 3, value: "nurse" }, { id: 4, value: "phamacist" }, { id: 5, value: "medical technologist" }, { id: 6, value: "radiological technologist" }, { id: 7, value: "physiotherapist" }, { id: 0, values: "others" }]

    const formData = {gender, role}
    const result = "username ... is  created \n password is ........ "

    const respone = {title: "Success", result }


    return (
        <>
            <HeaderMain title="User Management" name="เนรมิต ฤทธิยา" logo={AdminLogo} />
            <Menu active="1" />
            <div className="flex h-screen justify-center mt-[20px]">
                <RegistryForm formData = {formData} respone={respone} />
            </div>
        </>
    )
}