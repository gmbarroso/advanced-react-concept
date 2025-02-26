import type React from 'react'
import usePaginatedData from '../hooks/usePaginatedData'
import Button from "./Button"

const ProductList: React.FC = () => {
    const pageSize = 10
    const { data, loading, error, page, setPage } = usePaginatedData(pageSize)

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error}</div>
    }

    const handlePrevious = () => {
        setPage((page - 1))
    }

    const handleNext = () => {
        setPage((page + 1))
    }
    
    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {data.map((product) => (
                    <li key={product.id}>{product.name} - ${product.price}</li>
                ))}
            </ul>
            <div>
                <Button
                    onClick={handlePrevious}
                    variant="secondary"
                    disabled={page === 1}
                >
                        Previous</Button>
                <Button
                    onClick={handleNext}
                    variant="primary"
                    disabled={data.length < pageSize}
                >Next
                </Button>
            </div>
        </div>
    )
}

export default ProductList