import React from "react"
import ProductDescription from "./ProductDescription"


const ProductList = ({ products, search }) => {
    const products_list = products.map((key, i) => {
        const product = products[i]

        if(product.name.toLowerCase().includes(search.toLowerCase())){
            return (
                <div key={product.id}>
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
                </div>
            )
        }
                
        
    })
    
    return (
        <div className="uk-grid-small uk-child-width-1-3 uk-grid-match" uk-grid="true">
            {products_list}
        </div>
    )
}

export default ProductList