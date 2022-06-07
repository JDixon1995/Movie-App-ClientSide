import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import MovieCard from './MovieCard'


const SearchPage = () => {
	const [movies, setMovies] = useState([])
  	const [searchTerm, setSearchTerm] = useState("")
  
  	const API_Key = '927281a6'

  	const getMovies = async () => {
    	const res = await axios({
      		method: 'GET',
      		url: "/api/movies"
    })
    	const data = await res.data
    	const dataArray = data.Search
    	setMovies(dataArray)
  }

  const searchMovies = async (e) => {
    e.preventDefault()
    try {
      const res = await axios({
        method: 'GET',
        url: `https://www.omdbapi.com/?s=${searchTerm}&apikey=${API_Key}&page=1`
      })
      const data = await res.data
      const dataArray = data.Search
      setMovies(dataArray)
      setSearchTerm('')
    } catch (error) {
      console.error(error)      
    }
  }

  const onChangeSetSearchTerm = (e) => {
    const setSearch = e.target.value
    setSearchTerm(setSearch)
  }

  useEffect(() => {
    getMovies()
  }, [])


  return (
	<>
	<div className="input-form">
		<Form className="form">
		<Form.Group className="mb-3">
	  	<Form.Control 
	 	placeholder="Input movie title here..."
	  	value={searchTerm}
	  	onChange={onChangeSetSearchTerm}
	  	></Form.Control>
		</Form.Group>
		<Button 
		variant="primary" 
		type="submit"
		onClick={searchMovies}
	 	>Submit</Button>
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
</>
  )
}
export default SearchPage