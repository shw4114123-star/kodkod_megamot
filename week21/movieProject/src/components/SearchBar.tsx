import { moviesCard } from "../store/moviesStore"


export default function SearchBar() {
    const data = moviesCard(s => s.movies)
    const setSearchMovies = moviesCard(s => s.setSearchMovies)

    const search = (event: React.ChangeEvent<HTMLInputElement>) => {
        const valie = event.target.value
        const found = data.filter(movie => movie.name.includes(valie))
        setSearchMovies(found)
    }
    return (
        <input type="text" placeholder="search" onChange={search} />

    )
}
