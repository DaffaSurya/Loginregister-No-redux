import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../Component/Navbar";
import '../Style/Editcar.css'
const Editcar = () => {
   const [name, setname] = useState("");
   const [price, setprice] = useState("");
   const [img, setimg] = useState(null);
   const [cat, setcat] = useState("");
   const [Cars, setCars] = useState([]);
   const {id} = useParams()
   const navigate = useNavigate("");
   const [error, seterror] = useState('');

   const Handlenama = (e) => {
     setname(e.target.value)
   } 

   const Handleharga = (e) => {
    setprice(e.target.value)
   }

   const Handleimage = (e) => {
    setimg(e.target.files[0])
   }

   const Handlecategory = (e) => {
    setcat(e.target.value)
   }

   console.log(name);
   console.log(img)
   console.log(price)
   console.log(cat)

   const Getcars = () => {
    const token = localStorage.getItem("token");

    const config = {
      headers: {
        access_token: token
      },
    }

    axios
    .get(`https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`,  config)
    .then((res) => {
      console.log(res)
      setCars(res.data)
    })
    .catch((err) => console.log(err.message))
   }

   useEffect(() => {
      Getcars();
   }, [])
    

    const Handlesavebutton = async() => {
      const token = localStorage.getItem("token");

      const config = {
         headers: {
          access_token: token
         },
      }
      const formdata = new FormData();
      formdata.append("name", name)
      formdata.append("image", img)
      formdata.append("price", price)
      formdata.append("category", cat)

      try{
       const res = await axios.put(`https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`, formdata, config)
       console.log(res)
       navigate('/Content')
      }
      catch(error) {
        console.log(error.response)
        seterror(error.response)
      }

      // axios
      // .put(`https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`, formdata,  config)
      // .then((res) => {
      //   console.log(res)
      //   navigate("/Content")
      // })
      // .catch((err) => console.log(err.message))
    }


    return (
      <div>
       <Navbar/>
       <div className="div-editcar">
        <label className="label-editcar">Nama mobil</label>
        <input type={"text"} placeholder="Nama mobil" className="input-name" onChange={Handlenama}/>
        <label className="label-editcar">Harga mobil</label>
        <input type={"text"} placeholder="Harga mobil" className="input-name" onChange={Handleharga}/>
        <label>Image</label>
        <input type={"file"} className="input-name" onChange={Handleimage}/>
        <label>Category</label>
        <input type={"text"} className="input-name" placeholder="kategori" onChange={Handlecategory}/>
        <button className="button-save" onClick={Handlesavebutton}>
          Save
        </button>
       </div>
      </div>
    );
}
 
export default Editcar;