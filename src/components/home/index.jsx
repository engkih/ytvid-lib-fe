import { useState, useEffect } from "react"

import Content from "./content"

function Home({loggedin}) {

    const [showPage, setShowPage] = useState(false)

    useEffect(() => {
        if (loggedin) {
            setShowPage(true);
        }else if(!loggedin){
            setShowPage(false)
        }
      }, [loggedin]);

    return (
        < Content showPage={showPage} />
    )
}

export default Home