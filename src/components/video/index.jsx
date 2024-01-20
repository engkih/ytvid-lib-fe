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
                <div className="m-5 p-5 border h-full">
                <div className="m-auto">
                    <Youtube videoId="_4hCcyRCqtk" option={option} onReady={this._onReady} id="video"
                        className="m-auto" />
                </div>
                </div>
                <div className="mt-auto m-5 p-5 border">
                    <h2 className="text-left pb-5">Full Sound BR 101 - Raketenstart am Ostbahnhof [4K 60 FPS]</h2>
                    <div className="max-h-96">
                        <p className="text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet non curabitur gravida arcu ac. Non enim praesent elementum facilisis leo. Enim eu turpis egestas pretium aenean pharetra magna ac placerat. Neque laoreet suspendisse interdum consectetur libero. Porta lorem mollis aliquam ut porttitor. Sed enim ut sem viverra aliquet eget sit amet tellus. Purus gravida quis blandit turpis. Orci sagittis eu volutpat odio facilisis. Porttitor leo a diam sollicitudin tempor id eu nisl nunc. Aliquam sem et tortor consequat id porta nibh. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Id donec ultrices tincidunt arcu non sodales neque sodales. Placerat duis ultricies lacus sed turpis tincidunt id.</p>

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