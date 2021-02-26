import React from 'react';

class RegisterForm extends React.Component {
    state = {
        userName: '',
        userEmail: '',
        userPassword: '',
    }

    onRegisterName = (event) => {
        this.setState({ userName: event.target.value });
    }

    onRegisterEmail = (event) => {
        this.setState({ userEmail: event.target.value });
    }

    onRegisterPassword = (event) => {
        this.setState({ userPassword: event.target.value });
    }

    onSubmitRegister = () => {
        fetch('https://stormy-cliffs-08363.herokuapp.com/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: this.state.userName,
                email: this.state.userEmail,
                password: this.state.userPassword,
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
        return (
            <div className="signin">
                <div className="signin__wrapper">
                    <div className="signin__form">
                        <fieldset id="sign_up" className="signin__fieldset">
                            <legend className="signin__legend">Register</legend>
                            <div className="signin__box">
                                <label className="signin__label" htmlFor="name">Name</label>
                                <input className="signin__input" 
                                        type="text" 
                                        name="name"  
                                        id="name" 
                                        autoComplete="name"
                                        required
                                        onChange={this.onRegisterName}    
                                />
                            </div>
                            <div className="signin__box">
                                <label className="signin__label" htmlFor="email-address">Email</label>
                                <input className="signin__input" 
                                        type="email" 
                                        name="email-address"  
                                        id="email-address" 
                                        autoComplete="email-address"
                                        required
                                        onChange={this.onRegisterEmail}    
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
                                        onChange={this.onRegisterPassword}    
                                        />
                            </div>
                        </fieldset>
                        <div className="signin__box">
                            <input className="signin__input signin__input-bottom"  
                                    type="submit" 
                                    value="register"
                                    onClick={this.onSubmitRegister}
                                    />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default RegisterForm;