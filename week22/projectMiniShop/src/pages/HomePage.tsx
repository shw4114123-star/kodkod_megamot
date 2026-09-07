import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";
import "../css/pages.css"
export default function HomePage() {
    return (
        <div>
            <SearchBar />
            <h1 className="h1">products</h1>
            <ProductList />
        </div>
    )
}
