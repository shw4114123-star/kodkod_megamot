import { useNavigate } from "react-router";
import type { City } from "../../types/types";
import "./CityCard.css"
export default function CityCard(props: City) {
    const navigate = useNavigate()
    return (
        <div className="city-card" onClick={() => navigate(`/city/${props.cityName}/${props.longitude}/${props.latitude}`)}>
            <h3 className="city-name"><h6 className="name">{props.cityName}</h6> : שם העיר</h3>
            <h3 className="contry-name"><h6 className="name">{props.country}</h6> : מדינה</h3>
        </div>
    )
}
