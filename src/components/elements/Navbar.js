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
            <div className="">
                <div>
                    <h3>Confo Meubles</h3>
                    <small>La qualité à bon prix</small>
                </div>
                <div>
                    <input type="text" onChange={e=>this.handleSubmit(e)} />
                </div>
                <div>

                </div>
            </div>
        )
    }
}
