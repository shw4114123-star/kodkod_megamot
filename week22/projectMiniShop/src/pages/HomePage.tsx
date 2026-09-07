import ProductList from "../components/ProductList";
import "../css/pages.css"
export default function HomePage() {
    return (
        <div>
            <h1 className="h1">products</h1>
            <ProductList />
        </div>
    )
}
