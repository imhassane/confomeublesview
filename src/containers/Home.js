import React from "react"
import Category from "./Category"


export default class Home extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="container">
            
                <Category search={this.props.search} />
            </div>
        )
    }
}