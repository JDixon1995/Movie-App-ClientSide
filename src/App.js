import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import NavBar from './NavBar'
import SearchPage from './SearchPage'
import TypeList from './TypeList';



const App = () => {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/types" element={<TypeList />} />
      </Routes>
    </div>
  );
}

export default App;
