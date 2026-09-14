import { NavLink } from "react-router";
import "./Header.css"

export default function Header() {
    const name = localStorage.getItem("userName")
    return (
        <div className="header">
            <div className="left-size">
                <h3 className="name"> ! שלום {name}</h3>
            </div>
            <div className="right-size">
                <NavLink className="links" to={"/search"}>חיפוש עיר</NavLink>
                <NavLink className="links" to={"/favorites"}>המועדפים שלי</NavLink>
                <NavLink className="links" to={"/compare"}>השוואת ערים</NavLink>
            </div>
        </div>
    )
}
