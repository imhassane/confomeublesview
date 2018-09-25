import React from "react"
import { Link } from "react-router-dom"


const TopNavbar = props => {
    return (
        <nav className="">

            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link to="/products/" className="nav-link">
                        Nos services
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="" className="nav-link">
                        Mes favoris
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="" className="nav-link">
                        Mes derniers produits consultés
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="" className="nav-link">
                        Besoin d'aide
                    </Link>
                </li>
            </ul>

        </nav>
    )
}

export default TopNavbar