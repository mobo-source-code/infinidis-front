import { useState, useContext, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import AuthContext from "../hooks/useAuth";

const Picker = ({delis}) => {

    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

    const [result, setResult] = useState([])
    





    const handleextract = e => {
        e.preventDefault()
        const start_date = new Date(startDate).toLocaleDateString()
        const end_date = new Date(endDate).toLocaleDateString()
        const resultData = delis.filter(d => {
            const date = new Date(d.creer_le).toLocaleDateString();
            console.log(date)
            return (date >= start_date && date <= end_date)
        })
        setResult(resultData)
    }

    return (

        <div className="flex flex-col h-screen p-10">
            <form className="flex p-10 pt-15" onSubmit={handleextract}>
                <DatePicker onChange={(update) => {
                    setDateRange(update);
                }} 
                            dateFormat="MM/dd/yyyy"
                            startDate={startDate} 
                            endDate={endDate}
                            selectsRange={true}
                            isClearable={true}   
                            selected={startDate}
                            placeholderText="Choisir les dates"
                            />
                <button className="w-40 h-10 px-4 py-0 tracking-wide text-white transition-colors duration-200 transform bg-green-500 rounded hover:bg-green-300 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Filtrer
                </button>
            </form>
                <table className="table-auto">
                    <thead className="border-b border-t border-slate-400">
                        <tr className="bg-white rounded-lg">
                        <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Num Facture</th>
                        <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Destinataire</th>
                        <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Status</th>
                        <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Date</th>
                        </tr>
                    </thead>
                    <tbody className="border-b bg-gray-100 border-slate-400">
                        {result.length ? result.map( r => (
                        <tr>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{r.num_facture}</td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{r.destinataire}</td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{r.status}</td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{r.creer_le}</td>
                        </tr>
                        )) : <tr>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">les résultats</td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">seront</td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">affichés</td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">ici</td>
                    </tr>
                        
                        }
                        
                    </tbody>
                </table>
        </div>
    )
}

export default Picker;

