import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Navbar from "../../components/Navbar";

import { loginUser } from "./usersSlice";

export default function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginError, setLoginError] = useState('')

    const dispatch = useDispatch()

    const canSave = [email, password].every(Boolean)

    const handleSubmit = (e) => {
        e.preventDefault();
        if(canSave) {
            dispatch(loginUser({email, password}))

            setEmail('');
            setPassword('');
            setLoginError('')
        }
    }

    return (
        <>
            <Navbar />
            <form onSubmit={handleSubmit} className="form">
                <div className="form-block">
                    <label htmlFor="email">Enter your email: </label>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" required />
                </div>
                <div className="form-block">
                    <label htmlFor="password">Enter your password: </label>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" required />
                </div>
                <div className="form-block">
                    <input className="button" type="submit" value="Login" />
                </div>
            </form>
        </>
    )
}