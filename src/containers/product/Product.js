import React from 'react'
import axios from "axios"
import ProductList from "../../components/products/ProductList"
import { makeURL} from "../../functions"

export default class Product extends React.Component {
    constructor(props){
        super(props)
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
            <div className="uk-padding">
                <p className="uk-text-bold">{this.props.title}</p>
                <ProductList
                    products={products}
                    home={this.props.home}
                    search={this.props.search}
                    limit={this.props.limit}
                    bread={this.props.bread}
                />
            </div>
        )
    }
}