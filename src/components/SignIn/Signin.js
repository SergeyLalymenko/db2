import React from 'react'
import logo from '../images/logo.svg'
import './Signin.css'



function Signin() {
    return (
        <section className="signin-section">
            <div className="signin-header-container">
                <div className="signin-sign-img">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="signin-sign-container">
                    <p>Do not have an account?</p>
                    <a href="#a" className="signin-sign-link">Sign Up</a>
                </div>
            </div>
            <div className="signin-form-main-container">
                <div className="signin-form-container">
                    <p className="signin-signin">Sign in</p>
                    <input className="signin-input" type="email" placeholder="E-mail"/>
                    <input className="signin-input" type="password" placeholder="Password"/>
                </div>
                <div className="signin-button-container">
                    <a className="signin-forget" href="#a">Forgot password?</a>
                    <button className="signin-button" type="submit">Sign in</button>
                </div>
            </div>
        </section>
    )
}

export default Signin
