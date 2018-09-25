import React from 'react'
import axios from "axios"
import { makeURL } from "../functions"

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
        return (
            <div>
                <h1>Liste des produits</h1>
                <p>{this.state.product.name}</p>
            </div>
        )
    }
}