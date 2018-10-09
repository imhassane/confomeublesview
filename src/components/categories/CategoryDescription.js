import React from "react"
import { Link } from "react-router-dom"
import { getCategory } from "../../functions"


const CategoryDescription = ({id, name, slug, description, image, details, nb_products}) => {
    return (
        <Link to={getCategory(id, slug)}  className="mb-4 uk-card uk-card-default uk-card-hover">
            <div className="uk-card uk-card-default uk-card-hover">
                <div className="uk-card-media-top uk-cover-container">
                    <canvas width="50" height="220"></canvas>
                    <img src={image} alt={name} uk-cover="true"/>
                </div>
                <div className="uk-card-body">
                    <p className="uk-text-bold">{name}</p>
                    <p className="uk-text-meta">{nb_products} produit(s)</p>
                </div>
            </div>
        </Link>
    )
}

export default CategoryDescription
