import LoginInput  from './LoginInput'

export default function LoginForm() {
  
    return (
        <div className='bg-white flex  justify-center min-w-[400px] max-w-[500px] min-h-[400px] rounded-lg'>
                <form className="felx flex-col w-[80%]">
                    <LoginInput label="Username"/>
                    <LoginInput label="Password" type="password"/>
                    <div className="flex  justify-center mt-12 mb-6">
                        <button className="btn btn-primary w-56 text-xl">log in</button>
                    </div>
                </form>
        </div>
    );
  }