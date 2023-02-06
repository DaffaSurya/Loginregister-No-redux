import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Component/Navbar";
import "../Style/Create.css"
const Editcontent = () => {
  const [name, setname] = useState("");
  const [image, setimage] = useState(null);
  const [harga, setharga] = useState('');
  const [categori, setcategori] = useState("");
  const [error, seterror] = useState('');
  const navigate = useNavigate('');

  const Handlename = (e) => {
    setname(e.target.value)
  }

  const Handleimg = (e) => {
   setimage(e.target.files[0])
  }

  const Handleharga = (e) => {
   setharga(e.target.value)
  }

  const Handlecategori = (e) => {
    setcategori(e.target.value)
  }

  const handlecreate = async() => {
     const token = localStorage.getItem("token");

     const config = {
        headers: {
            access_token: token
        }
     }

     const formdata = new FormData();
     formdata.append("image", image)
     formdata.append("name", name)
     formdata.append("price", harga)
     formdata.append("category", categori)

     try {
       const res = await axios.post('https://bootcamp-rent-cars.herokuapp.com/admin/car', formdata, config)
       console.log(res)
       navigate('/Content')
     }
     catch (error) {
      console.log(error.response)
      seterror(error.response)
     }
 }
 //    axios
  //    .post("https://bootcamp-rent-cars.herokuapp.com/admin/car", formdata , config)
  //    .then((res)=> {
  //       console.log(res);
  //       navigate("/Content")
  //    })
  //    .catch((err) => console.log(err.message))

  console.log(name);
  console.log(image);
  console.log(harga);
  console.log(categori)

    return (
        <div>
            <Navbar/>
           <div className="create">
             <div className="input-content">
               <label>Name</label>
               <input type={"text"} placeholder="nama" className="Input-create" onChange={Handlename}/>
               <label>Image</label>
               <input type={"file"} className="Input-create" onChange={Handleimg}/>
               <label>Price</label>
               <input type={"text"} className="Input-create" placeholder="Masukkan harga" onChange={Handleharga}/>
               <label>Category</label>
               <input type={"text"} className="Input-create" onChange={Handlecategori}/>
               <div className="button-create">
                <button className="tombol" onClick={handlecreate}>Create</button>
                <button className="tombol">
                    <Link to={"/Content"} className="tombol">Cancel</Link>
                </button>
               </div>
             </div>
           </div>
        </div>
    );
}
 
export default Editcontent;