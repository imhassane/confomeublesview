import React from "react"
import Category from "./Category"
import Product from "./Product"
import { Link } from "react-router-dom"


export default class Home extends React.Component {
    constructor(props){
        super(props)
    }
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