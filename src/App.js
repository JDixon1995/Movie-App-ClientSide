import React from 'react'
import { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios'
import MovieCard from './MovieCard'

const App = () => {

  const [movies, setMovies] = useState([])

  const getMovies = async () => {
    const res = await axios({
      method: 'GET',
      url: "/api/movies"
    })
    const data = await res.data
    const dataArray = data.Search
    setMovies(dataArray)
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <div className="App">
      <div className="container">
      {movies.length > 0 ?
      (movies.map(movie => (
      <MovieCard key={movie.imdbID} movie={movie}></MovieCard>
      ))) 
        :
     ("There are no movies.")}
      </div>
    </div>
  );
}

export default App;
