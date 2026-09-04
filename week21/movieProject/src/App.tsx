import { Route, Routes } from "react-router";
import Movies from "./pages/Movies";
import Favorites from "./pages/Favorites";
import Layout from "./Layout";
import "./css/App.css"
import useFetch from "./hooks/useFetch";
import MovieDetails from "./pages/MovieDetails";

export default function App() {
    useFetch("https://api.tvmaze.com/shows")
    return (
        <div className="app">
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/movies" element={<Movies />} />
                    <Route path="/movies-details/:id" element={<MovieDetails />} />
                    <Route path="/favorits" element={<Favorites />} />
                </Route>
            </Routes>
        </div>
    )
}
