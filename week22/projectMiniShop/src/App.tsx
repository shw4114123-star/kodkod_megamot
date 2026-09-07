import { Route, Routes } from "react-router";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import FavoritesPage from "./pages/FavoritesPage";
import useFetch from "./hooks/useFetch";
import { UseContext } from "./context/ThemeContext";
import { useState } from "react";

export default function App() {
  useFetch("https://fakestoreapi.com/products")
  const [theme, setTheme] = useState("light")
  const themeToggle = () => setTheme(val => val === "light" ? "dark" : "light")
  return (
    <UseContext value={{ theme, themeToggle }}>
      <div>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/products/:id" element={<ProductPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Route>
        </Routes>
      </div>
    </UseContext>
  )
}
