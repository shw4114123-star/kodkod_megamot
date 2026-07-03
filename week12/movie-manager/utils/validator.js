import { readData } from ".././services/fileService.js";





export async function maxMovieId() {
    const movies = await readData();
    if (movies.length === 0) {
        return 0
    } else {
        const ids = movies.map(movie => Number(movie.id))
            .filter(id => !isNaN(id))
        return Math.max(...ids) + 1
    }
}