import React from "react"
import axios from "axios"
import { makeURL } from "../../functions"
import CategoryList from "../../components/categories/CategoryList"


export default class Category extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            categories: [],
            loading: true
        }
    }
    componentWillMount(){
        axios.get(makeURL("categories/"))
        .then(categories => this.setState({ categories: categories.data.categories, loading: false}))
    }
    render(){
        return (
            <div className="">
                <p className="uk-text-bold">Nos Catégories</p>
                <CategoryList
                    categories={this.state.categories}
                    search={this.props.search}
                />
                <hr />
            </div>
        )
    }
}