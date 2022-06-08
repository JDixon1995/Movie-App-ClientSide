import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import NavBar from './NavBar'
import SearchPage from './SearchPage'



const App = () => {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;
