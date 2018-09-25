import React from 'react'
import { Link } from "react-router-dom"
import { getProduct } from "../../functions"


const ProductDescription = ({id, name, slug, description, details, image, category}) => (
    <Link to={getProduct(id, slug)}>
        <div className="uk-card uk-card-default">

            <div className="uk-card-media-top">
                <img src={image} alt={name} />
            </div>

            <div className="uk-card-body">
                <span className="">{name}</span>
            </div>
            
        </div>
    </Link>
)

export default ProductDescription