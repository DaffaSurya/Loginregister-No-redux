import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import "../Style/Movie.css";

const Moviecontent = () => {
    const [movie, setmovie] = useState([]);

    useEffect(()=> {
       Getmovie();
    }, [])

    const Getmovie = () => {
        axios
        .get("https://api.themoviedb.org/3/movie/popular?api_key=8fc4684675f52ed46adbe0fed77b99ad&language=en-US&page=1")
        .then((res) => {
            console.log(res)
            setmovie(res.data.results)
        })
        .catch((err) => console.log(err.message))
    }
    return (
        <div>
        <Navbar/>
        <div className="div-movie">
        {movie.length && movie.map((item) => (
            <div className="container-movie">
                <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} className="image-movie"/>
                <p className="p-movie">{item.title}</p>
                <p className="p-rating"> {item.vote_average} / 10</p>
            </div>
        ))}
        </div>
        </div>
    );
}
 
export default Moviecontent;