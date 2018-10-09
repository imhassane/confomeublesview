import React from "react"
import axios from "axios"
import {makeURL} from "../../functions"
import CollectionList from "../../components/collections/CollectionList"


export default class Collection extends React.Component {
    constructor(props) {
        super(props)
        this.state = { collections: [], loading: true }
    }
    async componentWillMount() {
        const datas = await axios.get(makeURL("collections/"))
        const { collections } = datas.data
        this.setState({ collections, loading: false})
    }
    render() {
        const {collections, loading} = this.state
        if(loading) return <p className="uk-flex-center"><span uk-spinner="true"></span></p>
        return (
            <div className="uk-padding">
                <p className="uk-text-bold">{this.props.title}</p>
                <CollectionList
                    collections={collections}
                    bread={this.props.bread}
                    search={this.props.search}
                    home={this.props.home}
                    title={this.props.title}
                />
            </div>
        )
    }
}
