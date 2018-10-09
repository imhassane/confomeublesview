import React from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { makeURL, getCategory, getProducts } from "../../functions"


export default class CategoryNavbar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            categories: []
        }
    }
    componentWillMount = () => {
        axios.get(makeURL("categories/"))
        .then(datas => this.setState({ categories: datas.data.categories }))
    }
    render(){
        const lists = this.state.categories.map((k, i) => {
            const category = this.state.categories[i]
            return (
                <li className="nav-item" key={category.id}>
                    <Link
                        className="nav-link text-dark"
                        to={getCategory(category.id, category.slug)}
                    >
                        {category.name}
                    </Link>
                </li>
            )
        })
        return (
            <nav className="mb-4 uk-background-muted">
                <ul className="nav" uk-slider="true">
                    <li className="nav-item">
                        <Link to={getProducts()} className="nav-link text-dark">
                            Tous nos produits
                        </Link>
                    </li>
                    {lists}
                </ul>
                <hr />
            </nav>
        )
    }
}
