import React from "react";
import "./SearchBar.css";
import { useState } from "react";
import axios from "axios";
import add from "../resources/addButtonImg.svg"
import SearchResults from "./SearchResults";

function SearchBar({token, searchObtainer}) {
    const [searchKey, setSearchKey] = useState("")
    let tracks = ""
    const searchTracks = async(event) => {
        event.preventDefault()
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
          headers: {
            Authorization: `Bearer ${token}`
          },
          params: {
            q: searchKey,
            type: "track"
          }
        })
        tracks = data.tracks.items
        searchObtainer(tracks)
      }
    return (
        <form id="search-bar" onSubmit={searchTracks}>
            <label for="search">Search for Songs: </label><br/>
            <div class="searcharea">
            <input type="text" id="search" name="search" onChange={key => setSearchKey(key.target.value)}></input>
            <input type="submit" value="Search" id="searchbutton"></input>
            <p>{tracks.name}</p>
            </div>
        </form>
    )
}

export default SearchBar;