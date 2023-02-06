import Navbar from "../Component/Navbar";
import Cat from "../Assets/cat cute.jpg"
const Homepage = () => {
    return (
        <div>
            <Navbar/>
            <img src={Cat} className="cat-img" />
            <h1>Website ini hanya untuk belajar</h1>
        </div>
    );
}
 
export default Homepage;