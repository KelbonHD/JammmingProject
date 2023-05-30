import React from "react";
import "./SearchBar.css"

function SearchBar() {
    return (
        <form id="search-bar">
            <label for="search">Search for Songs: </label><br/>
            <div class="searcharea">
            <input type="text" id="search" name="search"></input>
            <input type="submit" value="Search" id="searchbutton"></input>
            </div>
        </form>
    )
}

export default SearchBar;