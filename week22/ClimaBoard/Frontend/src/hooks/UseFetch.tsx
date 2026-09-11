import { useEffect, useState } from "react"

export default function UseFetch(url: string) {
    const [data, setData] = useState<any>(null)
    const [error, setError] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        setError(undefined)
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(error => setError(error))
            .finally(() => setLoading(false))
    }, [url])

    return {
        data,
        setData,
        error,
        setError,
        loading,
        setLoading
    }
}
