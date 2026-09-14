import { useEffect, useRef, useState } from "react"
import UseFetch from "../../hooks/UseFetch"
import CityCard from "../cityCard/CityCard"
import type { City } from "../../types/types"
import "./SearchCity.css"
export default function SearchCity() {
    const BASIC_URL = "http://localhost:3000"
    const [input, setInput] = useState("")
    const [url, setUrl] = useState(`${BASIC_URL}/search?name=אשדוד`)
    const { data, error, loading } = UseFetch(url)
    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
        inputRef.current?.focus()
    }, [])
    const changeSearce = (e: React.SubmitEvent) => {
        e.preventDefault()
        if (input.length >= 2) { setUrl(`${BASIC_URL}/search?name=${input}`) }
    }

    return (
        <div className="search">
            <form className="input-button" onSubmit={changeSearce}>
                <input className="search-input" type="text" placeholder="הכנס שם עיר" onChange={(e) => setInput(e.target.value)} ref={inputRef} />
                <button className="search-button" type="submit">חיפוש</button>
            </form>

            {loading && <div>...loading</div>}
            {error && <div>{error}</div>}
            {(!loading && !error && (!data || data.length === 0)) && <h1>אין נתונים</h1>}
            {(!loading && !error && data) && data.map((apiCity: any) => {
                    const formattedCity = {
                        ...apiCity,
                        cityName: apiCity.name,
                        lon: apiCity.longitude,
                        lat: apiCity.latitude
                    };
                    return <CityCard key={formattedCity.id} {...formattedCity} />;
                })}
        </div>
    )
}
