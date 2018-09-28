import React from "react"
import { Link } from "react-router-dom"
import { getProducts } from "../../functions"
import ProductDescription from "./ProductDescription"
import "../../App.css"
import { Spinner } from "react-uikit3";

const ProductList = props => {
    const { products, search, home } = props

    if(!products){
        return (
            <div className="uk-flex uk-flex-center">
                <Spinner />
            </div>
        )
    }

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
                        price={product.price}
                        favorite={props.favorite}
                    />
                </div>
            )
        }
                
        
    })
    
    return (
        <div>
            {!home && (
                <ul className="uk-breadcrumb">
                    <li>
                        <Link to="/">
                                Accueil
                        </Link>
                    </li>
                    <li>
                        <Link to={getProducts()}>
                                Produits
                        </Link>
                    </li>
                </ul>
            )}
            
            <p className="uk-text-bold">Nos produits</p>
            <div className="uk-grid-small uk-child-width-1-4@m uk-child-width-1-3@s uk-grid-match" uk-grid="true">
                {products_list}
            </div>
        </div>
    )
}

export default ProductList