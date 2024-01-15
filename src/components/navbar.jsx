import { Link } from "react-router-dom"

function Navbar({ loggedin, setLoggedin }) {


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


    if (loggedin) {
        return (
            <div className="navbar bg-base-100">
                <div className="flex-1 gap-4">
                    <Link to="/" className="btn btn-ghost text-xl">YT Library</Link>
                </div>
                <div className="flex-none gap-2">
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