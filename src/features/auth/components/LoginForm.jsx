import LoginInput  from './LoginInput'
import useForm from '../../../hooks/useForm'
import {useDispatch} from 'react-redux'
import {login} from '../slice/auth-slice'

export default function LoginForm() {
    const { input, handleChangeInput, handleSubmitForm } = useForm(
        {
          username: '',
          password: ''
        }
    );

    const dispatch = useDispatch();

    const onSubmit = async data => {
        try {
            await dispatch(login(data)).unwrap();
        }catch (err){
            console.log(err)
        }
    }

 
    return (
        <div className='bg-white flex  justify-center min-w-[400px] max-w-[500px] min-h-[400px] rounded-lg'>
                <form className="felx flex-col w-[80%]" onSubmit={handleSubmitForm(onSubmit)}>
                    <LoginInput label="Username"/>
                    <LoginInput label="Password" type="password"/>
                    <div className="flex  justify-center mt-12 mb-6">
                        <button className="btn btn-primary w-56 text-xl">log in</button>
                    </div>
                </form>
        </div>
    );
  }