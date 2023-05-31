import React from "react";
import "./SearchResults.css";
import Tracklist from "./Tracklist";
import SearchBar from "./SearchBar";
import add from "../resources/addButtonImg.svg"

function SearchResults(props) {
    const renderTracks = () => {
        return props.tracks.map(track => {
            <div className="track" key={track.id}>
                <p className="title">{track.name}</p><br/>
                <p className="artist">{track.artist}</p>
                <button type="button"><img src={add} alt="add" class="move-button" /></button>
            </div>
        })
    }
    return (
        <div className="search-results">
            <h2>Results:</h2>
            {renderTracks()}
        </div>
    )
}

export default SearchResults;