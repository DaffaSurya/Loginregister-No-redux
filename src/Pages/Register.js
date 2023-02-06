import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Component/Navbar";
import "../Style/Input.css";
const Register = () => {
  const [Email, setEmail] = useState('');
  const [pas, setpas] = useState('');
  const navigate = useNavigate('');
  const [error, seterror] = useState('');
 
 const Handleuser = (e) => {
  setEmail(e.target.value)
  return setEmail
 }

 const Handlepas = (e) => {
 setpas(e.target.value)
 return setpas
 }

 const Handlebutton = async() => {
  if(!Email.length && !pas.length) {
    seterror("Masukkan email dan password terlebih dahulu")
  } else {
    const payload = {
      email: Email,
      password: pas,
      role: "Admin",
    }
    try{
      const res = await axios.post(`https://bootcamp-rent-cars.herokuapp.com/admin/auth/register`, payload)
      console.log(res)
      navigate('/login')
    } catch (error) {
       console.log(error.response)
       seterror(error.response)
     }
  }
}
//   axios
//   .post(`https://bootcamp-rent-cars.herokuapp.com/admin/auth/register`, payload)
//   .then((res) => {
//     console.log(res);
//     localStorage.setItem('token', res.data.access_token);
//     navigate('/login');
//   })
//   .catch((err) => console.log(err.message))


 console.log(Email);
 console.log(pas);

  return (
    <div>
      <Navbar/>
      <div className="div-content-register">
        <div className="div-input">
          <h2>Register cuyy</h2>
          <label>username</label>
          <input type={Text} placeholder="Masukkan username anda" className="input" onChange={Handleuser}/>
          <label>Password</label>
          <input type={"password"} placeholder="Masukkan password anda" className="input" onChange={Handlepas}/>
          <button className="button" onClick={Handlebutton}>Register</button>
        </div>
        </div>
        {error.length ? <h1 className="error-regis">{error}</h1>: null}
    </div>
  )
}

export default Register;