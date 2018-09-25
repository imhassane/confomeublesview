import React from "react"
import ProductDescription from "./ProductDescription"


const ProductList = ({ products, search }) => {
    const products_list = products.map((key, i) => {
        const product = products[i]

        if(product.name.toLowerCase().includes(search.toLowerCase())){
            return (
                <ProductDescription
                    id={product.id}
                    slug={product.slug}
                    key={product.id}
                    name={product.name}
                    description={product.description}
                    details={product.details}
                    image={product.image}
                    category={product.category}
                />
            )
        }
                
        
    })
    
    return (
        <div>
            {products_list}
        </div>
    )
}

export default ProductList