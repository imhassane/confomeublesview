import React from "react"
import axios from "axios"
import { Slideshow, Cover, Spinner } from "react-uikit3"
import Category from "./category/Category"
import Product from "./product/Product"
import { Link } from "react-router-dom"
import { makeURL } from "../functions"


export default class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = { loading: true, images: [] }
    }
    componentWillMount = () => {
        axios.get(makeURL(""))
        .then(response => {
            this.setState({
                images: response.data.images,
                loading: false
            })
        })
    }
    render(){
        const { images, loading } = this.state
        const img_list = images.map((k, i) => {
            return (
                <li key={k}>
                    <Cover type="image" src={images[i]} alt="slider" />
                </li>
            )
        })

        return (
            <div className="container">

                <ul className="uk-breadcrumb">
                    <li>
                        <Link to="/">
                            Accueil
                        </Link>
                    </li>
                </ul>

                { loading && (
                    <p className="uk-flex uk-flex-center">
                        <Spinner />
                    </p>
                )}
                { !loading && (
                    <Slideshow
                        pauseOnHover={false}
                        autoplay={true}
                        autoplayInterval={4000}
                        animation={"slide"}
                    >
                        <ul className="uk-slideshow-items uk-margin">
                            { img_list }
                        </ul>
                    </Slideshow>
                )}
            
                <Category search={this.props.search} home={true} />
                <Product search={this.props.search} home={true} limit={20} bread={false} />
            </div>
        )
    }
}