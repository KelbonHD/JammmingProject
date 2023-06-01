import React, { useCallback } from "react";
import "./Track.css"
import cancel from "../resources/cancelButtonImg.svg"
import add from "../resources/addButtonImg.svg"
import { render } from "@testing-library/react";

function Track(props){
    const addTrack = useCallback((event) => {
        props.onAdd(props.track)
    }, [props]);
    
    const removeTrack = useCallback((event) => {
        props.onRemove(props.track)
    }, [props]);

    const renderAddOrRemove = () => {
        if(props.isRemovable) {
            return (
                <button type="button"><img src={cancel} alt="cancel" className="move-button cancel"/></button>
            )
        }
        return (
            <button type="button"><img src={add} alt="add" className="move-button add"/></button>
        )
    }

    return (
        <div className="track" key={props.track.id}>
                <div>
                <p className="title">{props.track.name}</p><br/>
                <p className="artist">{props.track.artists.map(artist => (artist.name))}</p>
                <p className="track-id">{props.track.id}</p>
                </div>
                {renderAddOrRemove}
            </div>
    )
}

export default Track;