import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Navbar from '../navbar'
import RegisterInput from './input'
import Footer from '../footer'

function Register({loggedin, setLoggedin}) {

    const [showPage, setShowPage] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        if (loggedin) {
            setShowPage(false)
            navigate("/");
        } else {
            setShowPage(true)
        }
    }, [loggedin]);

    if(showPage) return(
        <div className='h-full flex flex-col'>
        < RegisterInput setShowPage={setShowPage} />
        </div>
    )
}

export default Register