import { useState, useContext } from "react";
import { useRouter } from 'next/router';
// import AuthContext from "../hooks/useAuth";
import Link from "next/link";
import Image from "next/image";

import RegisterForm from "./registerForm";

const Register = () => {
    return (
        <div className="h-screen max-w-5xl mx-auto flex space-x-20 justify-center items-center">
            <Image height={284} width={507} src="https://treurgia.sirv.com/infinidis/logoinf1.png" />
            <RegisterForm />
        </div>
    )
}

export default Register;