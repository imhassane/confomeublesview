import React from "react"
import { Link } from "react-router-dom"
import { getProducts } from "../../functions"
import ProductDescription from "./ProductDescription"
import "../../App.css"
import { Spinner } from "react-uikit3";

const ProductList = props => {
    const { products, search, home, title, limit, bread } = props

    if(!products){
        return (
            <div className="uk-flex uk-flex-center">
                <Spinner />
            </div>
        )
    }

    let products_list = products.map((key, i) => {
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
                        comments={0}
                    />
                </div>
            )
        }
                
        
    })

    products_list = products_list.slice(0, limit)
    
    return (
        <div className="mt-5">
            { bread && (
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
            
            <p className="uk-text-bold">{title}</p>
            <div className="uk-grid-small uk-child-width-1-4@m uk-child-width-1-3@s uk-grid-match" uk-grid="true">
                {products_list}
            </div>
            { products_list.length===0 && <p className="uk-text-meta">Nous n'avons aucun produit à vous proposer actuellement</p>}
            { home && (
                <p className="uk-text-center">
                    <Link to={getProducts()} className="uk-button uk-button-secondary">
                        Voir tous nos produits
                    </Link>
                </p>
            )}
        </div>
    )
}

export default ProductList