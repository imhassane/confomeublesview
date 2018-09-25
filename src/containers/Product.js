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
                <h4>Nos derniers produits</h4>
                <ProductList products={products} search={this.props.search} />
            </div>
        )
    }
}