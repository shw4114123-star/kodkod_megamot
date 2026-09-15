import { useParams } from 'react-router'
import UseFetch from '../../hooks/UseFetch';
import CityDaily from '../cityDaily/CityDaily';
import { useState } from 'react';
import "./CityDetails.css"
import { useFavoritesStore, type City } from '../../types/types';



export default function CityDetails() {
    const [showForecast, setShowForecast] = useState(false)
    const favorite = useFavoritesStore(s => s.addFavorites)
    const { name, lon, lat } = useParams();
    const { data: dataCity } = UseFetch(`http://localhost:3000/search/${name}`)
    const { data, loading } = UseFetch(`http://localhost:3000/current?lon=${lon}&lat=${lat}`)
    const { data: dataForecast, loading: forecastLoading } = UseFetch(`http://localhost:3000/forecast?lon=${lon}&lat=${lat}`)
    const handleFavorite = async () => {
        const requestBody = {
            name: localStorage.getItem("userName"),
            id: dataCity.id,
            city_name: name,
            country: dataCity.contry,
            lon: Number(lon),
            lat: Number(lat)
        };
        await fetch("http://localhost:3000/favorite", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(requestBody)
        });
        alert("העיר נשמרה במועדפים!");
    };
    if (loading || forecastLoading || !data || !dataForecast) {
        return <h1 className='loading'>...מחפש ומביא נתונים</h1>
    }
    return (
        <div className='details-card'>
            <h4>℃ {data.temperature_2m}</h4>
            <h4>קוד מזג : {data.weather_code}</h4>
            <h4>{`תחושה : ${data.apparent_temperature}`}</h4>
            <h4>{`מהירות רוח : ${data.wind_speed_10m}`}</h4>
            <h4>{`${data.time} : שעה`}</h4>
            <button type='submit' onClick={() => { setShowForecast(!showForecast) }}>תחזית לכל השבוע הקרוב</button>
            {showForecast && <CityDaily props={dataForecast} />}
            <button onClick={handleFavorite}>הוספה למועדפים</button>
        </div>
    )
}