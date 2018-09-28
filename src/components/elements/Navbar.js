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
            <Sticky className="uk-background-muted uk-box-shadow-medium">
                <div className="uk-grid-small uk-child-width-1-3@s" uk-grid="true">
                    <div className="">
                        <Link to="/" className=" uk-grid-match uk-grid-small uk-child-width-1-2" uk-grid="true" id="confo-title">
                            <div>
                                <img
                                    src="https://s3.eu-west-3.amazonaws.com/confo-meubles/Confo+meubles.png"
                                    width="100" height="100" 
                                />
                            </div>
                            <div>
                                <h3 className="uk-padding-remove-bottom uk-margin-remove-bottom">Confo Meubles</h3>
                                <small>La qualité à bon prix</small>
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
            </Sticky>
        )
    }
}
