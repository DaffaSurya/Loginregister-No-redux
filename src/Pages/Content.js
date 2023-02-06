import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Component/Navbar"
import "../Style/Content.css";
const Content = () => {
    const [content, setcontent] = useState([]);
    const [error, seterror] = useState('');
    const [errordelete, seterrordelete] = useState('');
    useEffect(()=> {
      Getdata();
      }, [])

      const Getdata = async() => {
        const token = localStorage.getItem("token");
       const config = {
           headers : {
             access_token : token,
           },
       };

       try {
         const res = await axios.get(`https://bootcamp-rent-cars.herokuapp.com/admin/v2/car?page=1&pageSize=10`, config)
         console.log(res)
         setcontent(res.data.cars)
       } catch (error){
          console.log(error.response)
          seterror(error.response)
       }

      //  axios
      //  .get(`https://bootcamp-rent-cars.herokuapp.com/admin/v2/car?page=1&pageSize=10`,config)
      //  .then((res)=> {
      //   console.log(res)
      //   setcontent(res.data.cars)
      //  })
      }

      const Handledelete = async(id) => {
        const token = localStorage.getItem("token");
        const config = {
          headers: {
           access_token: token,
          }
        }

        try {
         const res = await axios.delete(`https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`, config)
         console.log(res)
         alert('Delete berhasil..');
         Getdata();
        }
        catch (error){
          console.log(error.response);
          seterrordelete(error.response)

        }

        // axios
        // .delete(`https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`, config)
        // .then((res) => {
        //   console.log(res)
        //   Getdata();
        // })
        // .catch((err) => console.log(err))
      }
    return (
        <div>
        <Navbar/>
        <div className="div-wrap">
        {content.length &&
        content.map((item)=> {
          return(
             <div className="content">
              <img src={item.image} className="img"/>
              <h3 className="h3">{item.name}</h3>
              <p className="h4"> Harga item: Rp.{item.price}</p>
              <div className="div-button">
              <button className="button-delete" onClick={()=> Handledelete(item.id)}>Delete</button>
              <button className="button-delete">
                <Link to={`/EditCars/${item.id}`} className="button-edit">Edit Content</Link>
                </button>
              </div>
             </div>
          )
        })}
        {errordelete.length ? alert({errordelete}) : null}
        </div>
        </div>
    );
}
 
export default Content;