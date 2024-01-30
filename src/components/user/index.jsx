import { Link } from "react-router-dom"
import { useEffectm, useState } from "react";

function User({ videos, vidUrls }) {

    const [seed, setSeed] = useState(1);
    const reset = () => {
        setSeed(Math.random());
    }

    const submit = async (e) => {
        // e.preventDefault();

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


    const card = videos.map((video, index) => {
        const vidTitle = (title) => {
            if (title.length > 60) {
                return (
                    title.substring(0, 60) + "..."
                )
            }
            return title
        }

        function parsers(url) {
            var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
            var match = url.match(regExp);
            return match && match[7].length === 11 ? match[7] : false;
        }

        return (
            <Link key={index} to={`/video/${video.ID}`}>
                <div className="card card-compact w-md h-80 bg-base-100 shadow-xl">
                    <figure><img src={`https://i.ytimg.com/vi/${parsers(video.VideoUrl)}/hq720.jpg`} alt={video.Title} className="object-cover" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-wrap">{video.Title}</h2>
                    </div>
                </div>
            </Link>
        )
    }
    )


    if (videos.length < 1) {
        return (
            <div className="hero h-full m-auto bg-base-200" key={seed}>
                <div className="hero-content text-center">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl font-bold">Welcome to your own youtube video library!</h1>
                        <p className="py-6">Start adding and managing your private Youtube video library.</p>
                        <div className="flex flex-row gap-4 justify-center">
                            {/* <Link to="/" className="btn btn-primary">Add Video</Link> */}
                            <div>
                                <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_1').showModal(() => { preventDefault() })}>Add Video</button>
                                <dialog id="my_modal_1" className="modal">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg">Add new video to your library!</h3>
                                        <form id="addVidForm" className="card-body" onSubmit={() => {
                                            submit()
                                            reset()
                                        }}>
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
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <div className="h-full p-5" key={seed}>
            <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-2">
                {card}
            </div>
        </div>
    )


}

export default User