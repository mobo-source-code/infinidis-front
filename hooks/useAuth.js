import {createContext, useState} from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

const AuthContext = createContext(null)

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [access, setAccess] = useState(null)
    const [clients, setClients] = useState(null)
    const [deliveries, setDels] = useState(null)

    const router = useRouter()

    const toLogin = async({email, password}) => {
        const res = await axios.post('https://infinidis-front-front.vercel.app/api/log', {email, password})
        const logdata = res.data
        if (logdata) {
            console.log(logdata)
            setUser(logdata)
            router.push('/')
        }     
    }

    const toRegister = async({email, password1, password2}) => {
        const res = await axios.post('https://infinidis-front-front.vercel.app/api/regi', {email, password1, password2})
        console.log(res)
        const logData = {
            email: email,
            password: password1
        }
        toLogin(logData)
    }
    
    const toLogout = async () => {
        await axios.post('https://infinidis-front-front.vercel.app/api/logout')
        setUser(null)
        router.push('/')
    }

    const toAddDelivery = async ({num_facture, destinataire, bon_de_livraison, nombre_de_colis, type_de_paiment}) => {
        const res = await axios.post('https://infinidis-front-front.vercel.app/api/add_del', {num_facture, destinataire, bon_de_livraison, nombre_de_colis, type_de_paiment})
        console.log(res.data)
        router.push('/')
        console.log("connected")
    }


    const toAddClient = async ({nom, contact, adresse, tel}) => {
        const res = await axios.post('https://infinidis-front-front.vercel.app/api/add_client', {nom, contact, adresse, tel})
        console.log(res.data)
        router.push('/clientlistpage')
        console.log("connected")
    }
    return (
        <AuthContext.Provider value={{user, setUser, access, setAccess,clients, deliveries, setDels, toAddDelivery, toAddClient, setClients, toLogin, toRegister, toLogout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;