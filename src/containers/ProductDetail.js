import React from 'react'
import axios from "axios"
import { Link } from "react-router-dom"
import { makeURL, getProducts, getProduct } from "../functions"

export default class ProductDetail extends React.Component {
    constructor(props){
        super(props)
        
        this.state = {
            product: {}
        }
    }

    componentDidMount = () => {
        axios.get(makeURL(`product/${this.props.id}/${this.props.slug}/`))
        .then(datas => this.setState({ product: datas.data.product }))
    }
    render(){
        const product = this.state.product

        return (
            <div>
                <ul className="uk-breadcrumb">
                    <li>
                        <Link to="/">
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link to={getProducts()}>
                            Produits
                        </Link>
                    </li>
                    <li>
                        <Link to={getProduct(product.id, product.slug)}>
                            {product.name}
                        </Link>
                    </li>
                </ul>
                <div className="row">

                    <div className="col-7">
                        <img src={product.image} alt={product.name} />

                    </div>

                    <div className="col-5">
                        <h3 className="uk-text-bold">{product.name}</h3>
                        <p>
                            <small className="uk-text-meta">Produit ajouté le {product.created_at}</small>
                        </p>
                        <div className="">
                            <div>
                                <span className="uk-text-bold uk-text-primary uk-text-lead">{product.price}€</span>
                            </div>

                            <div className="uk-margin">
                                <a href="tel:0616552934" className="uk-button uk-button-default">Commander</a>
                                <Link to="/" className="uk-button uk-button-default"><span uk-icon="icon: heart"></span></Link>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}