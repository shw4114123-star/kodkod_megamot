import { Link } from "react-router"
import "../css/header.css"
import SearchBar from "./SearchBar"
export default function Header() {

    return (
        <div className="header">
            <SearchBar />
            <Link className="link" to={'/movies'}>Movies</Link>
            <Link className="link" to={'/favorits'}>Favorites</Link>
        </div>
    )
}

