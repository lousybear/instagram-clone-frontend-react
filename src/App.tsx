import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/screens/Login';
import Home from './components/screens/Home';
import SignUp from './components/screens/SignUp';

function App() {
    return (
        <div className='root_component'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />}></Route>
                    <Route path='/signup' element={<SignUp />}></Route>
                    <Route path='/login' element={<Login />}></Route>
                    <Route path='/home' element={<Home />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
