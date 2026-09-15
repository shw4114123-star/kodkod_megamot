import { useEffect } from "react";
import CityCard from "../components/cityCard/CityCard";
import UseFetch from "../hooks/UseFetch"
import { useFavoritesStore } from "../types/types";
import "../css/favoritePage.css"

export default function FavoritesPage() {
    const userName = localStorage.getItem("userName")
    const { data, loading } = UseFetch(`http://localhost:3000/favorite/${localStorage.getItem("userName")}`)
    if (!data || loading) return <h1>...מחפש נתונים</h1>
    // useEffect(() => {
    //     // const add = useFavoritesStore(s => s.addFavorites)
    //     // add(data)
    // }, [])
    // const favorite = useFavoritesStore(s => s.favorites)
    console.log(data);
    
    if (data[userName].length === 0) return <h1 className="enpty">אין נתונים מועדפים</h1>
    return (
        <div>
            <h1>המועדפים שלי</h1>
            {data[userName].map((city) => (
                <CityCard key={city.id} props={city} />
            ))}
        </div>
    )
}
