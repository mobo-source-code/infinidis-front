import axios from "axios";
import Image from "next/image";
import jsPDF from "jspdf"
import ReactDOMServer from "react-dom/server"

export const getStaticPaths = async () => {
    const res = await axios.get("https://infinidis-maroc-api.herokuapp.com/delivery/deliveries")
    const data = res.data

    const paths = data.map(del => {
        return {
            params: { id: del.id.toString() }
        }
    })

    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await axios.get(`https://infinidis-maroc-api.herokuapp.com/delivery/deliveries/${id}`)
    const data = res.data
    console.log(data)

    return {
        props: {del: data}
    }
}

const generatePDF = () => {
    var doc = new jsPDF("p", "pt", "a4");
    doc.html(ReactDOMServer.renderToString(document.querySelector("content")), {
        callback: function(pdf) {
            pdf.save("Ticket.pdf")
        }
    })
}

const DeliveryDetail = ({del}) => {

    return (
        <div id="content" className="flex flex-col h-screen justify-center items-center space-y-2 text-blue-800">
            <div className="w-3/4 flex flex-col space-y-2">
            <div className="flex space-x-5">
                <div className="border-2 border-blue-500 rounded-lg flex p-4 space-x-5">
                    <Image src="https://treurgia.sirv.com/infinidis/logoinf1.png" height={36} width={84} />
                    <div className="flex flex-col space-y-2">
                        <p className="font-bold text-xs font-source">Groupe Y Rue 45 N° 11/13</p>
                        <p className="font-bold text-xs font-source">El Oulfa - Casablanca</p>
                        <p className="font-bold text-xs font-source">06 48 55 26 76</p>
                        <p className="font-bold text-xs font-source">infinidismaroc@gmail.com</p>
                        <p className="font-bold text-xs font-source">R.C : 471701 / ICE : 0025496050013</p>
                    </div>
                </div>
                <div className="border-2 border-blue-500 rounded-lg flex flex-col justify-center p-4">
                    <p className="font-bold text-md">BON DECLARATION EXPEDITION</p>
                    <p className="font-bold text md">N° </p>
                </div>
            </div>
            <div className="flex space-x-12">
                <div className="border-2 border-blue-500 rounded-lg flex flex-col space-y-2 p-4">
                    <div className="border-b border-blue-500">
                        <p className="text-xs font-source">Réserver à expéditeur</p>
                    </div>
                    <p className="font-source text-xs font-bold">Nom ou raison sociale:........................................</p>
                    <p className="font-source text-xs font-bold">Adresse:..................................................................</p>
                    <p className="font-source text-xs font-bold">Ville:....................................................................</p>
                    <p className="font-source text-xs font-bold">Tel:......................................................................</p>
                    <p className="font-source text-xs font-bold">CIN:......................................................................</p>
                    <p className="font-source text-xs font-bold">Fait à le:................................................................</p>
                </div>
                <div className="border-2 border-blue-500 rounded-lg flex flex-col space-y-2 p-4 justify-center">
                <div className="border-b border-blue-500">
                        <p className="text-xs font-source">Réserver au destinatire</p>
                    </div>
                    <p className="font-source text-xs font-bold">Nom ou raison sociale:........................................</p>
                    <p className="font-source text-xs font-bold">Adresse:..................................................................</p>
                    <p className="font-source text-xs font-bold">Ville:....................................................................</p>
                    <p className="font-source text-xs font-bold">Tel:......................................................................</p>
                    <p className="font-source text-xs font-bold">CIN:......................................................................</p>
                </div>
            </div>
            <div className="flex space-x-28">
                <div className="p-5 justify-center items-center border-2 border-blue-500 rounded-lg">
                    <p className="font-bold text-md font-source">Retour de fond :</p>
                </div>
                <div className="p-5 justify-center items-center border-2 border-blue-500 rounded-lg">
                    <p className="font-bold text-md font-source">Nbre de Colis : </p>
                </div>
                <div className="p-5 justify-center items-center border-2 border-blue-500 rounded-lg">
                    <p className="font-bold text-md font-source">N° CIN: </p>
                </div>
            </div>
            <div className="flex space-x-28">
            <div className="p-4 justify-center items-center border-2 border-blue-500 rounded-lg">
                    <p className="font-bold text-md font-source h-28">Signature et Cachet expéditeur :</p>
                </div>
                <div className="p-4 w-64 justify-center items-center border-2 border-blue-500 rounded-lg">
                    <p className="font-bold text-md font-source h-28">Cachet du ramasseur :</p>
                </div>
            </div>
            </div>
            <button onClick={generatePDF} type="submit" className="w-40 h-10 px-4 py-0 tracking-wide text-white transition-colors duration-200 transform bg-button rounded hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        Télécharger
            </button>
        </div>
    )
}



export default DeliveryDetail;

