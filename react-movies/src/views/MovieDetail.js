import { useParams } from "react-router-dom";
import { useMovie } from "../hooks/useMovie";
 
export function MovieDetail() {
    const { movieId } = useParams();
    const movie = useMovie(movieId);
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