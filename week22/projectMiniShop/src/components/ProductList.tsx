import { productsCard } from "../types/product"
import ProductCard from "./ProductCard"
import "../css/ProductList.css"


export default function ProductList() {
    const data = productsCard(s => s.products)
    // const { data, error } = useFetch("https://fakestoreapi.com/products")
    const search = productsCard(s => s.searchProducts);
    let display = search?.length === 0 ? data : search
    if (search === null) display = []
        return (
            <div className="allCards">
                {display?.map((product) => (
                    <ProductCard key={product.id} {...product}/>
                ))}
            </div>
        )
}
