import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

import { loginUser, showProfile } from "./usersSlice";

export default function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginError, setLoginError] = useState('')
    const [successMessage, setSuccessMessage] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const userData = JSON.parse(localStorage.getItem('user'))

    useEffect(() => {
        if(userData) navigate('/', { replace: true })
    }, [])

    // add form validation code here

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(loginUser({email, password})).then((result) => {
            if(result.payload.message) {
                setLoginError(result.payload.message);
            } else {
                // token sent successfully
                setEmail('');
                setPassword('');
                setLoginError('')
                // check token and signin user
                dispatch(showProfile(result.payload.token)).then((loginStatus) => {
                    if(loginStatus.payload.message) setSuccessMessage(loginStatus.payload.message)
                    // save status to the localstorage to keep user logged-in for a while
                    localStorage.setItem('user', JSON.stringify(result.meta.arg))
                    localStorage.setItem('userId', JSON.stringify(loginStatus.payload.currentUser._id))
                    navigate('/', { replace: true })
                    window.location.reload()
                })
            }
        })
    }

    return (
        <>
            {successMessage ? 
            <h2 className="center pt-23">{successMessage}</h2> 
            : 
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
            </form>}
        </>
    )
}