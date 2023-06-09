import RegistryInput from './RegistryInput'
import RadioInput from './RadioInput'
import SelectInput from './SelectInput'


export default function LoginForm() {
    const gender = [{ id: 1, value: "male" }, { id: 2, value: "female" }]
    const role = [{ id: 1, value: "physician" }, { id: 2, value: "dentist" }, { id: 3, value: "nurse" }, { id: 4, value: "phamacist" }, { id: 5, value: "medical technologist" }, { id: 6, value: "radiological technologist" }, { id: 7, value: "physiotherapist" }, { id: 0, values: "others" }]
    const headModal = "Success"
    const contentModal = "username ... is  created \n password is ........ "




    return (
        <div className='bg-white flex  justify-center rounded-lg  w-[680px] h-[540px]'>
            <form className="felx flex-col w-[590px] mt-[30px]">
                <RegistryInput label="Username" type="text" />
                <RegistryInput label="First Name" type="text" />
                <RegistryInput label="Last Name" type="text" />
                <RadioInput name="Gender" data={gender} />
                <SelectInput name="Role" data={role} />
                <RegistryInput label="License Number" type="text" />
                <div className="flex justify-between mt-10 ">
                    <button className="btn  btn-warning  w-[200px] text-xl">Clear</button>
                    <button className="btn btn-primary w-[200px] text-xl" 
                    onClick={(e) => {
                        e.preventDefault()
                        window.my_modal_1.showModal()
                    }}>Confirm</button>
                    <dialog id="my_modal_1" className="modal">
                        <form method="dialog" className="modal-box">
                            <h3 className="font-bold text-lg">{headModal}</h3>
                            <p className="py-4">{contentModal}</p>
                            <div className="modal-action">
                                <button className="btn">Close</button>
                            </div>
                        </form>
                    </dialog>
                </div>
            </form>
        </div>
    );
}