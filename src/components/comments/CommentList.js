import React from "react"
import CommentDescription from "./CommentDescription"

const CommentList = props => {
    
    const { comments } = props

    const comments_list = comments.map(i => {
        return <CommentDescription
            username={i.username}
            email={i.email}
            message={i.message}
            created_at={i.created_at}
            images={i.pictures}
            key={i.id}
        />
    })
    return (
        <div className="uk-margin">
           <p className="uk-text-bold">Quelques avis sur le produit</p>
            <div>
                { comments_list }
            </div>
            { comments_list.length === 0 && (
                <p className="uk-text-meta">
                    Soyez le premier à laisser votre avis
                </p>
            )}
        </div>
    )
}

export default CommentList