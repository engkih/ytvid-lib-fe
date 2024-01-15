import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/home/index'
import Register from './components/register'
import Login from './components/login'
import Navbar from './components/navbar'
import Footer from './components/footer'



function App() {

    const [loggedin, setLoggedin] = useState(false);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            fetch('http://localhost:8080/api/check', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include'
            })
                .then((response) => {
                    if (response.ok) {
                        return setLoggedin(true);
                    }
                })
                ;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    console.log(loggedin)


    return (
        <div className='h-screen flex flex-col'>
            <BrowserRouter>
                < Navbar loggedin={loggedin} setLoggedin={setLoggedin} />
                <Routes>
                    <Route path='/' element={< Home loggedin={loggedin}/>} />
                    <Route path='register' element={< Register loggedin={loggedin} setLoggedin={setLoggedin} />} />
                    <Route path='login' element={< Login loggedin={loggedin} setLoggedin={setLoggedin} />} />
                </Routes>
                < Footer />
            </BrowserRouter>
        </div>
    )
}

export default App