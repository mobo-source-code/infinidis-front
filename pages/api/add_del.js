import axios from "axios";

export default async (req, res) => {

  const {num_facture, destinataire, bon_de_livraison, nombre_de_colis, type_de_paiment} = req.body
  const body = {
    num_facture, 
    destinataire, 
    bon_de_livraison, 
    nombre_de_colis, 
    type_de_paiment
  }

  try {
    const client = await axios.post('https://infinidis-maroc-api.herokuapp.com/delivery/deliveries/', body)
    .then(res => {return res.data})
    res.status(200).json({client: client})
  } catch(error) {
    if (error.response) {
      console.error(error.response.data)
      console.error(error.response.status)
      console.error(error.response.headers)
      return res.status(401).json({message: error.response.data.detail})
    } else if (error.request) {
      console.error(error.request)
    } else {
      console.error('Error', error.message)
    }
    return res.status(500).json({message: "Something went wrong"})
  }
}