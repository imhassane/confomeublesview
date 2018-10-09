import React from "react"   
import TopNavbar from "./elements/TopNavbar"
import Navbar from "./elements/Navbar"
import CategoryNavbar from "../containers/category/CategoryNavbar"


const Header = props => {
    return (
        <header className="mt-5">

            <div className="uk-container uk-background-muted uk-padding-remove">
                
                <Navbar changeSearch={props.changeSearch} />

                <TopNavbar />

                <CategoryNavbar />

            </div>

        </header>
    )
}

export default Header
