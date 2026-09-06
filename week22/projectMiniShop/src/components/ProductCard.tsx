import { useNavigate } from "react-router"
import "../css/ProductCard.css"

import type ProductCard from "../types/product"

export default function ProductCard(props: ProductCard) {
    const navigate = useNavigate()
    return (
        <div className="card">
            <div className="product" onClick={() => navigate(`products/${props.id}`)}>
                <img className="image" src={props.image} alt="" />
                <h1 className="title">{props.title}</h1>
                <h5 className="price">{props.price}</h5>
            </div>
            <button className="button">Add to favorite</button>
        </div>
    )
}
