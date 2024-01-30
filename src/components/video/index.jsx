import React, { useState } from "react"
import { useEffect } from "react";
import { useLocation, useNavigate, Navigate } from "react-router-dom";

function Video() {

    const [vidId, setVidId] = useState()
    const [vidUrl, setVidUrl] = useState()
    const [vidTitle, setVidTitle] = useState()
    const [vidDesc, setVidDesc] = useState()
    const [editUrl, setEditUrl] = useState()
    const [editTitle, setEditTitle] = useState()
    const [editDesc, setEditDesc] = useState()

    const path = useLocation().pathname
    const navigate = useNavigate()

    const [seed, setSeed] = useState(1);
    const reset = () => {

        setSeed(seed + 1);
    }

    useEffect(() => {
        fetchVideo();
    }, [seed])

    const fetchVideo = async () => {
        try {
            await fetch(`http://localhost:8080/api${path}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include'
            })
                .then((response) => {
                    return response.json()
                })
                .then(data => {
                    console.log(data)
                    const video = data.video
                    const embdUrl = video.VideoUrl.replace("watch?v=", "embed/")
                    setVidId(video.ID)
                    setVidUrl(embdUrl.split("&")[0])
                    setVidTitle(video.Title)
                    setVidDesc(video.Description)
                })
                ;
        } catch (error) {
            return
        }
    };

    const updateVideo = async () => {
        try {
            await fetch(`http://localhost:8080/api${path}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({
                    VideoUrl: editUrl,
                    Title: editTitle,
                    Description: editDesc
                })
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(response.status);
                    }
                })
                ;

        } catch (error) {
            return
        }
    };


    const deleteVideo = async () => {
        try {
            await fetch(`http://localhost:8080/api${path}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include'
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(response.status);
                    }
                    return navigate(0)
                })
                ;

        } catch (error) {
            return
        }
    };

    return (
        <div className="flex flex-col h-full">
            <div className="m-2 border p-2 flex flex-row justify-between">
                <div className="mt-auto mb-auto">
                    <h2 className="text-3xl">{vidTitle}</h2>
                </div>
                <div className="flex flex-row-reverse gap-2">
                    {/* <button className="btn btn-outline btn-error">Delete</button> */}
                    <div>
                        <button className="btn btn-outline btn-error" onClick={() => document.getElementById('delete_modal').showModal(() => { preventDefault() })}>Delete</button>
                        <dialog id="delete_modal" className="modal">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">Are you sure want to delete this video from your library ?</h3>
                                <div className="modal-action">
                                    <form method="dialog">
                                        <button className="btn btn-error" onClick={deleteVideo}>Delete</button>
                                        <button className="btn">Cancle</button>
                                    </form>
                                </div>
                                <p>Press ESC or click "close" to close this window</p>
                            </div>
                        </dialog>
                    </div>
                    {/* <button className="btn btn-outline">Edit</button> */}
                    <div>
                        <button className="btn btn-outline" onClick={() => document.getElementById('edit_modal').showModal(() => { preventDefault() })}>Edit</button>
                        <dialog id="edit_modal" className="modal">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">Add new video to your library!</h3>
                                <form id="addVidForm" className="card-body" onSubmit={e => {
                                    updateVideo()
                                    reset()
                                    e.preventDefault()
                                }}>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Link</span>
                                        </label>
                                        <input type="text" defaultValue={vidUrl} className="input input-bordered" required onChange={e => setEditUrl(e.target.value)} />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Title</span>
                                        </label>
                                        <input type="text" defaultValue={vidTitle} className="input input-bordered" required onChange={e => setEditTitle(e.target.value)} />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Description</span>
                                        </label>
                                        <input type="text" defaultValue={vidDesc} className="input input-bordered" required onChange={e => setEditDesc(e.target.value)} />
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Edit Video</button>
                                    </div>
                                </form>
                                <div className="modal-action">
                                    <form method="dialog">
                                        <button className="btn">Close</button>
                                    </form>
                                </div>
                                <p>Press ESC or click "close" to close this window</p>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
            <div className="m-2 p-5 border h-full">
                <div className="h-full w-full">
                    <iframe className="h-full w-full" src={vidUrl} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                </div>
            </div>
            <div className="m-2 p-5 border">
                <div className="max-h-28 overflow-auto">
                    <p className="max-h-full text-left">{vidDesc}</p>
                </div>

            </div>
        </div>
    )
}


export default Video