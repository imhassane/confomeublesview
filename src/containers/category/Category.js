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
    async componentWillMount(){
        const datas = await axios.get(makeURL("categories/"))
        const categories = datas.data.categories
        this.setState({ categories, loading: false})
    }
    render(){
        return (
            <div className="uk-padding">
                <p className="uk-text-bold">{this.props.title}</p>
                <CategoryList
                    categories={this.state.categories}
                    search={this.props.search}
                    home={this.props.home}
                />
                <hr />
            </div>
        )
    }
}