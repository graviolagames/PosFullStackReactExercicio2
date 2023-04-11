import { useEffect, useState } from "react";
import { MoviesService } from "../api/MoviesService";

export function useMovies() {
    const [movies, setMovies] = useState([]);
    // request
    useEffect(() => {
       MoviesService.getMovies().then(({data})=>{
        const updatedMovies = data.results.map((movie)=>({...movie,image_url:`https://image.tmdb.org/t/p/w500/${movie.poster_path}`,}))
        setMovies(updatedMovies);
    })
    }, []);
    return movies;
}
