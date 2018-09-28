import React from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { Spinner } from "react-uikit3"
import { makeURL } from "../../functions"
import ProductList from "../../components/products/ProductList"

export default class Favorite extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            favorites: [],
            loading: true
        }
    }
    componentWillMount = () => {
        axios.get(makeURL("favorites/"))
        .then(response => {
            this.setState({
                favorites: response.data.favorites,
                loading: false
            })
        })
        .catch(error => { })
    }
    render(){
        const { favorites, loading } = this.state
        const { search } = this.props

        return (
            <div className="uk-margin">

                <ul className="uk-breadcrumb">
                    <li>
                        <Link to="/">
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link to="/favorites/">
                            Mes favoris
                        </Link>
                    </li>
                </ul>

                { loading && (
                    <div className="uk-flex uk-flex-center">
                        <Spinner />
                    </div>
                )}

                { favorites && (
                    <div className="">
                        <ProductList home={true} products={favorites.products} search={search} favorite={true} />
                    </div>
                )}
            </div>
        )
    }
}