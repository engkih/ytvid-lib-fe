import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route, useAsyncError, useNavigate, Link } from 'react-router-dom'

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
    const [vidId, setVidId] = useState([])
    const [idsDone, setIdsDone] = useState(false)




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
        // const urlDat = []
        // if (vidFetched) {
        //     videos.map((data) => { urlDat.push(parsers(data.VideoUrl)) })
        //     setVidUrls(Array.from(urlDat)) //This things consume me 2 days to fix, I tried to map it but the data is not an array, that is why I add "Array.from()".
        //     setUrlDatDone(true)
        // }
        const ids = []
        if (vidFetched) {
            videos.map((data) => { ids.push(data.ID) })
            setVidId(Array.from(ids)) //This things consume me 2 days to fix, I tried to map it but the data is not an array, that is why I add "Array.from()".
            setIdsDone(true)
        }
    }, [vidFetched])

    function parsers(url) {
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        var match = url.match(regExp);
        return match && match[7].length === 11 ? match[7] : false;
    }


    // const vidPages = vidUrls.map((url, index) => {
    //     return (
    //         <Route path={`/video/${url}`} key={index} element={<Video />} />
    //     )
    // })

    const vidPages = vidId.map((id, index) => {
        return (
            <Route path={`/video/${id}`} key={index} element={<Video />} />
        )
    })

    function NotFPage() {
        return (
            <section className="h-full bg-white dark:bg-gray-900">
                <div className="mt-auto py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center">
                        <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">404</h1>
                        <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Something's missing.</p>
                        <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
                        <a href="/" className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">Back to Homepage</a>
                    </div>
                </div>
            </section>
        )
    }

    if (!loggedin) {
        return (
            <div className='h-screen flex flex-col'>
                <BrowserRouter>
                    < Navbar loggedin={loggedin} setLoggedin={setLoggedin} />
                    <Routes>
                        <Route path='/' element={< Home urlDatDone={urlDatDone} videos={videos} vidUrls={vidUrls} />} />
                        <Route path='register' element={< Register loggedin={loggedin} setLoggedin={setLoggedin} />} />
                        <Route path='login' element={< Login loggedin={loggedin} setLoggedin={setLoggedin} />} />
                        <Route path='*' element={< NotFPage />} />
                    </Routes>
                    < Footer />
                </BrowserRouter>
            </div>
        )
    }

    if (!idsDone) {
        return (
            <h1 className='text-9xl'>LOADING....</h1>
        )
    }

    return (
        <div className='h-screen flex flex-col'>
            <BrowserRouter>
                < Navbar loggedin={loggedin} setLoggedin={setLoggedin} />
                <Routes>
                    <Route path='/' element={< User videos={videos} />} />
                    <Route path='register' element={< Register loggedin={loggedin} setLoggedin={setLoggedin} />} />
                    <Route path='login' element={< Login loggedin={loggedin} setLoggedin={setLoggedin} />} />
                    <Route path='video' element={< Video />} />
                    {vidPages}
                    <Route path='*' element={< NotFPage />} />
                </Routes>
                < Footer />
            </BrowserRouter>
        </div>
    )

}
export default App