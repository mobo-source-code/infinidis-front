import axios from "axios";
import cookie from 'cookie';

export default async (req, res) => {

  const {email, password} = req.body
  const body = {
    email, 
    password
  }
  console.log("connected")
  try {
    const data = await axios.post('https://infinidis-maroc-api.herokuapp.com/users/dj-rest-auth/login/', body)
    .then(res => {return res.data})
    console.log(data.refresh_token)
    const refresh = data.refresh_token
    res.setHeader('Set-Cookie', cookie.serialize('refresh', refresh, {httpOnly: false, secure: true, sameSite: 'strict' , maxAge: 60*60*24, path: '/'}))
    res.status(200).json({refresh: data.refresh_token})
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