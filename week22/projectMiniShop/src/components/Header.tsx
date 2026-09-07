import { Link } from "react-router";
import "../css/Header.css"
import SearchBar from "./SearchBar";
import { productsCard } from "../types/product";

export default function Header() {
    const favorite = productsCard(s => s.favorites)
    return (
        <div>

            <div className="header">
                <h1>Mini shop</h1>
                <SearchBar />
                <div className="links">
                    <Link className="link" to={"/"}>products</Link>
                    <Link className="link" to={"/favorites"}>favorites({favorite.length})</Link>
                </div>
            </div>
            <hr />
        </div>
    )
}