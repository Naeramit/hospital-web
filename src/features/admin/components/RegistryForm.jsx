import { useState } from 'react'
import {registry} from '../../../api/auth-api'


import RegistryInput from './RegistryInput'
import RadioInput from './RadioInput'
import SelectInput from './SelectInput'





const initialInput = {
    username: '',
    firstName: '',
    lastName: '',
    licenseNumber: '',
    gender:'',
    role:'',
  };




export default function RegistryForm(prop) {
    const { formData} = prop

    const [input, setInput] = useState(initialInput);
    const [respone , setRespone ] = useState({})

    const handleChangeInput = e => {
        setInput({ ...input, [e.target.name]: e.target.value });
      };
    
    const handleSelect = e => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const handleClearForm = e => {
        e.preventDefault()
        setInput(initialInput)
    }

    const handleSubmitForm = async e => {
            e.preventDefault();
            const role = document.getElementById("role").value
            const male = document.getElementById("male").checked
            const female = document.getElementById("female").checked
            const gender = male ? 1 : female ? 2 : 0
            const password = Math.floor(Math.random() * 1000000) + ""
            const registryInput = {...input, role: role, gender: gender, password:password}
            const rs = await registry(registryInput)
            if (rs.data.username == input.username){
                setRespone({title: "Successfully created", username: registryInput.username , password: registryInput.password })
                window.my_modal_1.showModal()
            }
        }



    return (
        <div className='bg-white flex  justify-center rounded-lg  w-[680px] h-[540px]'>
            <form className="felx flex-col w-[590px] mt-[30px]">
                <RegistryInput label="Username" type="text" name="username"  handleChangeInput={handleChangeInput} value={input.username}/>
                <RegistryInput label="First Name" type="text" name="firstName" handleChangeInput={handleChangeInput} value={input.firstName}/>
                <RegistryInput label="Last Name" type="text"  name="lastName" handleChangeInput={handleChangeInput} value={input.lastName}/>
                <RadioInput  data={formData.gender}  name="gender" handleSelect={handleSelect}/>
                <SelectInput label="Role" data={formData.role} name="role" handleSelect={handleSelect}/>
                <RegistryInput label="License Number" type="text" name="licenseNumber" handleChangeInput={handleChangeInput} value={input.licenseNumber}/>
                <div className="flex justify-between mt-10 ">
                    <button className="btn  btn-warning  w-[200px] text-xl"
                    onClick={handleClearForm}
                    >Clear
                    </button>
                    <button className="btn btn-primary w-[360px] text-xl" 
                    onClick={handleSubmitForm}>
                        Add user & get password
                    </button>
                    <dialog id="my_modal_1" className="modal">
                        <form method="dialog" className="modal-box">
                            { respone.username ? (
                                <>
                                <h3 className="font-bold text-lg">{respone?.title}</h3>
                                <p className="py-4">{`Username : ${respone?.username}`}</p>
                                <p className="py-4">{`Password : ${respone?.password}`}</p>
                                </>
                            ) :
                                <>
                                <h3 className="font-bold text-lg">{respone?.title}</h3>
                                <p className="py-4">{respone?.msg}</p>
    
                                </>
                            }
                            <div className="modal-action">
                                <button className="btn" >Close</button>
                            </div>
                        </form>
                    </dialog>
                </div>
            </form>
        </div>
    );
}