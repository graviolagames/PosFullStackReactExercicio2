import {useEffect,useState } from "react";
import { MoviesService } from "../api/MoviesService";
import { useParams } from "react-router-dom";

export function MovieDetail() {
    const [movie, setMovie] = useState({});
    const { movieId } = useParams();
    
    useEffect(()=>{
        MoviesService.getMovieDetail(movieId).then(({data})=>setMovie(data)
        );
    },[movieId]);
    
    return (
        <section className="movie-detail">
            <h1>{movie.title}</h1>
            <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                width= "150"
                alt="Movie thumb"
            />
            <strong>Original language:</strong>{movie.original_language}
            <p>{movie.overview}</p>
        </section>
    );
};