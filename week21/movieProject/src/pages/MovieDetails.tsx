import { Link, useParams } from "react-router"
import { moviesCard } from "../store/moviesStore"
import "../css/MovieDetails.css"


export default function MovieDetails() {
    const data = moviesCard(s => s.movies)
    const { id } = useParams()
    const favorites = moviesCard(s => s.favorites)
    const setFavorites = moviesCard(s => s.setFavorites)
    const movie = data.find(movie => movie.id === Number(id))
    const isFavorite = favorites.some(fav => fav.id === movie?.id)

    const handleFavoriteToggle = () => {
        if (!movie) return;
        if (isFavorite) {
            const updatedFavorites = favorites.filter(fav => fav.id !== movie.id);
            setFavorites(updatedFavorites);
        } else {
            const updatedFavorites = [...favorites, movie];
            setFavorites(updatedFavorites);
        }
    }
    return (
        <div className="details">
            <div className="cardDetails">
                <img className="images" src={movie?.image?.original} alt="" />
                <div>
                    <h1>{movie?.name}</h1>
                    <p>{movie?.summary}</p>
                    <h2>⭐ {movie?.rating?.average}</h2>
                    <label>
                        fivorite
                        <input type="checkbox" checked={isFavorite} onChange={handleFavoriteToggle} />
                    </label>
                </div>
            </div>
            <Link className="link" to={"/movies"}>← back to movies</Link>
        </div>
    )
}
