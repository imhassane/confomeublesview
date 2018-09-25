import React from 'react'
import { Link } from "react-router-dom"

const ProductDescription = ({id, name, slug, description, details, image, category}) => (
    <div className="">

        <h3>{name}</h3>
        <Link to={`/product/${id}/${slug}/`}>Voir les details</Link>
    </div>
)

export default ProductDescription