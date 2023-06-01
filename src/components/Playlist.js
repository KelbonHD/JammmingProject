import React, { useCallback } from "react";
import "./Playlist.css"
import Tracklist from "./Tracklist";


function Playlist(props) {
    const handleNameChange = useCallback(
        (event) => {
        props.onNameChange(event.target.value);
    }, 
        [props]
    );
    const renderTracks = () => {
        let playlistTracks = Array.from(props.playlistTracks)
        return (
            <Tracklist
            tracks={playlistTracks}
            isRemovable={true}
            onRemove={props.onRemove}
            />
        )
    }
    return (
        <div className="playlist">
        <input onChange={handleNameChange} defaultValue="New Playlist"/>
        {renderTracks()}
        </div>
    )
}

export default Playlist;