import LoginForm from '../features/auth/components/LoginForm';
import hospitalLogo from '../icons/hospital.svg'

export default function LoginPage(){
    return (
        <div className="flex h-screen justify-center items-center">
            <div className="flex min-w-[900px] max-w-[1400px] min-h-[300px] max-h-[600px] justify-between gap-[200px]">
            <div className='flex flex-col justify-end items-center'>
                <img src={hospitalLogo} className=" w-[300px]  rounded-lg"/>
                <h1 className=' text-4xl font-bold'>Public Hospital Center</h1>
            </div>
            <LoginForm/>
            </div>
        </div>
        
    )
}