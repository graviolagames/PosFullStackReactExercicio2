import { MovieItem } from "../components/MovieItem";
import { useMovies } from "../hooks/useMovies";

export function Movies(){
    const movies = useMovies();
    return (
        <section className = "movies-list">
            {movies.map((m)=><MovieItem movie={m}/>)}
        </section>
        );
};
