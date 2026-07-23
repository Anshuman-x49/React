import { useContext } from "react"
import { ProductContext } from "../contexts/ProductContext"
import ProductCard from "../components/ProductCard"

const Shop = () => {

    const { products } = useContext(ProductContext)
    
    return (
        <div className="grid grid-cols-4 gap-3">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

export default Shop