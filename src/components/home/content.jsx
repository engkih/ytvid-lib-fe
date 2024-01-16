import { Link } from "react-router-dom"
import { useEffect } from "react";

function Content({ showPage }) {
    console.log(showPage)

    if (showPage) {
        fetch('http://localhost:8080/api/vidindex', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data.videos);
            });

    }

    if (showPage) {
        return (
            <div className="h-full">
                <div className="flex flex-row p-10">

                    <Link to="/">
                        <div className="card card-compact w-96 bg-base-100 shadow-xl p-5">
                            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                            </div>
                        </div>
                    </Link>

                    <div className="card card-compact w-96 bg-base-100 shadow-xl p-5">
                        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                    </div>

                </div>
            </div>
        )
    } else if (!showPage) {
        return (
            <div className="hero h-full bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Welcome</h1>
                        <p className="py-6">Start making and managing your private Youtube library.</p>
                        <div className="flex flex-row gap-4 justify-center">
                            <Link to="/register" className="btn btn-primary">Register</Link>
                            <Link to="/login" className="btn btn-primary">Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Content