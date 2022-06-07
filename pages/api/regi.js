import axios from "axios";

export default async (req, res) => {

  const {email, password1, password2} = req.body
  const body = {
    email, 
    password1,
    password2
  }

  try {
    const regdata = await axios.post('http://127.0.0.1:8000/users/dj-rest-auth/registration/', body)
    .then(res => {return res.data})
    res.status(200).json({regresponse: regdata})
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