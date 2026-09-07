import type Products from '../types/product';
import { productsCard } from '../types/product'
import ProductCard from './ProductCard'

export default function FavoritesList() {
    const favorites = productsCard(s => s.favorites)
    return (
        <div className="allCards">

            {favorites?.map((product: Products) => (
                <ProductCard key={product.id} {...product} />
            ))}
        </div>
    )
}
