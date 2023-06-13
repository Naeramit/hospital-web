import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import HeaderMain from '../layouts/HeaderMain'
import { useState } from 'react'
import { createNewPassword } from '../api/user-api'

export default function EditPassword() {
    const user = useSelector(state => state.auth.user)
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [err, setErr] = useState(null)

    const handleOnChange = (e) => {
        if (e.target.name == "password") {
            setPassword(e.target.value)
        }

        if (e.target.name == "confirmPassword") {
            setConfirmPassword(e.target.value)
        }

    }


    const handleOnSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setErr("Password & Confirm Password does not match ")
            return
        }
        if (password.length < 6) {
            setErr("Password must be at least 6 charactor")
            return
        }

        const rs = await createNewPassword({password: password, confirmPassword: confirmPassword})
        if (rs.data.result) {
            window.my_modal_1.showModal()
        }

    }





    return (
        <>
            <HeaderMain title="Edit Password" />
            <div className="flex h-screen justify-center mt-[40px]">
                <div className=' bg-white w-[440px] h-[500px] shadow-md rounded-lg flex flex-col  justify-center p-10'>
                    <div className=' font-bold mb-2 '> Welcome ...  </div>
                    <div > {user.firstName + " " + user.lastName}</div>
                    <div className=' font-bold mt-2'> Please, Change Password !! </div>
                    <form >
                        <div className="flex w-full flex-col gap-4 my-2  items-around justify-center">
                            <label className="label w-[300px] ">
                                <span className="label-text  text-xl"> New Password </span>
                            </label>
                            <input
                                type="password"
                                className="input input-bordered input-secondary w-[360px]  h-12 my-1 "
                                name="password"
                                value={password}
                                onChange={handleOnChange}

                                autoFocus />
                        </div>
                        <div className="flex w-full flex-col  gap-4 my-2  items-around justify-center ">
                            <label className="label w-[300px] ">
                                <span className="label-text  text-xl"> Confirm New Password </span>
                            </label>
                            <input
                                type="password"
                                className="input input-bordered input-secondary w-[360px]  h-12 my-1 "
                                name="confirmPassword"
                                value={confirmPassword}
                                onChange={handleOnChange}
                            />
                        </div>
                        {err && 
                        <di className="flex justify-center  font-bold  text-warning">
                            {err}
                        </di>
                        }
                        <div className='flex justify-center mt-8'>
                            <button
                                className='btn btn-success '
                                onClick={handleOnSubmit}
                            >Create New Password</button>
                        </div>
                        <dialog id="my_modal_1" className="modal">
                            <form method="dialog" className="modal-box">
                                <h3 className="font-bold text-lg">"New password is created"</h3>
                                <Link to={`/doctor/`}>
                                    <div className="modal-action">
                                        <button className="btn bg-success text-white hover:bg-success" >Let's Start My work </button>
                                    </div>
                                </Link>
                            </form>
                        </dialog>


                    </form>


                </div>
            </div>
        </>
    )
}
