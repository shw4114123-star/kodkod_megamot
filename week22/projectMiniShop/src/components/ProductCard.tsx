import { useNavigate } from "react-router"
import "../css/ProductCard.css"
import type ProductCard from "../types/product"
import { productsCard } from "../types/product"

export default function ProductCard(props: ProductCard | any) {
    const navigate = useNavigate()
    const allFavorites = productsCard(s => s.favorites)
    const favorite = productsCard(s => s.addFavorites)
    const remove = productsCard(s => s.removeFavorites)
    const product = allFavorites.find(s => s.id === props.id)
    return (
        <div className="card">
            <div className="product" onClick={() => navigate(`/products/${props.id}`)}>
                <img className="image" src={props.image} alt="" />
                <h1 className="title">{props.title}</h1>
            </div>
            <div className="right">
                <h5 className="price">${props.price}</h5>
                <button className="button" onClick={_ => { product ? remove(props) : favorite(props) }}>
                    {product ? "❤️" : "🤍"}</button>
            </div>
        </div>
    )
}
