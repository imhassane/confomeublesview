import React from "react"
import FooterAlert from "./elements/FooterAlert"
import Contact from "./elements/Contact"
import Map from "./elements/Map"

const Footer = props => {
    return (
        <footer style={{backgroundColor: "silver"}} className="pt-4">

            <div className="uk-margin-auto">
                <FooterAlert />

                <div className="uk-grid-collapse uk-child-width-1-2 uk-grid-match pt-4" uk-grid="true">
                    <div>
                        <Contact />
                    </div>
                    <div>
                        <Map />
                    </div>
                </div>
            </div>

            <p className="uk-text-center">
                Ce site a été créé par Hassane Sow
            </p>

        </footer>
    )
}

export default Footer
