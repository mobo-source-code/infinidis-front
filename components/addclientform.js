import Link from "next/link"
import AuthContext from "../hooks/useAuth";
import { useState, useContext } from "react";

const AddClientForm = () => {


    const [nom, setNom] = useState()
    const [contact, setContact] = useState()
    const [adresse, setAdresse] = useState()
    const [tel, setTel] = useState()

    const {toAddClient} = useContext(AuthContext)

    const handleSubmit = async e => {
        e.preventDefault();
        console.log({nom, contact, adresse, tel})
        toAddClient({nom, contact, adresse, tel})
    }

    return (
        <form onSubmit={handleSubmit}>
        <div className="bg-white pl-10 p-6  rounded-lg flex flex-col space-y-5 w-2/5">
            <label className="flex gap-x-2 items-baseline">  
                <span className="text-gray-700">
                    <p className="font-bold text-md font-source">Nom client</p>
                    <input name="nom"
                        onChange={e => setNom(e.target.value)} 
                        placeholder="Nom de l'entreprise"
                        type="text"
                        className="mt-1 w-80 inline rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                </span>
            </label>
            <label className="flex gap-x-2 items-baseline">  
                <span className="text-gray-700">
                    <p className="font-bold text-md font-source">Contact</p>
                    <input name="contact"
                        onChange={e => setContact(e.target.value)} 
                        placeholder="Nom de la personne..."
                        type="text"
                        className="mt-1 w-80 inline rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                </span>
            </label>
            <label className="flex gap-x-2 items-baseline">  
                <span className="text-gray-700">
                    <p className="font-bold text-md font-source">Adresse</p>
                    <input name="adresse"
                        onChange={e => setAdresse(e.target.value)} 
                        placeholder="Ex: Boulevard Anfa..."
                        type="text"
                        className="mt-1 w-80 inline rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                </span>
            </label>
            <label className="flex gap-x-2 items-baseline">  
                <span className="text-gray-700">
                    <p className="font-bold text-md font-source">Téléphone</p>
                    <input name="tel"
                        onChange={e => setTel(e.target.value)} 
                        placeholder="N°..."
                        type="text"
                        className="mt-1 w-80 inline rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                </span>
            </label>
            <div className="flex space-x-6">
            <button type="submit" className="w-40 h-10 px-4 py-0 tracking-wide text-white transition-colors duration-200 transform bg-button rounded hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        Ajouter Client
            </button>

            <button className="w-40 h-10 px-4 py-0 tracking-wide text-white transition-colors duration-200 transform bg-green-500 rounded hover:bg-green-300 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Importer Client
            </button>
            </div>
        </div>
        </form>
    )
}

export default AddClientForm;

    