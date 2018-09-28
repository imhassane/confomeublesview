import React from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { makeURL, getCategory } from "../../functions"


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
                        className="nav-link uk-text-meta"
                        to={getCategory(category.id, category.slug)}
                    >
                        {category.name}
                    </Link>
                </li>
            )
        })
        return (
            <nav>
                <ul className="nav" uk-slider="true">
                    {lists}
                </ul>
                <hr />
            </nav>
        )
    }
}
