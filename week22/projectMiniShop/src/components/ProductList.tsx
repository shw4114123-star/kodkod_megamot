import { productsCard } from "../types/product"
import ProductCard from "./ProductCard"
import "../css/ProductList.css"


export default function ProductList() {
    const data = productsCard(s => s.products)
    const search = productsCard(s => s.searchProducts);
    let display = search?.length === 0 ? data : search
    if (search === null) display = []
    return (
        <div className="allCards">
            {display?.length === 0 ? <h1 className="no-result">No results</h1> :
                display?.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
        </div>
    )
}
