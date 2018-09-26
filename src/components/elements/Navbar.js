import React from "react"
import { Link } from "react-router-dom"


export default class Navbar extends React.Component {

    constructor(props){
        super(props)
        this.props = props
    }

    handleSubmit = e => {
        const search = e.target.value
        this.props.changeSearch(search)
    }

    render(){
        return (
            <div className="row">
                <div className="col-md-4">
                    <Link to="/">
                        <div>
                            <h3>Confo Meubles</h3>
                            <small>La qualité à bon prix</small>
                        </div>
                    </Link>
                </div>
                <div className="col-md-4">
                    <input type="search" className="uk-input uk-border-pill border-dark" onChange={e=>this.handleSubmit(e)} />
                </div>
                <div className="col-md-4">

                </div>
            </div>
        )
    }
}
