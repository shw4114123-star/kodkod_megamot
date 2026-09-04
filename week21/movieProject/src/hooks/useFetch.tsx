// import { useEffect, useState } from "react"

// type Movie = {
//     id: number,
//     title: string,
//     body: string
// }


// export default function useFetch(url: string) {
//     const [data, useData] = useState<Movie[]>()
//     const [error, setError] = useState(null)
//     useEffect(() => {
//         fetch(url)
//             .then(res => res.json())
//             .then(data => useData(data))
//             .catch(e => setError(e))
//     }, [url])
//     return {
//         data, 
//         error
//     }
// }




import { useEffect } from "react";
import { moviesCard } from "../store/moviesStore";



export default function useFetch(url:string){
    const data = moviesCard((s) => s.movies)
    const setData = moviesCard((s) => s.setMovies)
    
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setData(data))
        // .catch(error => setError(error))
    }, [url])
    
    return{
        data,
        setData
    }
}