import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './css/Login.css';

function Login() {
    let navigate = useNavigate();
    const routeChange = () => {
        let path = '/home';
        navigate(path);
    };
    return (
        <div className='login-container'>
            <div className='login-card'>
                <img
                    className='instagram-logo'
                    src='../../../logo.png'
                    alt='Instagram Logo'
                ></img>
                <input
                    className='login_textbox'
                    type='text'
                    placeholder='Phone number, username or email address'
                />
                <input
                    className='login_textbox'
                    type='password'
                    placeholder='Password'
                />
                <button className='login-button' onClick={routeChange}>
                    Log In
                </button>
            </div>
            <div className='signup-footer-card'>
                <p>
                    Don't have an account?{' '}
                    <Link className='signup-link-footer' to={'/signup'}>
                        <span>Sign Up</span>
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
