import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/home/index'
import Register from './components/register'
import Login from './components/login'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={< Home />} />
      <Route path='register' element={< Register />} />
      <Route path='login' element={< Login />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
