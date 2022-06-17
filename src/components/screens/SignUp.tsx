import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import './css/SignUp.css';

function SignUp() {
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const checkEmailOrPhone = (emailOrPhone: any) => {
        const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (emailOrPhone.match(phoneRegex)) {
            setPhoneNumber(emailOrPhone);
        }
    };
    const signUpUser = () => {
        // fetch('/user/signUp', {
        //     method: 'post',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         name,
        //         username,
        //         password,
        //         emailOrPhone,
        //     }),
        // })
        //     .then((res) => res.json())
        //     .then((d) => console.log(d))
        //     .catch((err) => console.log(err));
        Auth.signUp({
            username,
            password,
            attributes: {
                email,
                phone_number: phoneNumber,
                name,
            },
        }).then((result) => console.log(result));
    };

    return (
        <div className='signup-container'>
            <div className='signup-card'>
                <img
                    className='instagram-logo'
                    src='../../../logo.png'
                    alt='Instagram Logo'
                />
                <input
                    className='signup__textbox'
                    type='text'
                    placeholder='Mobile number or email address'
                    // value={value}
                    onChange={(d) => checkEmailOrPhone(d.target.value)}
                />
                <input
                    className='signup__textbox'
                    type='text'
                    placeholder='Full Name'
                    value={name}
                    onChange={(d) => setName(d.target.value)}
                />
                <input
                    className='signup__textbox'
                    type='text'
                    placeholder='Username'
                    value={username}
                    onChange={(d) => setUsername(d.target.value)}
                />
                <input
                    className='signup__textbox'
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(d) => setPassword(d.target.value)}
                />
                <button className='signup-button' onClick={() => signUpUser()}>
                    Sign Up
                </button>
            </div>
            <div className='login-footer'>
                <p className='login-footer-text'>
                    Have an account?{' '}
                    <Link className='login-link-footer' to={'/login'}>
                        <span>Log In</span>
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default SignUp;
