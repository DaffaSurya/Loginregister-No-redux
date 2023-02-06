import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
   const [loading,setloading] = useState(true);
   const [islogin,setislogin] = useState(false);

   useEffect(() => {
    setloading(true);
    const token = localStorage.getItem("token");

    if(!token) {
        setloading(false)
        setislogin(false)
    } else {
        setislogin(true)
        setloading(false)
    }
   }, [islogin])

   if(loading) {
    return "loadingg..."
   }

   return islogin ? <Outlet/> : <Navigate to={"/login"}/>
}
 
export default ProtectedRoute;