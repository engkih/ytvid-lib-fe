import { Link } from "react-router-dom"
import { useEffect } from "react";

function User({ videos, vidUrls }) {



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
            <Link key={index} to={`/video/${parsers(video.VideoUrl)}`}>
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
            <div className="hero h-full m-auto bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl font-bold">Welcome to your own youtube video library!</h1>
                        <p className="py-6">Start adding and managing your private Youtube video library.</p>
                        <div className="flex flex-row gap-4 justify-center">
                            <Link to="/" className="btn btn-primary">Add Video</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <div className="h-full p-5">
            <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-2">
                {card}
            </div>
        </div>
    )


}

export default User