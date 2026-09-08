import { Link } from "react-router";
import "../css/Header.css"
import { productsCard } from "../types/product";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
    const favorite = productsCard(s => s.favorites)
    return (
        <div>

            <div className="header">
                <h1>Mini shop</h1>
                <div className="links">
                    <Link className="link" to={"/"}>products</Link>
                    <Link className="link" to={"/favorites"}>favorites({favorite.length})</Link>
                    <ThemeToggle />
                </div>
            </div>
            <hr />
        </div>
    )
}