import { LoginForm } from "../components/LoginForm"
import pic from "../assets/sign.jpeg"
export const Login = () => {
    return (
        <div className='overflow-hidden h-[100vh]'>
            <img className='w-[100vw] h-[100vh] absolute -z-2 bg-contain brightness-50 top-0' src={pic} alt="" />
            <div className=" pt-12">
                <LoginForm/>
            </div>
        </div>
    )
}