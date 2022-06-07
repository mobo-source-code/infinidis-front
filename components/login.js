import LoginForm from "./loginForm";
import Image from "next/image";


const Login = () => {
    return (
        <div className="h-screen max-w-5xl mx-auto flex space-x-20 justify-center items-center">
            <Image height={284} width={507} src="https://treurgia.sirv.com/infinidis/logoinf1.png" />
            <LoginForm />
        </div>
    )
}

export default Login;