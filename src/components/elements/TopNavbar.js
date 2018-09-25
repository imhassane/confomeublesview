import React from "react"
import { Link } from "react-router-dom"


const TopNavbar = props => {
    return (
        <nav>

            <ul>
                <li><Link to="/products/">Nos services</Link></li>
                <li><Link to="">Mes favoris</Link></li>
                <li><Link to="">Mes derniers produits consultés</Link></li>
                <li><Link to="">Besoin d'aide</Link></li>
            </ul>

        </nav>
    )
}

export default TopNavbar