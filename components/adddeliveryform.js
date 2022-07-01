import Link from "next/link"
import AuthContext from "../hooks/useAuth";
import { useState, useContext } from "react";

const AddDeliveryForm = ({clients}) => {

    const [num_facture, setNumFacture] = useState()
    const [destinataire, setDesti] = useState()
    const [bon_de_livraison, setBon] = useState()
    const [nombre_de_colis, setNombreColis] = useState()
    const [type_de_paiment, setType] = useState()
    const {toAddDelivery} = useContext(AuthContext)



    const handleSubmit = async e => {
        e.preventDefault();
        console.log(destinataire)
        toAddDelivery({num_facture, destinataire, bon_de_livraison, nombre_de_colis, type_de_paiment})
    }

    return (
        <form onSubmit={handleSubmit}>
        <div className="flex p-10 pl-16 space-x-52 bg-white w-2/3 rounded-lg">
            <div className="flex flex-col items-left space-y-6">
                <label className="flex gap-x-2 items-baseline">  
                <span className="text-gray-700">
                    <p className="font-bold text-md font-source">Numéro Facture</p>
                    <input name="num_facture"
                        onChange={e => setNumFacture(e.target.value)}
                        placeholder="N°..."
                        type="text"
                        className="mt-1 w-48 inline rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                </span>
                </label>

                <label className="flex gap-x-2 items-baseline">
                <span className="text-gray-700">
                <p className="font-bold text-md font-source">Destinatire</p>
                <select value={destinataire} onChange={e => setDesti(parseInt(e.target.value))}
                    name="destinataire" className="mt-1 w-48 block rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                    {clients.map( client => (
                        <option value={client.id}>{client.nom}</option>
                    ))}
                </select>
                </span>
        </label>
            </div>
            <div className="flex flex-col space-y-6">
                <label className="flex gap-x-2 items-baseline">  
                <span className="text-gray-700">
                <p className="font-bold text-md font-source">Bon de Livraison</p>
                    <input name="bon_de_livraison"
                        onChange={e => setBon(e.target.value)} 
                        placeholder="N°..."
                        type="text"
                        className="mt-1 w-48 inline rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                </span>
                </label>

                <label className="flex gap-x-2 items-baseline">  
                <span className="text-gray-700">
                <p className="font-bold text-md font-source">Nombre de colis</p>
                    <input name="nombre_de_colis"
                        onChange={e => setNombreColis(e.target.value)} 
                        placeholder="Nombre..."
                        type="text"
                        className="mt-1 w-48 inline rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                </span>
                </label>
                <label className="flex gap-x-2 items-baseline">
                <span className="text-gray-700">
                <p className="font-bold text-md font-source">Type de paiment</p>
                <select onChange={e => setType(e.target.value)}  name="type_de_paiment" className="mt-1 w-48 block rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                    <option value="">Paiment par</option>
                    <option value="chèque">Chèque</option>
                    <option value="espéce">Espèces</option>
                    <option value="compte">Compte</option>
                    <option value="autre">Autre</option>
                </select>
                </span>
        </label>
                <div className="flex space-x-3 items-center">
                    <button type="submit" className="w-40 h-10 px-4 py-0 tracking-wide text-white transition-colors duration-200 transform bg-button rounded hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        Ajouter
                    </button>
                </div>
                
            </div>
            </div>
            </form>
    )
}

export default AddDeliveryForm;