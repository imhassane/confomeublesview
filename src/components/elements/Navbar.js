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
            <div>
                <div className="row">
                    <div className="col-md-3">
                        <Link to="/" id="confo-title">
                            <div>
                                <h3 className="uk-padding-remove-bottom uk-margin-remove-bottom">Confo Meubles</h3>
                                <small>La qualité à bon prix</small>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-5 row">
                        <input type="search" className="col-md-6 col-sm-5 col-xs-3 uk-input uk-border-pill border-dark" onChange={e=>this.handleSubmit(e)} />
                        <Link to="/" className="col-md-3 col-sm-3 col-xs-3 uk-button uk-padding-remove">
                            <span uk-icon="icon:search"></span>
                        </Link>
                    </div>
                    <div className="col-md-4">

                    </div>
                </div>
                <hr />
            </div>
        )
    }
}
