import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './components/home/index'
import Register from './components/register'
import Login from './components/login'



function App() {

    const [loggedin, setLoggedin] = useState(false);

    useEffect(() => {
        fetchData();
    },[])

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

    // fetch('http://localhost:8080/api/check', {
    //     method: 'GET',
    //     headers: { 'Content-Type': 'application/json' },
    //     credentials: 'include'
    // })
    //     .then((response) => {
    //         if (response.ok) {
    //             return setLoggedin(true);
    //         }
    //     })
    //     ;
    console.log(loggedin)


    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={< Home />} />
                <Route path='register' element={< Register loggedin={loggedin}/>} />
                <Route path='login' element={< Login loggedin={loggedin} setLoggedin={setLoggedin}/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App