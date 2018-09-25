import React from 'react'
import axios from "axios"
import ProductList from "../components/products/ProductList"
import { makeURL} from "../functions"

export default class Product extends React.Component {
    constructor(props){
        super(props)
        this.props = props
        this.state = {
            products: []
        }
    }
    componentWillMount = () => {
        axios.get(makeURL("products/"))
        .then(datas => this.setState({ products: datas.data.products }))
    }
    render(){
        const products = this.state.products
        return (
            <div>
                <h1>Liste des produits</h1>
                <p>
                    Terme de recherche: {this.props.search}
                </p>
                <ProductList products={products} search={this.props.search} />
            </div>
        )
    }
}