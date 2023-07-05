import React from "react";
import { Link } from 'react-router-dom'

export default function Navbar() {

    return (
        <>
            <ul id="navbar">
                <li className="navbar-list"><Link to="/home">Home</Link></li>
                <li className="navbar-list"><Link to="/dashboard">Dashboard</Link></li>
                <li className="navbar-list"><Link to="/employee">Employee</Link></li>
                <li className="navbar-list"><Link to="/salary">Salary</Link></li>
                <li className="navbar-list"><Link to="/showalldata">Show All Data</Link ></li>
            </ul>
        </>
    )

}   