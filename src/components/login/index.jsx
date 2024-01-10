import Navbar from "../navbar";
import LoginInput from "./input";
import Footer from "../footer";

function Login() {
    return(
        <div className="h-full flex flex-col">
            < Navbar />
            < LoginInput />
            < Footer />
        </div>
    )
}

export default Login