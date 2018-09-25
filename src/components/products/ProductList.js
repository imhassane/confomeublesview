import React from "react"
import ProductDescription from "./ProductDescription"


const ProductList = ({ products }) => {
    const products_list = products.map((key, i) => (
        <ProductDescription
            id={products[i].id}
            slug={products[i].slug}
            key={key}
            name={products[i].name}
            description={products[i].description}
            details={products[i].details}
            image={products[i].image}
            category={products[i].category}
        />
    ))
    return (
        <div>
            {products_list}
        </div>
    )
}

export default ProductList