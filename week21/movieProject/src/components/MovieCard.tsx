import { Link } from "react-router"
import "../css/MovieCard.css"

type movieProps = {
    id: number,
    name: string,
    image: any,
}

export default function MovieCard(props: movieProps | any) {
    return (
        <div className="movieCard">
            <img className="image" src={props.image.medium} alt="momo"/>
            <h1 className="title">{props.name}</h1>
            <Link className="buttonLink" to={`/movies-details/${props.id}`}>
                <button className="button">view</button>
            </Link>
        </div>
    )
}
