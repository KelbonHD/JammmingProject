import React, { useCallback } from "react";
import "./SearchBar.css";
import { useState } from "react";

function SearchBar(props) {
  const [searchKey, setSearchKey] = useState("");

  const commenceSearch = useCallback(() => {
    props.onSearch(searchKey);
  }, [props, searchKey]);

    return (
        <form id="search-bar" onSubmit={commenceSearch}>
            <label for="search">Search for Songs: </label><br/>
            <div className="searcharea">
            <input type="text" id="search" name="search" onChange={key => setSearchKey(key.target.value)}></input>
            <input type="submit" value="Search" id="searchbutton"></input>
            </div>
        </form>
    )
}

export default SearchBar;