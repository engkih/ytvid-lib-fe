import Navbar from '../navbar'
import RegisterInput from './input'
import Footer from '../footer'

function Register() {
    return(
        <div className='h-full flex flex-col'>
        < Navbar />
        < RegisterInput />
        < Footer />
        </div>
    )
}

export default Register