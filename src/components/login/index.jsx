import { useEffect, useState } from "react";
import Navbar from "../navbar";
import LoginInput from "./input";
import Footer from "../footer";
import { useNavigate } from "react-router-dom";

function Login({ loggedin, setLoggedin }) {

    const [showPage, setShowPage] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        if (loggedin) {
          navigate("/");
        } else {
            setShowPage(true);
        }
      }, [loggedin]);

    if (showPage)return (
        <div className="h-full flex flex-col">
            < LoginInput loggedin={loggedin} setLoggedin={setLoggedin} showPage={showPage} setShowPage={setShowPage} />
        </div>
    )
}

export default Login