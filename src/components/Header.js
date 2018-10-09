import React from "react"   
import TopNavbar from "./elements/TopNavbar"
import Navbar from "./elements/Navbar"
import CategoryNavbar from "../containers/category/CategoryNavbar"
import CollectionNavbar from "../containers/collections/CollectionNavbar"

const Header = props => {
    return (
        <header className="">

            <div className="container-fluid">
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
