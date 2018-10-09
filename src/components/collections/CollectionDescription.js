import React from "react"
import {Link} from "react-router-dom"
import { getCollection } from "../../functions"

const CollectionDescription = ({id, name, slug, description, image}) => {
    return (
        <Link to={getCollection(id, slug)}  className="mb-4 uk-card uk-card-default uk-card-hover">
            <div className="uk-card uk-card-default uk-card-hover">
                <div className="uk-card-media-top uk-cover-container">
                    <canvas width="50" height="220"></canvas>
                    <img src={image} alt={name} uk-cover="true"/>
                </div>
                <div className="uk-card-body uk-flex uk-flex-center">
                    <span className="uk-text-bold">{name}</span>
                </div>
            </div>
        </Link>
    )
}

export default CollectionDescription
