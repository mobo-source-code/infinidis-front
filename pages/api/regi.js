import axios from "axios";

export default async (req, res) => {

  const {email, password1, password2} = req.body
  const body = {
    email, 
    password1,
    password2
  }
  console.log("connected")
  try {
    const data = await axios.post('https://infinidis-maroc-api.herokuapp.com/users/dj-rest-auth/registration/', body)
    .then(res => {return res.data})
    console.log(data.refresh_token)
    res.status(200).json({regresponse: data.refresh_token})
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