import React from 'react'
import logo from '../images/logo.svg'
import './Signup.css'



function Signup() {
    return (
        <section className="signup-section">
            <div className="signup-header-container">
                <div className="signup-sign-img">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="signup-sign-container">
                    <p>Already have an account?</p>
                    <a href="#a" className="signup-sign-link">Log In</a>
                </div>
            </div>
            <div className="signup-form-main-container">
                <div className="signup-form-container">
                    <p className="signup-signin">Sign up</p>
                    <div className="signup-name-container">
                        <input className="signup-input-name" type="text" placeholder="First name"/>
                        <input className="signup-input-name" type="text" placeholder="Last name"/>
                    </div>
                    <input className="signup-input" type="email" placeholder="E-mail"/>
                    <input className="signup-input" type="password" placeholder="Password"/>
                </div>
                <div className="signup-button-container">
                    <button className="signup-button" type="submit">Get started</button>
                </div>
            </div>
        </section>
    )
}

export default Signup
