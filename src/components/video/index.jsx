import React from "react"
import Youtube from "react-youtube"

class Video extends React.Component {
    render() {
        const option = {
            height: '390',
            width: '640',
            playerVars: {
                autoplay: 0,
                controls: 1,
            },
        };

        return (
            <div className="flex flex-col h-full">
                <div className="m-2 border p-2 flex flex-row-reverse gap-2">
                    <button className="btn btn-outline btn-error">Delete</button>
                    <button className="btn btn-outline">Edit</button>
                </div>
                <div className="m-2 p-5 border h-full">
                    <div className="h-full w-full">
                        {/* <Youtube videoId="_4hCcyRCqtk" option={option} onReady={this._onReady} id="video"
                        className="m-auto" /> */}
                        <iframe className="h-full w-full" src="https://www.youtube.com/embed/_4hCcyRCqtk?si=7ivhOEF_FjJdrtkS" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    </div>
                </div>
                <div className="m-2 p-5 border">
                    <h2 className="text-left pb-5">Full Sound BR 101 - Raketenstart am Ostbahnhof [4K 60 FPS]</h2>
                    <div className="max-h-28 overflow-auto">
                        <p className="max-h-full text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet risus nullam eget felis eget. Odio morbi quis commodo odio aenean. Magna fringilla urna porttitor rhoncus dolor. Quis enim lobortis scelerisque fermentum dui faucibus in. Arcu cursus euismod quis viverra nibh cras. Id volutpat lacus laoreet non curabitur gravida arcu ac. Quam lacus suspendisse faucibus interdum posuere lorem ipsum. Nibh venenatis cras sed felis eget velit aliquet sagittis id. Aenean sed adipiscing diam donec adipiscing tristique. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. Pharetra massa massa ultricies mi quis hendrerit. Dignissim cras tincidunt lobortis feugiat vivamus at augue. Ultrices gravida dictum fusce ut. Porttitor leo a diam sollicitudin tempor id eu nisl. Pretium vulputate sapien nec sagittis.

                            Velit dignissim sodales ut eu sem. Accumsan tortor posuere ac ut consequat semper viverra. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. Et pharetra pharetra massa massa. Elit ullamcorper dignissim cras tincidunt lobortis feugiat. Fames ac turpis egestas maecenas pharetra convallis posuere. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra. Orci a scelerisque purus semper eget duis at. Porttitor leo a diam sollicitudin tempor id eu nisl nunc. Dictum non consectetur a erat nam at.</p>

                    </div>

                </div>
            </div>
        )
    }
    _onReady(event) {
        event.target.playVideo()
    }
}


export default Video