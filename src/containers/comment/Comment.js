import React from "react"
import CommentForm from "./CommentForm"

export default class Comment extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: "",
            message: ""
        }
    }
    postComment = () => {

    }
    render(){
        return (
            <div>
                <CommentForm product_id={this.props.product_id} />
            </div>
        )
    }
}
