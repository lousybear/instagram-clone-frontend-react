import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import './css/Login.css';

function Login() {
    let navigate = useNavigate();

    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const routeChange = () => {
        let path = '/home';
        navigate(path);
    };

    const signInUser = () => {
        // fetch('/user/signIn', {
        //     method: 'post',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         username,
        //         password,
        //     }),
        // })
        //     .then((res) => res.json())
        //     .then((data) =>
        //         data ? routeChange() : alert('Authentication Failed')
        //     )
        //     .catch((err) => console.log('error' + err));
        Auth.signIn(username, password)
            .then((user) => {
                console.log(user);
                routeChange();
            })
            .catch((err) => console.log(err));
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
                    value={username}
                    onChange={(d) => setUsername(d.target.value)}
                />
                <input
                    className='login_textbox'
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(d) => setPassword(d.target.value)}
                />
                <button className='login-button' onClick={() => signInUser()}>
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
