import { create } from "zustand"

export default interface Products {
    image: string,
    title: string,
    price: number,
    description: string
    id: number
}

interface productsType {
    products: Products[]
    setProducts: (data: Products) => void
    searchProducts: Products[] | null,
    setSearchProducts: (data: Products[] | null) => void | null,
    favorites: Products[],
    setFavorites: (data: Products[]) => void
}


export const productsCard = create<productsType>((set) => ({
    products: [],
    setProducts: (data: Products[] | any) => set(()=>({products: data})),
    searchProducts: [],
    setSearchProducts: (search: Products[] | null) => set(() => ({ searchProducts: search })),
    favorites: [],
    setFavorites: (favorite: Products[]) => set(() => ({ favorites: favorite }))
}))