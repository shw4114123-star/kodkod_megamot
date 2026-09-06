import { useNavigate, useParams } from "react-router"
import useFetch from "../hooks/useFetch"
import "../css/ProductDetails.css"

export default function ProductDetails() {
    const navigate = useNavigate()
    const { data } = useFetch("https://fakestoreapi.com/products")
    const { id } = useParams()
    const product = data?.find(product => product.id === Number(id))
    return (
        <div className="details">
            <img className="image-details" src={product?.image} alt="" />
            <div className="leftSize">
                <h1 className="title">{product?.title}</h1>
                <h4 className="price"> $ {product?.price}</h4>
                <p className="description">{product?.description}</p>
                <div className="buttons">
                    <button className="add-to-favotite">Add to Favorites</button>
                    <button className="back" onClick={()=> navigate("/")}>Back to products</button>
                </div>
            </div>
        </div>
    )
}
