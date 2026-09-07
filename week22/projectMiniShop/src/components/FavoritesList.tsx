import type Products from '../types/product';
import { productsCard } from '../types/product'
import ProductCard from './ProductCard'
import "../css/ProductList.css"
export default function FavoritesList() {
    const favorites = productsCard(s => s.favorites)
    return (
        <div className="allCards">

            {favorites.length===0 ? <h1 className='empty-favorite'>There are currently no favorites.</h1> :
            favorites?.map((product: Products) => (
                <ProductCard key={product.id} {...product} />
            ))}
        </div>
    )
}
