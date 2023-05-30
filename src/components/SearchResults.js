import React from "react";
import "./SearchResults.css";
import Tracklist from "./Tracklist";

function SearchResults() {
    return (
        <div className="search-results">
            <h2>Results:</h2>
            <Tracklist/>
        </div>
    )
}

export default SearchResults;