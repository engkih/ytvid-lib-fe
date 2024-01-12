import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import Navbar from '../navbar'
import RegisterInput from './input'
import Footer from '../footer'

function Register({loggedin}) {

    const navigate = useNavigate();

    useEffect(() => {
        if (loggedin) {
            navigate("/");
        }
    }, [loggedin]);

    return(
        <div className='h-full flex flex-col'>
        < Navbar />
        < RegisterInput />
        < Footer />
        </div>
    )
}

export default Register