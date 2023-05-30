import React from "react";
import "./Tracklist.css"
import Track from "./Track";

function Tracklist() {
    return (
        <div className="track-list">
            <Track/>
            <Track/>
            <Track/>
            <Track/>
            <Track/>
        </div>
    )
}

export default Tracklist;