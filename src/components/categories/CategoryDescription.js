import React from "react"
import { Link } from "react-router-dom"
import { getCategory } from "../../functions"


const CategoryDescription = ({id, name, slug, description, image, details}) => (
    <Link to={getCategory(id, slug)}>
        <div className="uk-card uk-card-default uk-card-hover">
            <div className="uk-card-media-top">
                <img src={image} alt={name} style={{minHeight: "100px"}}/>
            </div>
            <div className="uk-card-body">
                <span className="uk-text-bold">{name}</span>
            </div>
        </div>
    </Link>
)

export default CategoryDescription