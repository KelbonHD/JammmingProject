import React from "react";
import "./Track.css"
import add from '../resources/addButtonImg.svg';

function Track(){
    return (
        
        <div className="track">
            <p className="title">Title</p><br/>
            <p className="artist">Artist</p>
            <button type="button"><img src={add} alt="add" class="move-button" /></button>
        </div>
    )
}

export default Track;