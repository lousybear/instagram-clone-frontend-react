import React from 'react';
import './css/Home.css';
import Posts from './Posts';

function Home() {
    return (
        <div className='home__container'>
            <div className='home__topnav'>
                <div className='home__topnav_left'>
                    <img
                        className='home__instagramlogo'
                        src='../../../logo.png'
                        height='30px'
                        alt='instagram logo'
                    />
                </div>
                <div className='home__topnav__center'>
                    <input
                        className='home__topnav__search'
                        type='text'
                        placeholder='Search'
                    ></input>
                </div>
                <div className='home__topnav__right'>
                    <svg
                        aria-label='Home'
                        className='home__topnav__icon'
                        color='#262626'
                        fill='#262626'
                        height='24'
                        role='img'
                        viewBox='0 0 24 24'
                        width='24'
                    >
                        <path
                            d='M9.005 16.545a2.997 2.997 0 012.997-2.997h0A2.997 2.997 0 0115 16.545V22h7V11.543L12 2 2 11.543V22h7.005z'
                            fill='none'
                            stroke='currentColor'
                            stroke-linejoin='round'
                            stroke-width='2'
                        ></path>
                    </svg>

                    <svg
                        aria-label='Messenger'
                        color='#262626'
                        className='home__topnav__icon'
                        fill='#262626'
                        height='24'
                        role='img'
                        viewBox='0 0 24 24'
                        width='24'
                    >
                        <path
                            d='M12.003 2.001a9.705 9.705 0 110 19.4 10.876 10.876 0 01-2.895-.384.798.798 0 00-.533.04l-1.984.876a.801.801 0 01-1.123-.708l-.054-1.78a.806.806 0 00-.27-.569 9.49 9.49 0 01-3.14-7.175 9.65 9.65 0 0110-9.7z'
                            fill='none'
                            stroke='currentColor'
                            stroke-miterlimit='10'
                            stroke-width='1.739'
                        ></path>
                        <path
                            d='M17.79 10.132a.659.659 0 00-.962-.873l-2.556 2.05a.63.63 0 01-.758.002L11.06 9.47a1.576 1.576 0 00-2.277.42l-2.567 3.98a.659.659 0 00.961.875l2.556-2.049a.63.63 0 01.759-.002l2.452 1.84a1.576 1.576 0 002.278-.42z'
                            fill-rule='evenodd'
                        ></path>
                    </svg>

                    <svg
                        aria-label='New post'
                        className='home__topnav__icon'
                        color='#262626'
                        fill='#262626'
                        height='24'
                        role='img'
                        viewBox='0 0 24 24'
                        width='24'
                    >
                        <path
                            d='M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552z'
                            fill='none'
                            stroke='currentColor'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                        ></path>
                        <line
                            fill='none'
                            stroke='currentColor'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            x1='6.545'
                            x2='17.455'
                            y1='12.001'
                            y2='12.001'
                        ></line>
                        <line
                            fill='none'
                            stroke='currentColor'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            x1='12.003'
                            x2='12.003'
                            y1='6.545'
                            y2='17.455'
                        ></line>
                    </svg>

                    <img
                        className='home__topnav__icon dp'
                        src='../../../dp.jpg'
                        alt='profile pic'
                    />
                </div>
            </div>
            <Posts />
        </div>
    );
}

export default Home;
