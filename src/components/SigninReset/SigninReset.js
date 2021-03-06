import React from 'react'
import logo from '../images/logo.svg'
import './SigninReset.css'



function SigninReset() {
    return (
        <section className="signin-reset-section">
            <div className="signin-reset-header-container">
                <div className="signin-reset-sign-img">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="signin-reset-sign-container">
                    <p>Do not have an account?</p>
                    <a href="#a" className="signin-reset-sign-link">Sign Up</a>
                </div>
            </div>
            <div className="signin-reset-form-main-container">
                <div className="signin-reset-form-container">
                    <p className="signin-reset-signin">Reset your password</p>
                    <input className="signin-reset-input" type="email" placeholder="New password"/>
                    <input className="signin-reset-input" type="password" placeholder="Confirm password"/>
                </div>
                <div className="signin-reset-button-container">
                    <button className="signin-reset-button" type="submit">Reset</button>
                </div>
            </div>
        </section>
    )
}

export default SigninReset
