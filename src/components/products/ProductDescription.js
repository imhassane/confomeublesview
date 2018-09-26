import React from 'react'
import { Link } from "react-router-dom"
import { getProduct } from "../../functions"


const ProductDescription = ({id, name, slug, description, details, image, category, price}) => (
    <Link to={getProduct(id, slug)}>
        <div className="uk-card uk-card-default">

            <div className="uk-card-media-top">
                <img src={image} alt={name} style={{minHeight: '100px'}} />
            </div>

            <div className="uk-card-body">
                <span className="uk-text-bold">{name}</span>
            </div>

            <div className="uk-card-footer">
                <span className="uk-text-lead uk-text-primary">{price}€</span>
            </div>
            
        </div>
    </Link>
)

export default ProductDescription