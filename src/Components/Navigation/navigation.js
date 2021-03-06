import React from 'react';

import './navigation.css';


const Navigation = ({ onRouteChange, isSignedIn }) => {
        if (isSignedIn) {
            return (
                <nav>
                    <p onClick={() => onRouteChange('signout')}>Sign Out</p>
                </nav>
            )
        } else {
            return (
                <nav>
                    <p onClick={() => onRouteChange('signin')}>SignIn</p>
                    <p onClick={() => onRouteChange('register')}>Register</p>
                </nav>

            )
        }

};

export default Navigation;