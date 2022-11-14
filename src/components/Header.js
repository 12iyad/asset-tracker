import React from 'react'
import "./Header.css"

function Header() {
    return(
        <div className="header">
            <div className="header-right">
            <button className="header-button">Log In</button>
            <button className="header-button">Sign Up</button>
            </div>
        </div>
    )
}

export default Header