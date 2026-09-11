import { useEffect, useRef, useState } from "react"
import UseFetch from "../../hooks/UseFetch"
import CityCard from "../cityCard/CityCard"
import type { City } from "../../types/types"

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
        <div>
            <form onSubmit={changeSearce}>
                <input type="text" placeholder="הכנס שם עיר" onChange={(e) => setInput(e.target.value)} ref={inputRef} />
                <button type="submit">חיפוש</button>
            </form>

            {loading && <div>...loading</div>}
            {error && <div>{error}</div>}
            {(!loading && !error && (!data || data.length === 0)) && <h1>אין נתונים</h1>}
            {(!loading && !error && data) && data.map((city: City) => (
                <CityCard key={city.id} {...city} />
            ))}
        </div>
    )
}
