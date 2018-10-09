import React from "react"
import axios from "axios"
import Helmet from "react-helmet"
import {Spinner} from "react-uikit3"
import {Link} from "react-router-dom"
import {serverCollection, makeURL, getCollection, getCollections } from "../../functions"
import CategoryList from "../../components/categories/CategoryList"

export default class CollectionDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = { collection: {}, loading: true }
    }
    async componentWillMount() {
        const data = await axios.get(makeURL(serverCollection(this.props.id, this.props.slug)))
        const collection = data.data.collection
        this.setState({ collection, loading: false})
    }
    render() {
        const {collection, loading} = this.state
        if(loading) return <p className="uk-padding mt-4 mb-4 uk-flex uk-flex-center"><Spinner /></p>
        return (
            <div className="uk-padding mt-4 mb-4">
                <Helmet>
                    <title>{collection.name}</title>
                </Helmet>
                <ul className="uk-breadcrumb">
                    <li>
                        <Link to="/">
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link to={getCollections()}>
                            Collection
                        </Link>
                    </li>
                    <li>
                        <Link to={getCollection(collection.id, collection.slug)}>
                            {collection.name}
                        </Link>
                    </li>
                </ul>
                <div className="">

                    <p className="uk-text-bold">Collection: {collection.name}</p>

                    <CategoryList
                        categories={collection.categories}
                        search={this.props.search}
                        bread={false}
                    />
                </div>
            </div>
        )
    }
}