import React from "react"
import FooterAlertDetail from "./FooterAlertDetail"

const FooterAlert = _ => {
    return (
        <div className="uk-container uk-margin-auto uk-child-width-1-3 uk-grid-medium uk-grid-match" uk-grid="true">
            <div>
                <FooterAlertDetail title={"Besoin d'aide ?"}>
                    <p className="uk-text-small uk-text-center">
                        Une question, un conseil ?
                        Nous sommes à votre disposition tous les jours
                    </p>
                </FooterAlertDetail>
            </div>
            <div>
                <FooterAlertDetail title={"Prise de commande"}>
                    <p className="uk-text-small uk-text-center">
                        Pour faire une commande, veuillez entrer
                        en contact avec nous.
                    </p>
                </FooterAlertDetail>
            </div>
            <div>
                <FooterAlertDetail title={"Delai d'attente"}>
                    <p className="uk-text-small uk-text-center">
                        Nous essayons de fournir le produit au plus vite.
                        Le nombre de commandes à preparer a une influence
                        sur le delai d'attente
                    </p>
                </FooterAlertDetail>
            </div>
        </div>
    )
}

export default FooterAlert
