import React from "react"


const Map = _ => {
    return (
        <div className="uk-width-1-1 uk-padding-remove uk-card uk-card-body uk-card-default">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2648.9104325127905!2d-4.488783248364195!3d48.40066317914336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4816bbe5e37f2f2d%3A0x265f6b5ac8d1efa6!2s5+Rue+Bernard+Palissy%2C+29200+Brest!5e0!3m2!1sfr!2sfr!4v1538109311086"
                className="uk-width-1-1 uk-height-large"
                frameBorder="0"
                style={{border: "0"}}
                allowFullScreen></iframe>
        </div>
    )
}

export default Map
