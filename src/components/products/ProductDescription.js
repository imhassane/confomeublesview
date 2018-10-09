import React from 'react'
import axios from "axios"
import { makeURL } from "../../functions"
import { Link } from "react-router-dom"
import { getProduct } from "../../functions"

const handleLike = id => {
    axios.get(makeURL(`favorites/add/${id}/`))
}


const ProductDescription = ({id, name, slug, comments, details, image, category, price, favorite}) => (
    
    <div className="card border mb-3">

        <img src={image} alt={name} className="card-img-top" />

        <div className="card-body">
            <div className="uk-flex uk-flex-between">
                <span className="">{name}</span>
                <Link to={getProduct(id, slug)} className="">Voir</Link>
            </div>
            <p className="uk-text-small">{comments} avis sur le produit</p>
        </div>

        <div className="uk-card-footer uk-flex uk-flex-between">
            <span className="uk-text-lead uk-text-bold">{price}€</span>
            
            { !favorite && (
                <button onClick={e => handleLike(id)} className="uk-button uk-button-small">
                    <span uk-icon="icon:heart"></span>
                </button>
            )}

            { favorite && (
                <Link to="/" className="uk-button uk-button-small">
                    <span uk-icon="icon:trash"></span>
                </Link>
            )}
        </div>
            
    </div>
)

export default ProductDescription