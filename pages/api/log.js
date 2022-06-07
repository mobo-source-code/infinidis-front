import axios from "axios";
import cookie from 'cookie';

export default async (req, res) => {

  const {email, password} = req.body
  const body = {
    email, 
    password
  }

  try {
    const logdata = await axios.post('http://127.0.0.1:8000/users/dj-rest-auth/login/', body)
    .then(res => {return res.data})
    const refresh = logdata.refresh_token
    res.setHeader('Set-Cookie', cookie.serialize('refresh', refresh, {httpOnly: true, secure: false, sameSite: 'strict' , maxAge: 60*60*24, path: '/'}))
    res.status(200).json({logdata: logdata})
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