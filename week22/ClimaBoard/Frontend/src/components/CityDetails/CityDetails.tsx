import { useParams } from 'react-router'
import UseFetch from '../../hooks/UseFetch';
import CityDaily from '../cityDaily/CityDaily';
import { useState } from 'react';


export default function CityDetails() {
    const [showForecast, setShowForecast] = useState(false)
    const { name, lon, lat } = useParams();
    const { data, loading } = UseFetch(`http://localhost:3000/current?lon=${lon}&lat=${lat}`)
    const { data: dataForecast, loading: forecastLoading } = UseFetch(`http://localhost:3000/forecast?lon=${lon}&lat=${lat}`)
    if (loading || forecastLoading || !data || !dataForecast) {
        return <h1>...מחפש ומביא נתונים</h1>
    }
    return (
        <div className='details-card'>
            <h4>טמפרטורה : {data.temperature_2m}</h4>
            <h4>קוד מזג : {data.weather_code}</h4>
            <h4>{data.apparent_temperature}</h4>
            <h4>{data.wind_speed_10m}</h4>
            <h4>{data.time}</h4>
            <button type='submit' onClick={() => {setShowForecast(!showForecast)}}>תחזית לכל השבוע הקרוב</button>
            {showForecast && <CityDaily props={dataForecast}/>} 
            <button onClick={()=>{}}>הוספה למועדפים</button>
        </div>
    )
}