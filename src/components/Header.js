import React from "react"   
import TopNavbar from "./elements/TopNavbar"
import Navbar from "./elements/Navbar"


const Header = props => {
    return (
        <header>

            <TopNavbar />

            <Navbar changeSearch={props.changeSearch} />

        </header>
    )
}

export default Header
