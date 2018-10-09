import React from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { Spinner } from "react-uikit3"
import {serverCollections, makeURL, getCollection, getCategory, randomButton} from "../../functions"

export default class CollectionNavbar extends React.Component {
    constructor(props){
        super(props)
        this.state = { collections: [], loading: true }
    }
    async componentWillMount() {
        const { data } = await axios.get(makeURL(serverCollections()))
        const collections = data.collections
        this.setState({ collections, loading: false})
    }
    render() {
        const {collections, loading} = this.state

        if(loading) return <p className="uk-padding uk-flex uk-flex-center"><Spinner /></p>

        const navbar = collections.map(c => {
            return (
                <li className="uk-inline" key={c.id}>
                    <Link className={`${randomButton()} ml-1`} to={getCollection(c.id, c.slug)}>
                        {c.name}
                    </Link>
                    <div uk-dropdown="pos: bottom">
                        <div uk-grid="true">
                            <div className="uk-width-expand">
                                    <ul className="uk-nav uk-dropdown-nav">
                                    <li className="uk-nav-header">Catégories relatives à cette collection</li>
                                    {c.categories.map(cat => {
                                        return (
                                            <li key={cat.id}>
                                                <Link className="uk-button-text uk-text-lead text-dark" to={getCategory(cat.id, cat.slug)}>
                                                    {cat.name}
                                                </Link>
                                            </li>
                                        )
                                    })}
                                    </ul>
                                <div>
                                </div>
                            </div>
                            <div className="uk-width-auto">
                            
                            </div>
                        </div>
                    </div>
                </li>
            )
        })

        return (
            <div className="">
                <ul>
                    {navbar}
                </ul>
            </div>
        )
    }
}