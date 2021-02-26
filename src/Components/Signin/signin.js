import React from 'react';

import './singin.css';
class SignIn extends React.Component {
    state = {
        signInEmail: '',
        signInPassword: '',
    }

    onEmailChange = (event) => {
        this.setState({ signInEmail: event.target.value });
    }

    onPasswordChange = (event) => {
        this.setState({ signInPassword: event.target.value });
    }

    onSubmitSignIn = () => {
        fetch('https://stormy-cliffs-08363.herokuapp.com/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword,
            })
        })
        .then(response => response.json())
        .then(user => {
            if (user.id) { 
            this.props.loadUser(user);
            this.props.onRouteChange('home');
            }
        })
    }

    render() {
        const { onRouteChange } = this.props;
        return (
            <div className="signin" role="form">
                <div className="signin__wrapper">
                    <div className="signin__form">
                        <fieldset id="sign_up" className="signin__fieldset">
                            <legend className="signin__legend">Sign In</legend>
                            <div className="signin__box">
                                <label className="signin__label" htmlFor="email-address">Email</label>
                                <input className="signin__input" 
                                    type="email" 
                                    name="email-address"  
                                    id="email-address" 
                                    autoComplete="email-address"
                                    onChange={this.onEmailChange}    
                                    />
                            </div>
                            <div className="signin__box">
                                <label className="signin__label" htmlFor="password">Password</label>
                                <input className="signin__input" 
                                        type="password" 
                                        name="password"  
                                        id="password" 
                                        autoComplete="password"
                                        required
                                        onChange={this.onPasswordChange}    
                                        />
                            </div>
                        </fieldset>
                        <div className="signin__box">
                            <input className="signin__input signin__input-bottom"
                                    onClick={this.onSubmitSignIn}
                                    type="submit" 
                                    value="Sign in" 
                            />
                        </div>
                        <div className="signin__box">
                            <a href="#0" className="signin__link" onClick={() => onRouteChange('register')}>Register</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default SignIn;