import fs from "fs"
import fsPromise from "fs/promises"
import { readData, writeData } from "./fileService.js";
import { maxMovieId } from ".././utils/validator.js"
import { loadavg } from "os";



export async function showAllMovies() {
    try {
        const data = await readData()
        const all = data.map((movieData, index) => `${index + 1}. ${movieData.title}`)
            return console(all.join("\n"));
    }
    catch (e) {
        console.log(`error: ${e}`);
        return []
    }
}


export async function ShowById(id) {
    const alldata = await readData()
    const findmovie = alldata.find(movieData => movieData.id === id ? movieData : false);
    if (findmovie) {
        return console.table(findmovie);
    } else {
        return console.log("not found a movei with this id.");
    }
}


export async function CreateNewMovie(title, genre, year, rating) {
    try {
        let id = await maxMovieId()
        title = title
        genre = genre
        year = year
        rating = rating
        const data = await readData()
        data.push({ id, title, genre, year, rating })
        const res = await writeData(data)
        return console.log("the movie added succesfuly.");
    } catch (e) {
        return console.log(e);
    }
}


export async function deleteMovie(movieId) {
    try {
        const movies = await readData()
        const momo = movies.filter(movie => Number(movie.id) !== Number(movieId));
        if (movies.length === momo.length) {
            return console.log("not found the movie.");
        }
        await writeData(momo)
        return console.log("the movie deleted succesfuly");
    } catch (e) {
        return console.log(`error: ${e}`);
    }
}


export async function updateRate(movieId, newRateing) {
    try {
        const data = await readData()
        const movie = data.find(movieData => movieData.id === movieId)
        if (!movie) {
            return console.log("not found the movie.");
        }
        movie.rating = newRateing
        await writeData(data)
        return console.log("the rating updeted succesfuly.");
    }
    catch (e) {
        return console.log(`error: ${e}`);
    }
}


export async function searchByName(string) {
    try {
        const movies = await readData()
        const findMovie = movies.filter(movie => movie.title.includes(string.toLowerCase()));
        return console.table(findMovie);
    }
    catch (e) {
        return console.log(`error: ${e}`);
    }
}


export async function sortByGenre(genre) {
    try {
        const movies = await readData()
        const allMoviesGenre = movies.filter(movie => movie.genre === genre)
        return console.table(allMoviesGenre);

    } catch (e) {
        return console.log(`error: ${e}`);
    }
}


export async function showStatistics() {
    try {
        const movies = await readData()
        const sumRatingMovies = movies.reduce((sum, movie) => sum + movie.rating, 0);
        const sumMovies = movies.length;
        const averageRating = sumRatingMovies / sumMovies;
        const maxRatingMovie = movies.reduce((max, movie) => movie.rating > max.rating ? movie : max, movies[0]).rating
        return console.table({
            "sum movies": sumMovies,
            "average rating": averageRating,
            "max rating movie": maxRatingMovie
        });
    } catch (e) {
        return console.log(`error: ${e}`);
    }
}






















































