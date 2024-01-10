import { Link } from "react-router-dom"

function Content() {
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

export default Content