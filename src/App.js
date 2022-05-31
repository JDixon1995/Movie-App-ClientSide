import React from 'react'
import { useState, useEffect } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import MovieCard from './MovieCard'


const App = () => {

  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  const getMovies = async () => {
    const res = await axios({
      method: 'GET',
      url: "/api/movies"
    })
    const data = await res.data
    const dataArray = data.Search
    setMovies(dataArray)
  }

  const searchMovies = async () => {
    const searchQuery = searchTerm
    const res = await axios({
      method: 'GET',
      url: `/api/movies/search?q=${searchQuery}`
    })
  }

  const onChangeSetSearchTerm = (e) => {
    const setSearch = e.target.value
    setSearchTerm(setSearch)
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <div className="App">
      <div className="input-form">
      <Form className="form">
			<Form.Group className="mb-3">
				<Form.Control 
        placeholder="Input movie title here..."
        value={searchTerm}
        onChange={onChangeSetSearchTerm}
        ></Form.Control>
			</Form.Group>
		</Form>
      </div>
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
