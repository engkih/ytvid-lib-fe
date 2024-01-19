import { useState, useEffect } from "react"

import Content from "./content"

function Home({ urlDatDone, videos, vidUrls }) {

    const [showPage, setShowPage] = useState(false)

    useEffect(() => {
        if (urlDatDone) {
            setShowPage(true);
        } else if (!urlDatDone) {
            setShowPage(false)
        }
    }, [urlDatDone]);

    return (
        < Content showPage={showPage} videos={videos} vidUrls={vidUrls} />
    )
}

export default Home