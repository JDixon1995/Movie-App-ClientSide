import React from 'react'
import { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios'
import { set } from 'express/lib/application';

const App = () => {

  const [movies, setMovies] = useState([])

  const getMovies = async () => {
    const res = await axios({
      method: 'GET',
      url: "/api/movies"
    })
    const data = await res.data
    const dataArray = data.Search
    dataArray.map((title) => {
      console.log(title)
    })
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <div className="App">
     <h1>App</h1>
    </div>
  );
}

export default App;
