import { useNavigate } from "react-router";
import type { City } from "../../types/types";

export default function CityCard(props: City) {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate(`/city/${props.name}/${props.longitude}/${props.latitude}`)}>
            <ul>
                <li>{props.name} : שם העיר</li>
                <li>{props.country} : שם המדינה</li>
            </ul>
        </div>
    )
}
