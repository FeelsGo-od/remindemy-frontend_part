import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <ul className="navbar">
            <li><NavLink exact="true" activeclassname="active" to="/">Home</NavLink></li>
            <li><NavLink activeclassname="active" to="/register">Sign-up</NavLink></li>
            <li><NavLink activeclassname="active" to="/login">Sign-in</NavLink></li>
            <li><NavLink activeclassname="active" to="/users">Users</NavLink></li>
        </ul>
    )
}