import type React from 'react'
import Button from "./Button"

const ProductList: React.FC = () => {
    const pageSize = 10
    
    return (
        <div>
            <h1>Product List</h1>
            <ul>
                <li>Nome do producto - preço do produto</li>
            </ul>
            <div>
                <Button
                    onClick={() => {}}
                    variant="secondary"
                >
                        Previous</Button>
                <Button
                    onClick={() => {}}
                    variant="primary"
                >Next
                </Button>
            </div>
        </div>
    )
}

export default ProductList