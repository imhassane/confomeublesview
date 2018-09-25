import React from "react"


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
                    <h3>Confo Meubles</h3>
                    <small>La qualité à bon prix</small>
                </div>
                <div className="col-md-4">
                    <input type="text" onChange={e=>this.handleSubmit(e)} />
                </div>
                <div className="col-md-4">

                </div>
            </div>
        )
    }
}
