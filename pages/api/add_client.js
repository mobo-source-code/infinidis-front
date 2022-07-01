
import axios from "axios";

export default async (req, res) => {

  const {nom, contact, adresse, tel} = req.body
  const body = {
    nom, 
    contact, 
    adresse, 
    tel
  }

  try {
    const client = await axios.post('https://infinidis-maroc-api.herokuapp.com/delivery/clients/', body)
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