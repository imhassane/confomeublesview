import React from "react"


const Contact = _ => {
    return (
        <div className="uk-section uk-section-secondary uk-padding-large">

            <h1>Contact</h1>

            <p className="uk-text-meta">
                Nous sommes à votre service et sommes disponibles
                pour toute question et avis concernant un produit,
                nos methodes de travail (prise de commandes, delai d'attente)
                et d'autres informations supplémentaires.
            </p>

            <p className="uk-text-meta">
                Surtout n'hesitez pas à nous contacter !!
            </p>

            <div className="uk-grid-small" uk-grid="true">

                <p className="uk-text-center">
                    <a href="tel:+213551462006" className="uk-button uk-button-default">
                        <span uk-icon="icon:receiver" className="mr-1 uk-text-baseline"></span>
                        Par téléphone: (+213) 551 46 20 06
                    </a>
                </p>

                <p className="uk-text-center">
                    <a href="mailto:imthassane@gmail.com" className="uk-button uk-button-default">
                        <span uk-icon="icon:mail" className="mr-1 uk-text-baseline"></span>
                        Par email: imthassane@gmail.com
                    </a>
                </p>

            </div>
        
        </div>
    )
}

export default Contact