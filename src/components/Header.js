import React from "react"   
import TopNavbar from "./elements/TopNavbar"
import Navbar from "./elements/Navbar"
import CategoryNavbar from "../containers/category/CategoryNavbar"
import CollectionNavbar from "../containers/collections/CollectionNavbar"

const Header = props => {
    return (
        <header className="uk-margin-remove uk-padding-remove">

            <div className="container-fluid" style={{width: "100%"}}>
                <CategoryNavbar />
            </div>

            <div className="uk-container uk-background-muted uk-padding-remove">
                
                <CollectionNavbar />

                <Navbar changeSearch={props.changeSearch} />

                <TopNavbar />


            </div>

        </header>
    )
}

export default Header
