import RegistryForm from '../features/admin/components/RegistryForm';
import HeaderMain from '../layouts/HeaderMain'
import Menu from '../features/admin/components/Menu'



export default function RegistryPage() {
    const gender = [{ id: 1, value: "male" }, { id: 2, value: "female"  },  { id: 0, value: "other" } ]
    const role = [{ id: 2, value: "physician" }, { id: 3, value: "dentist" }, { id: 4, value: "nurse" }, { id: 5, value: "phamacist" }, { id: 6, value: "medical technologist" }, { id: 7, value: "radiological technologist" }, { id: 8, value: "physiotherapist" }, { id: 0, values: "others" }]
    const formData = {gender, role}


    return (
        <>
            <HeaderMain title="User Management"  />
            <Menu active="1" />
            <div className="flex h-screen justify-center mt-[20px]">
                <RegistryForm formData = {formData}/>
            </div>
        </>
    )
}