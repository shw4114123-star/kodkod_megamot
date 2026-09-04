import MovieCard from "./MovieCard"
import "../css/MovieList.css"
import { moviesCard } from "../store/moviesStore"

export default function MovieList() {
    const data = moviesCard(s => s.movies)
    const search = moviesCard(s => s.searchMovies);
    const display = search.length === 0 ? data : search
    return (
        <div className="movieList">
            {display?.map((movie) => (
                <MovieCard key={movie.id} {...movie} />
            ))}
        </div>
    )
}
