import React from 'react'
import { Link } from "react-router-dom"
import { getProduct } from "../../functions"


const ProductDescription = ({id, name, slug, description, details, image, category, price}) => (
    
    <div className="uk-card uk-card-muted">

        <div className="uk-card-media-top uk-cover-container">
            <canvas width="50" height="150"></canvas>
            <img src={image} alt={name} uk-cover="true"/>
        </div>

        <div className="uk-card-body uk-flex uk-flex-between">
            <span className="uk-text-bold">{name}</span>
            <Link to={getProduct(id, slug)} className="uk-text-bold">Voir</Link>
        </div>

        <div className="uk-card-footer uk-flex uk-flex-between">
            <span className="uk-text-lead uk-text-bold">{price}€</span>
            <Link to="/" className="uk-button uk-button-small">
                    Ajouter aux favoris
            </Link>
        </div>
            
    </div>
)

export default ProductDescription