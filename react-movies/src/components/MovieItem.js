import {Link} from "react-router-dom"

export function MovieItem({movie}){
    return (
        <div className="movie_card">
            <img src={`${movie.image_url}`}width = "150" alt = "Movie Thumb" />
            <h3>{movie.title}</h3>
            <h4><Link to= {'movie/${movie.id}'}>/Ver detalhes</Link></h4>
        </div>
    )
}