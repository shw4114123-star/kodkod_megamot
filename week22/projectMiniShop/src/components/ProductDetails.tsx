import { useNavigate, useParams } from "react-router"
import useFetch from "../hooks/useFetch"
import "../css/ProductDetails.css"
import { productsCard } from "../types/product"

export default function ProductDetails() {
    const navigate = useNavigate()
    const { data } = useFetch("https://fakestoreapi.com/products")
    const { id } = useParams()
    const product = data?.find(product => product.id === Number(id))
    const allFavorites = productsCard(s => s.favorites)
    const checkProduct = allFavorites.find(p => p.id === product?.id)
    const add = productsCard(s => s.addFavorites)
    const remove = productsCard(s => s.removeFavorites)
    if (!product) return;
    return (
        <div className="details">
            <img className="image-details" src={product?.image} alt="" />
            <div className="leftSize">
                <h1 className="title">{product?.title}</h1>
                <h4 className="price"> $ {product?.price}</h4>
                <p className="description">{product?.description}</p>
                <div className="buttons">
                    <button className="add-to-favotite" onClick={_ => {
                        checkProduct ? remove(product) : add(product)
                    }
                    }>{checkProduct ? "❤️ remove from favorite" : "🤍 add to favorite"}</button>
                    <button className="back" onClick={() => navigate("/")}>Back to products</button>
                </div>
            </div>
        </div>
    )
}
