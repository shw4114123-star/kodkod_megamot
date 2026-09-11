import { Route, Routes } from "react-router";
import Layout from "./Layout";
import WelcomePage from "./pages/WelcomePage";
import SearchPage from "./pages/searchPage";
import NotFoundPage from "./pages/notFoundPage";
import CityDetailesPage from "./pages/cityDetailesPage";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/favoritesPage";
import ComparePage from "./pages/comparePage";

export default function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route element={<Layout />}>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/city/:name/:lon/:lat" element={<CityDetailesPage/>} />
                    <Route path="favorites" element={<FavoritesPage/>}/>
                    <Route path="compare" element={<ComparePage/>}/>
                </Route>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </div>
    )
}
