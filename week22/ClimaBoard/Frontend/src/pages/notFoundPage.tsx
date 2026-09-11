import { Link } from "react-router";

export default function NotFoundPage() {
    return (
        <div>
            <h1>404 - אופס</h1>
            <p>הדף שניסית להגיע אליו לא קיים</p>
            <Link to={"/home"}>חזור לחיפוש</Link>
        </div>
    )
}
