import React from "react"
import CommentForm from "./CommentForm"
import CommentList from "../../components/comments/CommentList"

export default class Comment extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: "",
            message: ""
        }
    }
    render(){
        const { product_id, comments } = this.props
        return (
            <div className="mt-5">
                <CommentForm product_id={product_id} />
                <CommentList comments={comments} />
            </div>
        )
    }
}
