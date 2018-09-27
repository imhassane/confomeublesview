import React from 'react'
import axios from "axios"
import { Link } from "react-router-dom"
import { makeURL, getCategories, getCategory } from "../../functions"
import ProductList from "../../components/products/ProductList"

export default class categoryDetail extends React.Component {
    constructor(props){
        super(props)
        
        this.state = {
            category: {},
            loading: true
        }
    }

    getDatas = (id, slug) => {
        axios.get(makeURL(`category/${id}/${slug}/`))
        .then(datas => this.setState({ category: datas.data.category, loading: false }))
    }

    componentDidMount = () => {
        this.getDatas(this.props.id, this.props.slug)
    }

    componentWillReceiveProps = nextProps => {
        this.getDatas(nextProps.id, nextProps.slug)
    }

    render(){
        const { category, loading } = this.state

        if(loading) return <p>Chargement</p>

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

                    <p className="uk-text-bold">Catégorie: {category.name}</p>

                    <ProductList products={category.products} search={""} home={true} />
                    
                </div>
            </div>
        )
    }
}