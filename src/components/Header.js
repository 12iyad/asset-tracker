import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import "./Header.css"


function Header() {

    

    return(
        <div className="header">
            <Link style={{ textDecoration: 'none' }} className=" header-button header-left" to ="/">Home</Link>
            <Link style={{ textDecoration: 'none' }} className='header-button header-right' to ="/Login">Login</Link>
            <Link style={{ textDecoration: 'none' }} className='header-button header-right' to ="/Admin">Admin</Link>
            <Link style={{ textDecoration: 'none' }} className='header-button header-right' to ="/LogAsset">Log</Link>
        </div>
    )
}

export default Header