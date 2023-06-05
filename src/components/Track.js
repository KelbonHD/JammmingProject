import React, { useCallback } from "react";
import "./Track.css"
import cancel from "../resources/cancelButtonImg.png"
import add from "../resources/addButtonImg.png"

function Track(props){
    const addTrack = useCallback((event) => {
        props.onAdd(props.track)
    }, [props.onAdd]);
    
    const removeTrack = useCallback((event) => {
        props.onRemove(props.track)
    }, [props.onRemove]);

    const renderAddOrRemove = () => {
        if(props.isRemovable) {
            return (
                <button type="button" className="move-button"><img src={cancel} alt="cancel" className="move-image cancel" onClick={() =>removeTrack()}/></button>
            )
        }
        return (
            <button type="button" className="move-button"><img src={add} alt="add" className="move-image add" onClick={() => addTrack()}/></button>
        )
    }

    return (
        <div className="track" key={props.track.id}>
                <div>
                <p className="title">{props.track.name}</p><br/>
                <p className="artist">{props.track.artists.map(artist => (artist.name))}</p>
                <p className="track-id">{props.track.id}</p>
                </div>
                <audio controls>
                    <source src={props.track.preview_url}></source>
                </audio>
                {renderAddOrRemove()}
            </div>
    )
}

export default Track;