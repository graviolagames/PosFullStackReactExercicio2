import { useEffect, useState } from "react";
import { MoviesService } from "../api/MoviesService";
import { MovieItem } from "../components/MovieItem";

export function Movies() {
    const [movies, setMovies] = useState([]);
    // request
    useEffect(() => {
       MoviesService.getMovies().then(({data})=>{
        const updatedMovies = data.results.map((movie)=>({...movie,image_url:`https://image.tmdb.org/t/p/w500/${movie.poster_path}`,}))
        setMovies(updatedMovies);
    })
    }, []);
return (
    <section className = "movies-list">
        {movies.map((m)=><MovieItem movie={m}/>)}
    </section>
    );
};
