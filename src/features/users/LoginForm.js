import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux'

import Navbar from "../../components/Navbar";
import { loginUser } from "./usersSlice";

export default function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginError, setLoginError] = useState('')

    const dispatch = useDispatch()

    // add form validation code here

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(loginUser({email, password})).then((result) => {
            console.log(result);
            if(result.payload.message) {
                setLoginError(result.payload.message);
            } else {
                // token sent successfully
                setEmail('');
                setPassword('');
                setLoginError('')
            }
        })
    }

    return (
        <>
            <Navbar />
            <form onSubmit={handleSubmit} className="form">
                <div className="form-block">
                    <label htmlFor="email">Enter your email: </label>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" name="email" id="email" required />
                </div>
                <div className="form-block">
                    <label htmlFor="password">Enter your password: </label>
                    <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" name="password" id="password" required />
                </div>
                <div className="form-block">
                    <input className="button" type="submit" value="Login" />
                </div>
                {loginError ? <div className="form-block">{loginError}</div> : ''}
            </form>
        </>
    )
}