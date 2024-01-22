import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

function Navbar({ loggedin, setLoggedin}) {

    const [VideoUrl, setVideoUrl] = useState("")
    const [Title, setTitle] = useState("")
    const [Description, setDescription] = useState("")
    const [UserId, setUserId] = useState()
    
    useEffect(()  => {
        fetchUser()
    },[])

    const fetchUser = async () => {
        try {
            await fetch('http://localhost:8080/api/user', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include'
            })
                .then((response) => {
                    if (response.ok == false) {
                        return
                    }
                    return response.json()
                })
                .then(user => {
                    setUserId(user.user.id)
                })
                ;
        } catch (error) {
            return
        }
    };

    const logout = async (e) => {
        e.preventDefault();

        await fetch('http://localhost:8080/api/logout', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include'
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.status);
                }
                else {
                    setLoggedin(false);
                };
            })
            ;

    }

    const submit = async (e) => {
        e.preventDefault();

        await fetch('http://localhost:8080/api/vidpost', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                UserId,
                VideoUrl,
                Title,
                Description
            })
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.status);
                }
            })
            ;

    }

    function formReset() {
        document.getElementById("addVidForm").reset();
    }




    if (loggedin) {
        return (
            <div className="navbar bg-base-100">
                <div className="flex-1 gap-4">
                    <Link to="/" className="btn btn-ghost text-xl">YT Library</Link>
                </div>
                <div className="flex-none gap-2">
                    <div className="">
                        <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal(() => { preventDefault() })}>Add</button>
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">Add new video to your library!</h3>
                                <form id="addVidForm" className="card-body" onSubmit={submit}>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Link</span>
                                        </label>
                                        <input type="text" placeholder="Link" className="input input-bordered" required onChange={e => setVideoUrl(e.target.value)} />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Title</span>
                                        </label>
                                        <input type="text" placeholder="Title" className="input input-bordered" required onChange={e => setTitle(e.target.value)} />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Description</span>
                                        </label>
                                        <input type="text" placeholder="Description" className="input input-bordered" required onChange={e => setDescription(e.target.value)} />
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Add Video</button>
                                    </div>
                                </form>
                                <div className="modal-action">
                                    <form method="dialog">
                                        <button className="btn" onClick={formReset}>Close</button>
                                    </form>
                                </div>
                                <p>Press ESC or click "close" to close this window</p>
                            </div>
                        </dialog>
                    </div>
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li><a onClick={logout}>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    } else if (!loggedin) {
        return (
            <div className="navbar bg-base-100">
                <div className="flex-1 gap-4">
                    <Link to="/" className="btn btn-ghost text-xl">YT Library</Link>
                    <Link to="/register" className="btn btn-neutral">Register</Link>
                    <Link to="/login" className="btn btn-neutral">Login</Link>
                </div>
            </div>
        )
    }
}

export default Navbar