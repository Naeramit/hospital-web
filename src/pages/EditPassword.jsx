import HeaderMain from '../layouts/HeaderMain'
import MaleDoctor from '../icons/male-doctor.svg'

export default function EditPassword() {


    return (
        <>
            <HeaderMain title="Edit Password" name="นพ.สวัสดี มีสุข" logo={MaleDoctor} />
            <div className="flex h-screen justify-center mt-[40px]">
                <div className=' bg-white w-[440px] h-[400px] shadow-md rounded-lg flex flex-col  justify-center p-10'>
                    <div className=' font-bold'> สวัสดี </div>
                    <div > นพ.สวัสดี มีสุข</div>
                    <div > Please, Change Password !! </div>
                    <form >
                        <div className="flex w-full flex-col gap-4 my-2  items-around justify-center">
                            <label className="label w-[300px] ">
                                <span className="label-text  text-xl"> New Password </span>
                            </label>
                            <input type="text" className="input input-bordered input-secondary w-[360px]  h-12 my-1 " autoFocus />
                        </div>
                        <div className="flex w-full flex-col  gap-4 my-2  items-around justify-center ">
                            <label className="label w-[300px] ">
                                <span className="label-text  text-xl"> Confirm New Password </span>
                            </label>
                            <input type="text" className="input input-bordered input-secondary w-[360px]  h-12 my-1 " />
                        </div>


                    </form>


                </div>
            </div>
        </>
    )
}
