import './App.css';
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';



// 
// import Pelis from './Components';
// import Series from './Components';

// Import the component

import Home from './Containers/Home/Home';
import Header from './Components/Header/Header';
import Login from "./Containers/Login/Login"
import Movies from "./Containers/Movies/Movies";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <BrowserRouter>

        <Header/>

        <Routes>
          
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/movies" element={<Movies/>}/>
        
        </Routes>

      </BrowserRouter>     

    </div>
  );
}

export default App;
