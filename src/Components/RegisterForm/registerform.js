import React from 'react';

const RegisterForm = ({ onRouteChange }) => {
    return (
        <div className="signin">
            <div className="signin__wrapper">
                <form className="signin__form">
                    <fieldset id="sign_up" className="signin__fieldset">
                        <legend className="signin__legend">Register</legend>
                        <div className="signin__box">
                            <label className="signin__label" htmlFor="name">Name</label>
                            <input className="signin__input" type="text" name="name"  id="name" autoComplete="name"/>
                        </div>
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
                        <input className="signin__input signin__input-bottom" onClick={() => onRouteChange('home')} type="submit" value="register" />
                    </div>
                    {/* <div className="signin__box">
                        <p className="signin__link">Register</p>
                    </div> */}
                </form>
            </div>
        </div>
    )
};

export default RegisterForm;