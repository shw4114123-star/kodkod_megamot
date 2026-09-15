import { useState } from "react"
import "../css/ComparePage.css"

export default function ComparePage() {
    const [city1, setCity1] = useState("")
    const [city2, setCity2] = useState("")
    const [compareResult, setCompareResult] = useState();
    const handleCompare = async (e) => {
        e.preventDefault()
        console.log(city1);
        const res1 = await fetch(`http://localhost:3000/search?name=${city1}`)
        const res2 = await fetch(`http://localhost:3000/search?name=${city2}`)
        const data1 = await res1.json()
        const data2 = await res2.json()
        const lon1 = data1[0].longitude; const lat1 = data1[0].latitude;
        const lon2 = data2[0].longitude; const lat2 = data2[0].latitude;
        const compareRes = await fetch(`http://localhost:3000/compare?lon1=${lon1}&lat1=${lat1}&lon2=${lon2}&lat2=${lat2}`)
        const finallData = await compareRes.json()
        setCompareResult(finallData)
    }

    return (
        <div className="all-page">
            <h1>השוואת ערים</h1>
            <form onSubmit={handleCompare} className="top">
                <input className="input" type="text" value={city1} onChange={(e) => { setCity1(e.target.value) }} />
                <input className="input" type="text" value={city2} onChange={(e) => { setCity2(e.target.value) }} />
                <button className="button-compare" type="submit">השוואה</button>
            </form>
            {compareResult && (
                <div className="ditails">
                    <div className="details-card">
                        <h2>{city1}</h2>
                        <h4>טמפרטורה: {compareResult.city1.temperature_2m}℃</h4>
                        <h4>תחושה: {compareResult.city1.apparent_temperature}</h4>
                        <h4>רוח: {compareResult.city1.wind_speed_10m}</h4>
                    </div>
                    <div className="details-card">
                        <h2>{city2}</h2>
                        <h4>טמפרטורה: {compareResult.city2.temperature_2m}℃</h4>
                        <h4>תחושה: {compareResult.city2.apparent_temperature}</h4>
                        <h4>רוח: {compareResult.city2.wind_speed_10m}</h4>
                    </div>

                </div>
            )}
        </div>
    )
}

