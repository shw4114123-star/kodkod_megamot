import { Link } from "react-router";
import "../css/Header.css"
import SearchBar from "./SearchBar";

export default function Header() {
    return (
        <div className="header">
            <h1>Mini shop</h1>
            <SearchBar/>
            <div className="links">
                <Link className="link" to={"/"}>products</Link>
                <Link className="link" to={"/favorites"}>favorites</Link>
            </div>
        </div>
    )
}