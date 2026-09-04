import { create } from "zustand"


type Movie = {
    id: number,
    name: string,
    image: Object,
    summary: string,
    rating: Object
}


type MoviesType = {
    movies: Movie[],
    setMovies: (data: Movie[]) => void,
    searchMovies: Movie[],
    setSearchMovies: (data: Movie[]) => void,
    favorites: Movie[],
    setFavorites: (data: Movie[]) => void
}

export const moviesCard = create<MoviesType>((set) => ({
    movies: [],
    setMovies: (data: Movie[]) => set(() => ({ movies: data })),
    searchMovies: [],
    setSearchMovies: (search: Movie[]) => set(() => ({ searchMovies: search })),
    favorites: [],
    setFavorites: (favorite: Movie[]) => set(() => ({ favorites: favorite }))
}))