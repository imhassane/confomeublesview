import React from "react"


const FooterAlertDetail = _ => {
    return (
        <div className="uk-margin uk-section uk-section-default uk-padding">
            <p className="uk-text-danger uk-text-bold uk-text-center">{_.title}</p>
            {_.children}
        </div>
    )
}

export default FooterAlertDetail
