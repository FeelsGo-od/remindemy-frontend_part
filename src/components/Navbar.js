import React from "react";
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar">
            <Link className="link" exact="true" activeclassname="active" to="/">Home</Link>
            <Link className="link" activeclassname="active" to="/register">Sign-up</Link>
            <Link className="link" activeclassname="active" to="/login">Sign-in</Link>
            <Link className="link" activeclassname="active" to="/users">Users</Link>
        </nav>
    )
}