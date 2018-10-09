import React from "react"
import { Link } from "react-router-dom"


const TopNavbar = props => {
    return (
        <div className="uk-background-muted uk-padding-remove-bottom">

            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link to="/products/" className="nav-link text-dark">
                        Nos services
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/favorites/" className="nav-link text-dark">
                        Mes favoris
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="" className="nav-link text-dark">
                        Mes derniers produits consultés
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="" className="nav-link text-dark">
                        Besoin d'aide
                    </Link>
                </li>
            </ul>

        </div>
    )
}

export default TopNavbar