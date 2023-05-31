import React from "react";
import "./Playlist.css"
import cancel from "../resources/cancelButtonImg.svg"
import axios from "axios";

function Playlist({token, playlistTrack}) {
    return (
        <div>
        <h2>Playlist</h2>
            <div className="track">
                <div>
                <p className="title">Title</p><br/>
                <p className="artist">Artist</p>
                </div>
                <button type="button"><img src={cancel} alt="cancel" class="move-button" /></button>
            </div>
        </div>  
    )
}

export default Playlist;