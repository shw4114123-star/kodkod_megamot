import { useEffect } from "react"
import { productsCard } from "../types/product"


export default function useFetch(url: string) {
    const data = productsCard((s) => s.products)
    const setData = productsCard((s) => s.setProducts)
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
            // .catch(e => setError(e))
    }, [url])
    return {
        data,
        setData
    }
}