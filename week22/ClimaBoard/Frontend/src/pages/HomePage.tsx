import { Link } from "react-router";
import UseFetch from "../hooks/UseFetch";

export default function HomePage() {
    const { data, loading } = UseFetch('http://localhost:3000/current?lon=35.21&lat=31.76');
    if (loading || !data) {
        return <h1>...מחפש ומביא נתונים</h1>
    }

    return (
        <div>
            <h2>ירושלים</h2>
            <h3> {data.temperature_2m} : טמפרטורה נוכחית</h3>
            <p> {data.weather_code} : קוד עננות</p>
            <Link to={"/search"}><button>חיפוש עיר</button></Link>
            <Link to={"/favorites"}><button>המועדפים שלי</button></Link>
            <Link to={"/compare"}><button>השוואת ערים</button></Link>
        </div>
    )
}
