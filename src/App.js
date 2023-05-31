import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import Playlist from './components/Playlist';
import SearchResults from './components/SearchResults';

const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
const REDIRECT_URI = "http://localhost:3000"
const CLIENT_ID = "22cf78209a27433e89cb6753557e2a73";
const RESPONSE_TYPE = "token";

function App() {
  const [token, setToken] = useState('');

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

const [tracks, setTracks] = useState([])
const searchObtainer = (data) => {
  setTracks(data)
}

  return (
    <div className="App">
      <header className="App-header">
          <h1 id="title">Ja<span>mmm</span>ing</h1>
          <nav>
            {!token ? 
            <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
            :   <button class="logout" onClick={logout}>Logout</button>
            }
          </nav>
      </header>
      <main>
          <div className="searchbar" id="searchbar">
            <SearchBar token={token} searchObtainer={searchObtainer}/>
          </div>
          <div className="sections">
          <section className="section search-results" id="search-results">
            <SearchResults tracks={tracks}/>
          </section>
          <span className="mid"></span>
          <section className="section playlist" id="playlist">
            <Playlist/>
          </section>
          </div>
      </main>
    </div>
  );
}

export default App;
