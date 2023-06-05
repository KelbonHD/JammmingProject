import React, { useCallback } from "react";
import "./SearchBar.css";
import { useState } from "react";

function SearchBar(props) {

  const commenceSearch = useCallback((e) => {
    e.preventDefault();
    props.onSearch(props.searchKey);
  }, [props.onSearch]);

    return (
        <form id="search-bar" onSubmit={commenceSearch}>
            <label htmlFor="search">Search for Songs: </label><br/>
            <div className="searcharea">
            <input type="text" id="search" name="search" onChange={key => props.changeSearchKey(key.target.value)}></input>
            <input type="submit" value="Search" id="searchbutton"></input>
            </div>
        </form>
    )
}

export default SearchBar;