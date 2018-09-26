import React from "react"
import { Link } from "react-router-dom"


const TopNavbar = props => {
    return (
        <nav className="">

            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link to="/products/" className="nav-link uk-text-meta uk-text-bold">
                        Nos services
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="" className="nav-link uk-text-meta uk-text-bold">
                        Mes favoris
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="" className="nav-link uk-text-meta uk-text-bold">
                        Mes derniers produits consultés
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="" className="nav-link uk-text-meta uk-text-bold">
                        Besoin d'aide
                    </Link>
                </li>
            </ul>

            <hr />

        </nav>
    )
}

export default TopNavbar