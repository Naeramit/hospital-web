import RegistryInput from './RegistryInput'
import RadioInput from './RadioInput'
import SelectInput from './SelectInput'


export default function RegistryForm(prop) {
    const { formData, respone} = prop



    return (
        <div className='bg-white flex  justify-center rounded-lg  w-[680px] h-[540px]'>
            <form className="felx flex-col w-[590px] mt-[30px]">
                <RegistryInput label="Username" type="text" />
                <RegistryInput label="First Name" type="text" />
                <RegistryInput label="Last Name" type="text" />
                <RadioInput name="Gender" data={formData.gender} />
                <SelectInput name="Role" data={formData.role} />
                <RegistryInput label="License Number" type="text" />
                <div className="flex justify-between mt-10 ">
                    <button className="btn  btn-warning  w-[200px] text-xl">Clear</button>
                    <button className="btn btn-primary w-[360px] text-xl" 
                    onClick={(e) => {
                        e.preventDefault()
                        window.my_modal_1.showModal()
                    }}>Add user & get password</button>
                    <dialog id="my_modal_1" className="modal">
                        <form method="dialog" className="modal-box">
                            <h3 className="font-bold text-lg">{respone.title}</h3>
                            <p className="py-4">{respone.result}</p>
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