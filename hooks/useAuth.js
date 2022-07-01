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
        const data = await axios.post('http://localhost:3000/api/log', {email, password})
        if (data) {
            setUser(data.data.logdata.user)
            router.push('/')
        } 
            
    }

    const toRegister = async({email, password1, password2}) => {
        const data = await axios.post('http://localhost:3000/api/regi', {email, password1, password2})
        console.log(data)
        const logData = {
            email: email,
            password: password1
        }
        toLogin(logData)
    }
    
    const toLogout = async () => {
        await axios.post('http://localhost:3000/api/logout')
        setUser(null)
        router.push('/')
    }

    const toAddDelivery = async ({num_facture, destinataire, bon_de_livraison, nombre_de_colis, type_de_paiment}) => {
        const data = await axios.post('http://localhost:3000/api/add_del', {num_facture, destinataire, bon_de_livraison, nombre_de_colis, type_de_paiment})
        console.log(data)
        router.push('/')
    }


    const toAddClient = async ({nom, contact, adresse, tel}) => {
        const data = await axios.post('http://localhost:3000/api/add_client', {nom, contact, adresse, tel})
        console.log(data)
        router.push('/clientlistpage')
    }
    return (
        <AuthContext.Provider value={{user, setUser, access, setAccess,clients, deliveries, setDels, toAddDelivery, toAddClient, setClients, toLogin, toRegister, toLogout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;