import { useState, useEffect } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
}

const usePaginatedData = (pageSize: number) => {
    const [data, setData] = useState<Product[]>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                await new Promise((resolve) => setTimeout(resolve, 1000))

                const startIndex = (page - 1) * pageSize
                const endIndex = startIndex + pageSize
                const mockData = Array.from({ length: 100 }, (_, index) => ({
                    id: index + 1,
                    name: `Product ${index + 1}`,
                    price: Math.floor(Math.random() * 100) + 1,
            }))

            setData(mockData.slice(startIndex, endIndex))
            setError(null)
            } catch (error) {
                setError("Error fetching data")
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [page, pageSize])

    return {
        data,
        loading,
        error,
        page,
        setPage
    }
}

export default usePaginatedData;