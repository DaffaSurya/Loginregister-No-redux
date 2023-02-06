import "../Style/Navbar.css"
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="div-navbar">
            <ul className="ul-navbar">
            <Link to={"/"} className="Link"><li>Homepage </li></Link>
            <Link to={"/Content"} className="Link"><li>Cars</li></Link>
            <Link to={"/login"} className="Link"><li>Login</li></Link>
            <Link to={"/Register"} className="Link"><li>Register</li></Link>
            <Link to={"/Movie"} className="Link"><li>Movie</li></Link>
            <Link to={"/Edit"} className="Link"><li>Create</li></Link>
           </ul>
        </div>
    );
}
 
export default Navbar;