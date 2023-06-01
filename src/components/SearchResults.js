import React from "react";
import "./SearchResults.css";
import Tracklist from "./Tracklist";

function SearchResults(props) {
    /*const renderTracks = () => {
        tracks = Array.from(tracks)
        tracks.map(track => trackIds.push(track.id))
        return tracks.map(track => (
            <div className="track" key={track.id}>
                <div>
                <p className="title">{track.name}</p><br/>
                <p className="artist">{track.artists.map(artist => (artist.name))}</p>
                <p className="track-id">{track.id}</p>
                </div>
            </div>
        ))
    }*/

    return (
        <div className="search-results">
            <h2>Results:</h2>
            <Tracklist
            tracks={props.SearchResults}
            onAdd={props.onAdd}
            />
        </div>
    )
}

export default SearchResults;