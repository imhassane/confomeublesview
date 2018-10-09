import React from "react"
import { Link } from "react-router-dom"
import { Sticky } from "react-uikit3"


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
            <div className="mt-5 uk-background-muted uk-box-shadow-medium">
                <div className="uk-grid-small uk-child-width-1-3@s" uk-grid="true">
                    <div className="uk-flex uk-flex-center">
                        <Link to="/" id="confo-title">
                            <div className="uk-flex uk-flex-center">
                                <p className="uk-text-danger uk-logo uk-text-bold uk-text-center">Confo Meubles</p>
                            </div>
                        </Link>
                    </div>
                    <div className="uk-grid-collapse" uk-grid="true">
                        <div className="uk-width-expand">
                            <input type="search" className="form-control border-dark" onChange={e=>this.handleSubmit(e)} />
                        </div>
                        <div className="uk-width-auto">
                            <Link to="/" className="btn btn-danger">
                                <span uk-icon="icon:search"></span>
                            </Link>
                        </div>
                    </div>
                    <div className="">

                    </div>
                </div>
                <hr />
            </div>
        )
    }
}
