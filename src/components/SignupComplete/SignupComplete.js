import React from 'react'
import logo from '../images/logo.svg'
import './SignupComplete.css'



function SignupComplete() {
    return (
        <section className="signup-complete-section">
            <div className="signup-complete-header-container">
                <div className="signup-complete-sign-img">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="signup-complete-sign-container">
                    <p>Already have an account?</p>
                    <a href="#a" className="signup-complete-sign-link">Log in</a>
                </div>
            </div>
            <div className="signup-complete-form-main-container">
                <div className="signup-complete-form-container">
                    <p className="signup-complete-signin">Complete your account</p>
                    <input className="signup-complete-input" type="email" placeholder="Create a password"/>
                    <div className="signup-complete-hard-container">
                        <div className="signup-complete-hard-one"></div>
                        <div className="signup-complete-hard-two"></div>
                        <div className="signup-complete-hard-three"></div>
                    </div>
                    <input className="signup-complete-input" type="password" placeholder="Confirm password"/>
                </div>
                <div className="signup-complete-button-container">
                    <label className="signup-complete-label">
                        <input type="checkbox"/>
                        <p className="signup-complete-text">I agree to myFixer.com</p>
                        <a href="#" className="signup-complete-link">Terms of Service</a>
                    </label>
                    <label className="signup-complete-label">
                        <input type="checkbox"/>
                        <p className="signup-complete-text">I agree to myFixer.com</p>
                        <a href="#" className="signup-complete-link">Privacy Policy</a>
                    </label>
                    <p>КАПЧА</p>
                    {/* <button className="signup-complete-button" type="submit">Done!</button> */}
                </div>
                <button className="signup-complete-button" type="submit">Done!</button>
            </div>
        </section>
    )
}

export default SignupComplete
