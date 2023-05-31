import React from "react";
import "./SearchBar.css";
import { useState } from "react";
import axios from "axios";
import add from "../resources/addButtonImg.svg"

function SearchBar(props) {
    const [searchKey, setSearchKey] = useState("")
    const [tracks, setTracks] = useState([])

    const searchTracks = async(event) => {
        event.preventDefault()
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
          headers: {
            Authorization: `Bearer ${props.token}`
          },
          params: {
            q: searchKey,
            type: "track"
          }
        })
        setTracks(data.tracks.items)
      }

      const renderTracks = () => {
        return tracks.map(track => (
            <div className="track" key={track.id}>
                <p className="title">{track.name}</p><br/>
                <p className="artist">{track.artist}</p>
                <button type="button"><img src={add} alt="add" class="move-button" /></button>
            </div>
        ))
    }
    return (
        <form id="search-bar" onSubmit={searchTracks}>
            <label for="search">Search for Songs: </label><br/>
            <div class="searcharea">
            <input type="text" id="search" name="search" onChange={key => setSearchKey(key.target.value)}></input>
            <input type="submit" value="Search" id="searchbutton" onClick={() => props.searchObtainer(tracks)}></input>
            <p>{tracks.name}</p>
            </div>
            <p>{renderTracks()}</p>
        </form>
    )
}

export default SearchBar;