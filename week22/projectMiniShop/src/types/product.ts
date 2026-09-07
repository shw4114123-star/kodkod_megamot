import { create } from "zustand"
import { persist } from "zustand/middleware"

export default interface Products {
    image: string,
    title: string,
    price: number,
    description: string
    id: number,
    category: string
}

interface productsType {
    products: Products[]
    setProducts: (data: Products) => void
    searchProducts: Products[] | null,
    setSearchProducts: (data: Products[] | null) => void,
    favorites: Products[],
    addFavorites: (product: Products) => void
    removeFavorites: (product: Products) => void
    // checkFavorite: (id: number) => boolean
}


export const productsCard = create<productsType>()(
    persist(
        (set) => ({
            products: [],
            setProducts: (data: Products[] | any) => set(() => ({ products: data })),
            searchProducts: [],
            setSearchProducts: (search: Products[] | null) => set(() => ({ searchProducts: search })),
            favorites: [],
            addFavorites: (favorite: Products[] | any) => set((s) => ({ favorites: [...s.favorites.filter(p => p.id !== favorite.id), favorite] })),
            removeFavorites: (favorite: Products[] | any) => set((s) => ({ favorites: [...s.favorites.filter(p => p.id !== favorite.id)] })),
        }),
        {
            name: 'product-storage',
        }
    ))