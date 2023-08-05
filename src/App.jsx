import "./App.css"
import React, { useEffect, useState } from "react";
import Card from "./components/Card";

// api key 168b51ac

const API_URL = "https://www.omdbapi.com?apikey=168b51ac";

const App = () => {
  const [movies, setMovies] = useState([])
  const [movieName, setMovieName] = useState("")

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search)
  };

  useEffect(() => {
    searchMovies("spider man");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault()
    searchMovies(movieName)
  }

  const displayCards = movies.map(movie => {
    return <Card key={movie.imdbID} title={movie.Title} year={movie.Year} poster={movie.Poster} />
  })

  return (
    <div className="app">
      <div className="ui container">
        <h1>Movie World</h1>
        <form className="ui fluid icon input searchbar" onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Search..."
            value={movieName}
            onChange={(e) => setMovieName(e.target.value)}
          />
          <i className="search icon"></i>
        </form>
      <div className="ui four cards">
          {displayCards}
      </div>
      </div>
    </div>
  );
};

export default App;
