import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route, useAsyncError } from 'react-router-dom'

import Home from './components/home/index'
import Register from './components/register'
import Login from './components/login'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Video from './components/video'
import User from './components/user'



function App() {

    const [loggedin, setLoggedin] = useState(false);
    const [vidUrls, setVidUrls] = useState([])
    const [videos, setVideos] = useState()
    const [vidFetched, setVidFetched] = useState(false)
    const [urlDatDone, setUrlDatDone] = useState(false)



    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            await fetch('http://localhost:8080/api/check', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include'
            })
                .then((response) => {
                    if (response.ok) {
                        setLoggedin(true);
                    }
                })
                ;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    const fetchDatas = async () => {
        const result = await fetch('http://localhost:8080/api/vidindex', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
        });
        result.json().then((datas) => {
            const vids = datas.videos
            setVideos(Array.from(vids)) //This things consume me 2 days to fix, I tried to map it but the data is not an array, that is why I add "Array.from()".
            setVidFetched(true)
        })
    }

    useEffect(() => {
        if (loggedin) {
            fetchDatas();
        }
    }, [loggedin])


    useEffect(() => {
        const urlDat = []
        if (vidFetched) {
            videos.map((data) => { urlDat.push(parsers(data.VideoUrl)) })
            setVidUrls(Array.from(urlDat)) //This things consume me 2 days to fix, I tried to map it but the data is not an array, that is why I add "Array.from()".
            setUrlDatDone(true)
        }
    }, [vidFetched])

    function parsers(url) {
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        var match = url.match(regExp);
        return match && match[7].length === 11 ? match[7] : false;
    }

    const vidPages = vidUrls.map((url, index) => {
        return (
            <Route path={url} key={index} element={<Video />} />
        )
    })


    if (!loggedin) {
        return (
            <div className='h-screen flex flex-col'>
                <BrowserRouter>
                    < Navbar loggedin={loggedin} setLoggedin={setLoggedin} />
                    <Routes>
                        <Route path='/' element={< Home urlDatDone={urlDatDone} videos={videos} vidUrls={vidUrls} />} />
                        <Route path='register' element={< Register loggedin={loggedin} setLoggedin={setLoggedin} />} />
                        <Route path='login' element={< Login loggedin={loggedin} setLoggedin={setLoggedin} />} />
                        <Route path='video' element={< Video />} />
                    </Routes>
                    < Footer />
                </BrowserRouter>
            </div>
        )
    }

    if (!urlDatDone) {
        return (
            <h1 className='text-9xl'>LOADING....</h1>
        )
    }

    return (
        <div className='min-h-screen flex flex-col'>
            <BrowserRouter>
                < Navbar loggedin={loggedin} setLoggedin={setLoggedin}/>
                <Routes>
                    <Route path='/' element={< User videos={videos} />} />
                    <Route path='register' element={< Register loggedin={loggedin} setLoggedin={setLoggedin} />} />
                    <Route path='login' element={< Login loggedin={loggedin} setLoggedin={setLoggedin} />} />
                    {vidPages}
                </Routes>
                < Footer />
            </BrowserRouter>
        </div>
    )

}
export default App