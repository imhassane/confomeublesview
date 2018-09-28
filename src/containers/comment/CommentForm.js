import React from "react"
import axios from "axios"
import DjangoCSRFToken from 'django-react-csrftoken'
import { makeURL } from "../../functions"


export default class CommentForm extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            username: "",
            message: "",
            email: ""
        }
    }
    postComment = e => {
        e.preventDefault()

        const { username, message, email } = this.state

        axios.post(makeURL(`comment/${this.props.product_id}/`), {
            username, message, email,
            csrfmiddlewaretoken: document.getElementsByName("csrfmiddlewaretoken")[0].value
        },).then(response => {
            alert(response.success)
        })
        .catch(error => {
            alert(error)
        })
    }
    render(){
        return (
            <div>
                <form method="POST" action="#" onSubmit={e => this.postComment(e)}>
                    <DjangoCSRFToken/>
                    <fieldset className="uk-fieldset">
                        <p className="uk-text-bold">Votre avis sur le produit nous intéresse</p>
                        <div className="uk-margin uk-child-width-1-2" uk-grid="true">
                            <div>
                                <div>
                                    <label className="uk-text-bold">Entrez votre nom</label>
                                    <input type="text"
                                        name="username"
                                        className="border border-secondary form-control"
                                        onChange={e => this.setState({ username: e.target.value})}
                                    />
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label className="uk-text-bold">Entrez votre adresse email</label>
                                    <input type="email"
                                        name="email"
                                        className="border border-secondary form-control"
                                        onChange={e => this.setState({ email: e.target.value})}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="uk-margin">
                            <label className="uk-text-bold">Entrez votre message</label>
                            <textarea
                                className="border border-secondary form-control"
                                onChange={e => this.setState({ message: e.target.value})}
                            ></textarea>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-dark uk-float-right">Publier le commentaire</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}
