import React from 'react'
import {NavLink} from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">React</NavLink>
{/*convert a to Link and href to to so that no-reload effect can be achieved*/}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/">Users</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/adduser">Add User</NavLink>
                        </li>  
                    </ul>
                </div>
            </div>
        </nav>)
}
