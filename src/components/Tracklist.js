import React from "react";
import "./Tracklist.css"
import Track from "./Track";

function Tracklist(props) {
    return (
        <div className="tracklist">
            {props.tracks.map(track => 
                <Track
                track={track}
                key={track.id}
                onAdd={props.onAdd}
                onRemove={props.onRemove}
                isRemovable={props.IsARemoval}/>
                )}
        </div>
    )
}

export default Tracklist;