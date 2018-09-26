import React from "react"
import axios from "axios"
import { makeURL, getCategory } from "../functions"


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
                    <a className="nav-link uk-text-meta uk-text-bold" href={getCategory(category.id, category.slug)}>
                        {category.name}
                    </a>
                </li>
            )
        })
        return (
            <nav>
                <ul className="nav">
                    {lists}
                </ul>
            </nav>
        )
    }
}
