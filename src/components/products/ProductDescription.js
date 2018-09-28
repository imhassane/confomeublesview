import React from 'react'
import axios from "axios"
import { makeURL } from "../../functions"
import { Link } from "react-router-dom"
import { getProduct } from "../../functions"

const handleLike = id => {
    axios.get(makeURL(`favorites/add/${id}/`))
}


const ProductDescription = ({id, name, slug, description, details, image, category, price, favorite}) => (
    
    <div className="uk-card uk-card-default uk-card-hover uk-margin">

        <div className="uk-card-media-top uk-cover-container">
            <canvas width="50" height="220"></canvas>
            <img src={image} alt={name} uk-cover="true"/>
        </div>

        <div className="uk-card-body uk-flex uk-flex-between">
            <span className="uk-text-bold">{name}</span>
            <Link to={getProduct(id, slug)} className="uk-text-bold">Voir</Link>
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