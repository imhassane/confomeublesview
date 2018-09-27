import React from "react"
import Category from "./category/Category"
import Product from "./product/Product"
import { Link } from "react-router-dom"


export default class Home extends React.Component {
    render(){
        return (
            <div className="container">

                <ul className="uk-breadcrumb">
                    <li>
                        <Link to="/">
                            Accueil
                        </Link>
                    </li>
                </ul>
            
                <Category search={this.props.search} />
                <Product search={this.props.search} home={true} />
            </div>
        )
    }
}