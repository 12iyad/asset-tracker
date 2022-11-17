import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import "./Header.css"


function Header() {
    return(
        <div className="header">
            <div className=" header-button header-left">
            <Link style={{ textDecoration: 'none' }} to ="/">Home</Link>
            </div>
            <Link style={{ textDecoration: 'none' }} className='header-button header-right' to ="/Login">Login</Link>
            <Link style={{ textDecoration: 'none' }} className='header-button header-right' to ="/Admin">Admin</Link>
            <Link style={{ textDecoration: 'none' }} className='header-button header-right' to ="/LogAsset">Log</Link>
        </div>
    )
}

export default Header