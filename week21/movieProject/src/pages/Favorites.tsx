import MovieCard from "../components/MovieCard";
import { moviesCard } from "../store/moviesStore";

export default function Favorites() {
    const favorites = moviesCard((state) => state.favorites);
    return (
        <div className="movieList">
            {favorites?.map((movie) => (
                <MovieCard key={movie.id} {...movie} />
            ))}
        </div>
    )
}
