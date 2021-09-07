import React, { useState } from 'react'
import { NavLink } from "react-router-dom"
import '../styles/navbar.css'

export const Navbar = () => {

    const [navOpen, setNavOpen] = useState(false)

    let hamburgerClasses = 'hamburger'
    let linksClasses = 'nav-links'

    if (navOpen) {
        hamburgerClasses = 'hamburger open'
        linksClasses = 'nav-links open'
    }

    return (
        <nav>
            <div className={linksClasses}>
                <NavLink onClick={() => setNavOpen(!navOpen)} exact to="/">Home</NavLink>
                <NavLink onClick={() => setNavOpen(!navOpen)} exact to="/search">Search</NavLink>
            </div>
            <div onClick={() => setNavOpen(!navOpen)} class={hamburgerClasses}>
                <div class="line"></div>
            </div>
        </nav>
    )
}
