import './App.css';
import { useCallback, useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import Playlist from './components/Playlist';
import SearchResults from './components/SearchResults';
import axios from 'axios';

const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
const REDIRECT_URI = "http://localhost:3000"
const CLIENT_ID = "22cf78209a27433e89cb6753557e2a73";
const RESPONSE_TYPE = "token";

function App() {
  const [token, setToken] = useState('');
  const [tracks, setTracks] = useState([])
  const [playlistName, setPlaylistName] = useState('New Playlist')
  const [playlistTracks, setPlaylistTracks] = useState([])
  const [searchKey, setSearchKey] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
  const hash = window.location.hash;
  let token = window.localStorage.getItem('token')

  if(!token && hash) {
    token = hash.substring(1).split('&').find(elem => elem.startsWith('access_token')).split('=')[1]

    window.location.hash = '';
    window.localStorage.setItem('token', token);
  }

  setToken(token)
  
}, []);

const logout = () => {
  setToken('')
  window.localStorage.removeItem('token')
};

const changeSearchKey = useCallback((newKey) => {
  setSearchKey(newKey)
})

const searchTracks = async(event) => {
  const {data} = await axios.get("https://api.spotify.com/v1/search", {
    headers: {
      Authorization: `Bearer ${token}`
    },
    params: {
      q: searchKey,
      type: "track"
    }
  })
  let tracks = data.tracks.items
  setTracks(tracks)
  console.log(tracks)
}

const changeName = useCallback((name) => {
  setPlaylistName(name);
}, [])

const addTrack = useCallback((newTrack) => {
  if (playlistTracks.some((track) => track.id === newTrack.id)) {
    return;
  }
  setPlaylistTracks(oldPlaylist => [...oldPlaylist, newTrack])
}, [playlistTracks])

const removeTrack = useCallback((trackToRemove) => {
  setPlaylistTracks((oldPlaylist) => oldPlaylist.filter((existingTrack) => existingTrack.id !== trackToRemove.id))
}, [])

const createPlaylist = async(newId) => {
  console.log(newId)
  var data = {
      "name": playlistName,
      "description": "Playlist created from Kelton's Jammming Web App"
  }
  var headers = {
    "Authorization": "Bearer " + token,
    "Content-Type": `application/json`
  }
  console.log(headers["Authorization"])
  return await axios.post(`https://api.spotify.com/v1/users/${newId}/playlists`,data,headers)
  .then((data) => {
    console.log("playlist created")
    savePlaylist(data.id);
  })
  .catch((err) => {
    console.log(`Something went wrong creating the playlist: ${err}`)
  })
}

const getUserProfile = async() => {
  const {data} = await axios.get("https://api.spotify.com/v1/me", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  console.log(data.id)
  console.log(token)
  let newId = data.id;
  setUserId(newId)
  console.log(userId)
  createPlaylist(newId)
}

const savePlaylist = async(event, playlistId) => {
  let tracksToSubmit = playlistTracks.map(track => track.uri)
  console.log(playlistTracks)
  console.log(playlistId)
  await axios.post(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
    headers: {
      Authorization: `Bearer ${token}`
    },
    params: {
      uris: tracksToSubmit,
    }
  })
  .then(() => {
    console.log("playlist saved")
    window.alert("Your playlist has been saved.")
  })
  .catch((err) => {
    console.log(`Something went wrong saving the playlist: ${err}`)
  })
}

  return (
    <div className="App">
      <header className="App-header">
          <h1 id="title">Ja<span>mmm</span>ing</h1>
          <nav>
            {!token ? 
            <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=playlist-modify-public`}>Login to Spotify</a>
            :   <button className="logout" onClick={logout}>Logout</button>
            }
          </nav>
      </header>
      <main>
          <div className="searchbar" id="searchbar">
            <SearchBar token={token} onSearch={searchTracks} searchKey={searchKey} changeSearchKey={changeSearchKey}/>
          </div>
          <div className="sections">
          <section className="section search-results" id="search-results">
            <SearchResults SearchResults={tracks} onAdd={addTrack}/>
          </section>
          <span className="mid"></span>
          <section className="section playlist" id="playlist">
            <Playlist 
            token={token} 
            playlistTracks={playlistTracks}
            playlistName={playlistName}
            onNameChange={changeName}
            onRemove={removeTrack}
            onSave={getUserProfile}/>
          </section>
          </div>
      </main>
    </div>
  );
}

export default App;
