import React from "react";

export default function Navbar() {
    return (
        <ul className="navbar">
            <li><a className="active" href="/">Home</a></li>
            <li><a href="/register">Sign-up</a></li>
            <li><a href="/login">Sign-in</a></li>
            <li><a href="/users">Users</a></li>
        </ul>
    )
}