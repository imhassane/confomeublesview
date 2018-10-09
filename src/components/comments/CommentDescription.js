import React from "react"
import { randomInt } from "../../functions"

const CommentDescription = props => {
    const { username, created_at, message, images } = props
    return (
        <article className="uk-comment uk-comment-primary">
            <header className="uk-comment-header uk-grid-medium uk-flex-middle" uk-grid="true">
                <div className="uk-width-auto">
                    <img className="uk-comment-avatar uk-border-rounded" width="80" height="80" src={images[randomInt(images.length)]} alt="" />
                </div>
                <div className="uk-width-expand">
                    <span className="uk-text-bold uk-margin-remove"><a className="uk-link-reset" href="#">{username}</a></span>
                    <ul className="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                        <li><a href="#">{created_at}</a></li>
                        <li><a href="#">Répondre</a></li>
                    </ul>
                </div>
            </header>
            <div className="uk-comment-body">
                <p>{ message }</p>
            </div>
            <hr />
        </article>
    )
}

export default CommentDescription
