import Navbar from "../navbar"
import Content from "../content"
import Footer from "../footer"

function Home() {
    return (
        <div className="h-full flex flex-col">
        < Navbar />
        < Content />
        < Footer />
        </div>
    )
}

export default Home