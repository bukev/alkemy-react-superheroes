import { getByDisplayValue } from '@testing-library/react'
import React from 'react'
import { NavLink } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav style={{display: window.location.href.indexOf("auth") > -1 && 'none'}}>
            <NavLink exact to="/">Home</NavLink>
            <NavLink exact to="/search">Search</NavLink>
        </nav>
    )
}
