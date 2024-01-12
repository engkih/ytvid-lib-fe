import { useEffect, useState } from "react";
import Navbar from "../navbar";
import LoginInput from "./input";
import Footer from "../footer";
import { redirect, useNavigate } from "react-router-dom";

function Login({ loggedin, setLoggedin }) {

    const [showPage, setShowPage] = useState(true)
    const navigate = useNavigate();

    useEffect(() => {
        if(loggedin){
            navigate("/")
        }else if(!loggedin){
            setShowPage(true)
        }
    });

    if (showPage)return (
        <div className="h-full flex flex-col">
            < Navbar />
            < LoginInput loggedin={loggedin} setLoggedin={setLoggedin} />
            < Footer />
        </div>
    )
}

export default Login