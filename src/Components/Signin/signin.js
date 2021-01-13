import React from 'react';

import './singin.css';

const SignIn = ({ onRouteChange }) => {
    return (
        <div className="signin">
            <div className="signin__wrapper">
                <form className="signin__form">
                    <fieldset id="sign_up" className="signin__fieldset">
                        <legend className="signin__legend">Sign In</legend>
                        <div className="signin__box">
                            <label className="signin__label" htmlFor="email-address">Email</label>
                            <input className="signin__input" type="email" name="email-address"  id="email-address" autoComplete="email-address"/>
                        </div>
                        <div className="signin__box">
                            <label className="signin__label" htmlFor="password">Password</label>
                            <input className="signin__input" type="password" name="password"  id="password" autoComplete="password"/>
                        </div>
                    </fieldset>
                    <div className="signin__box">
                        <input className="signin__input signin__input-bottom" onClick={() => onRouteChange('home')} type="submit" value="Sign in" />
                    </div>
                    <div className="signin__box">
                        <a href="#0" className="signin__link" onClick={() => onRouteChange('register')}>Register</a>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default SignIn;