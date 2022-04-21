import React from 'react'
import logo from '../images/logo.png'

const Navbar = () => {
    return (<>
    <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand d-flex align-items-center" href="/">
                <img src={logo} alt="logo" width="45" height="40" className="d-inline-block align-text-center border rounded-3 bg-secondary mx-3 bg-opacity-50" />Text Formatter
            </a>
        </div>
    </nav>
    </>)
}

export default Navbar