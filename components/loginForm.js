import Link from "next/link";
import { useState, useContext } from "react";
import AuthContext from "../hooks/useAuth";

const LoginForm = () => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {toLogin} = useContext(AuthContext)

    const handleSubmit = async e => {
        e.preventDefault();
        toLogin({email, password})
    }

    return (
        <div className="flex flex-col space-y-5">
            <div className="flex flex-col space-y-2 justify-cente items-center">
                <h1 className="font-bold font-inter text-black text-3xl">
                    Connectez-vous
                </h1>
                <h2 className="font-light font-source text-gray-500 text-xs text-center">
                    Entrez vos identifiants
                </h2>
            </div>

            <div className="w-96 bg-white rounded-lg p-7 flex flex-col space-y-7 justify-center items-center">
                <form onSubmit={handleSubmit} className="w-full space-y-5 font-inter">
                    <div className="w-full">
                        <label htmlFor="E-mail" className="block mb-2 text-sm text-gray-800">Adresse Email</label>
                        <input type="email" name="email" placeholder="exemple@exemple.com" 
                                className="block w-full tracking-wide px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                onChange={e => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm text-gray-800">Mot de passe</label>
                        <input type="password" name="password1" placeholder="Votre mot de passe" 
                                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                onChange={e => setPassword(e.target.value)}
                        />
                    </div>

                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-button rounded hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Connectez-vous
                </button>
                </form>
                <Link href="/registerpage">
                <p class="mt-6 text-sm text-center text-gray-400"> 
                    <a href="#" class="text-links focus:outline-none focus:underline hover:underline">
                        Ou Inscrivez-vous
                    </a>.
                </p> 
                </Link>
            </div> 
        </div>
    )
}

export default LoginForm;