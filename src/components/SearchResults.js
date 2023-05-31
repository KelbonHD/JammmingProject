import React from "react";
import "./SearchResults.css";
import add from "../resources/addButtonImg.svg"

function SearchResults({tracks, addToPlaylist}) {
    const renderTracks = () => {
        tracks = Array.from(tracks)
        return tracks.map(track => (
            <div className="track" key={track.id}>
                <div>
                <p className="title">{track.name}</p><br/>
                <p className="artist">{track.artists.map(artist => (artist.name))}</p>
                </div>
                <button type="button"><img src={add} alt="add" class="move-button" id={track.id} onClick={e => addToPlaylist(e.target.id)}/></button>
            </div>
        ))
    }
    return (
        <div className="search-results">
            <h2>Results:</h2>
            {renderTracks()}
        </div>
    )
}

export default SearchResults;