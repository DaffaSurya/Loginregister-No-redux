import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Component/Navbar";
import "../Style/Login.css"

const Login = () => {
    const [useremail, setuseremail] = useState('');
    const [password, setpassword] = useState('');
    const [login, setlogin] = useState(false);
    const [error, seterror] = useState('');
    const navigate = useNavigate('');

    const Handleuseremail = (e) => {
        setuseremail(e.target.value)
        return setuseremail
    }

    const Handlepassword = (e) => {
        setpassword(e.target.value)
        return setpassword
    }

    const Handlelogin = async() => {
        if(!useremail.length && !password.length) {
            seterror('Masukkan email dan password terlebih dahulu')
        } else {
            const payload = {
                email: useremail,
                password: password,
            }
            try{
            const res = await axios.post('https://bootcamp-rent-cars.herokuapp.com/admin/auth/login', payload)
             console.log(res)
             localStorage.setItem('token', res.data.access_token);
             navigate('/Content');
            }
            catch (error) {
             console.log(error.response)
             seterror(error.response.data.message)
            }
    
        }

        // axios
        // .post('https://bootcamp-rent-cars.herokuapp.com/admin/auth/login',payload)
        // .then((res) => {
        //     console.log(res)
        //     localStorage.setItem("token", res.data.access_token);
        //     navigate('/Content');
        // })
        // .catch((err) => console.log(err))
   }

   useEffect(()=> {
    const token = localStorage.getItem("token");
    if(!token) {
        setlogin(false)
    } else {
        setlogin(true)
    }
})
 
   

    const Handleexit = () => {
        localStorage.removeItem("token");
        navigate('/');
    }

    console.log(useremail);
    console.log(password)
    return (
        <div>
            <Navbar/>
            {login ? (<button onClick={Handleexit} className="button-exit">keluar</button>): (
              <div>
              <div className="div-login">
               <label className="label">Username</label>
               <input type={Text} placeholder="Masukkan username" className="input" onChange={Handleuseremail}/>
               <label className="label">Password</label>
               <input type={"password"} placeholder="masukkan password" className="input" onChange={Handlepassword}/>
               <button className="button-login" onClick={Handlelogin}>Login</button>
              </div>
             {error.length ? <h1 className="error-login">{error}</h1>: null}
          </div>
            )}
        </div>
    );
}
 
export default Login;