import { productsCard } from "../types/product"


export default function SearchBar() {
    const data = productsCard(s => s.products)
    const setSearchProducts = productsCard(s => s.setSearchProducts)
    const search = (event: React.ChangeEvent<HTMLInputElement>) => {
        const valie = event.target.value
        const found = data?.filter(products => products.title.includes(valie))
        const product = found.length === 0 && valie.length > 0 ? null : found
        setSearchProducts(product)
    }
    return (
        <input className="input" type="text" placeholder="search..." onChange={search} />
    )
}

