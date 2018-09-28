import React from "react"
import { Link } from "react-router-dom"


const TopNavbar = props => {
    return (
        <div className="uk-background-muted">

            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link to="/products/" className="nav-link uk-text-meta">
                        Nos services
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/favorites/" className="nav-link uk-text-meta">
                        Mes favoris
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="" className="nav-link uk-text-meta">
                        Mes derniers produits consultés
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="" className="nav-link uk-text-meta">
                        Besoin d'aide
                    </Link>
                </li>
            </ul>

            <hr />

        </div>
    )
}

export default TopNavbar