import React from 'react'
import logo from '../images/logo.svg'
import './SigninSendEmail.css'



function SignIn() {
    return (
        <section className="signin-send-section">
            <div className="signin-send-header-container">
                <div className="signin-send-sign-img">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="signin-send-sign-container">
                    <p>Back to</p>
                    <a href="#a" className="signin-send-sign-link">Sign In</a>
                </div>
            </div>
            <div className="signin-send-form-main-container">
                <div className="signin-send-form-container">
                    <p className="signin-send-signin">Enter your e-mail to reset your password</p>
                    <input className="signin-send-input" type="email" placeholder="E-mail"/>
                </div>
                <div className="signin-send-button-container">
                    <button className="signin-send-button" type="submit">Send</button>
                </div>
            </div>
        </section>
    )
}

export default SignIn