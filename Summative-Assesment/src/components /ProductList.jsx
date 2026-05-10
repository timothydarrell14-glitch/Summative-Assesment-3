import { useContext } from "react"
import { productContext } from "../context/ProductContext"
import ProductCard from "./ProductCard"

function ProductList(){
    const [productList] = useContext(productContext)
    return(
        <div>
            <ul>
                {productList.map((product) => (
                    <ProductCard image={product.image} rating={product.rating.stars} description={product.description} name={product.name} price={product.priceCents} category={product.category} subCategory={product.subCategory} />
                ))}
            </ul>
        </div>
    )
}

export default ProductList 