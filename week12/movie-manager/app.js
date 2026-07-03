import { showAllMovies, ShowById, CreateNewMovie, deleteMovie, updateRate, searchByName, sortByGenre, showStatistics } from "./services/movieService.js"
import rl from "readline-sync"


async function menu() {
    console.log(
        "==============================\n",
        "Movie Collection Manager\n",
        "==============================\n",
        "1. Show all movies\n",
        "2. Show by id\n",
        "3 Create new movie\n",
        "4. Delete movie\n",
        "5. Update rate\n",
        "6 Search by name\n",
        "7. Sort by genre\n",
        "8. Show statistics\n",
        "9. Exit"
    );
}


async function main() {
    let isRunning = true
    while (isRunning) {
        menu()
        let choice = rl.question("enter your choice - (1 - 9) :");
        switch (choice) {
            case "1":
                await showAllMovies()
                rl.question("enter somting to return to the menu: ");
                break
            case "2":
                let idForShow = rl.questionInt("enter the id: ");
                await ShowById(idForShow);
                rl.question("enter somting to return to the menu: ");
                break;
            case "3":
                let title = rl.question("enter the title: ");
                while (title.length === 0) {
                    console.log("title cen't by empty");
                    title = rl.question("enter the title: ");
                }
                let genre = rl.question("enter the genre: ");
                let year = rl.questionInt("enter the year: ")
                while (year <= 1900 || year > 2026) {
                    console.log("not a correct year");
                    year = rl.questionInt("enter the year: ");
                }
                let rating = rl.questionFloat("enter the rating: ");
                await CreateNewMovie(title, genre, year, rating);
                rl.question("enter somting to return to the menu: ");
                break;
            case "4":
                let idForDelete = rl.question("enter the id: ");
                await deleteMovie(idForDelete);
                rl.question("enter somting to return to the menu: ");
                break;
            case "5":
                let movieId = rl.questionInt("enter the movie id: ");
                let newRateing = rl.questionFloat("enter the new rateing: ");
                await updateRate(movieId, newRateing);
                rl.question("enter somting to return to the menu: ");
                break;
            case "6":
                let name = rl.question("enter the name: ");
                await searchByName(name);
                rl.question("enter somting to return to the menu: ");
                break;
            case "7":
                let genreForShoe = rl.question("enter the genre: ");
                await sortByGenre(genreForShoe);
                rl.question("enter somting to return to the menu: ");
                break;
            case "8":
                await showStatistics();
                rl.question("enter somting to return to the menu: ");
                break;
            case "9":
                isRunning = false;
                break;
        }
    }
}

main()