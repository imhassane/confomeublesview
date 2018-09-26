import React from 'react'
import axios from "axios"
import { Link } from "react-router-dom"
import { makeURL, getCategories, getCategory } from "../functions"

export default class categoryDetail extends React.Component {
    constructor(props){
        super(props)
        
        this.state = {
            category: {}
        }
    }

    getDatas = (id, slug) => {
        axios.get(makeURL(`category/${id}/${slug}/`))
        .then(datas => this.setState({ category: datas.data.category }))
    }

    componentDidMount = () => {
        this.getDatas(this.props.id, this.props.slug)
    }

    componentWillReceiveProps = nextProps => {
        this.getDatas(nextProps.id, nextProps.slug)
    }

    render(){
        const category = this.state.category

        return (
            <div>
                <ul className="uk-breadcrumb">
                    <li>
                        <Link to="/">
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link to={getCategories()}>
                            Catégories
                        </Link>
                    </li>
                    <li>
                        <Link to={getCategory(category.id, category.slug)}>
                            {category.name}
                        </Link>
                    </li>
                </ul>
                <div className="">

                    <span className="uk-text-bold">Catégorie: {category.name}</span>
                    
                </div>
            </div>
        )
    }
}