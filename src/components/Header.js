import React from "react"   
import TopNavbar from "./elements/TopNavbar"
import Navbar from "./elements/Navbar"
import CategoryNavbar from "../containers/category/CategoryNavbar"


const Header = props => {
    return (
        <header>

            <TopNavbar />

            <Navbar changeSearch={props.changeSearch} />

            <CategoryNavbar />

        </header>
    )
}

export default Header
