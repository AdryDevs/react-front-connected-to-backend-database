import './App.css';
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';


import {BrowserRouter, Route, Routes} from 'react-router-dom';

// 
// import Pelis from './Components';
// import Series from './Components';

// Import the component

import Home from './Containers/Home/Home';
import Header from './Components/Header/Header';
import Login from "./Containers/LoginContainer/LoginContainer";
import Register from "./Containers/RegisterContainer/RegisterContainer";
import Movies from "./Containers/Movies/Movies"
import { UserProvider } from './UserProvider';

function App() {

  return (

    <UserProvider>
    <Container fluid className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/movies" element={<Movies/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>     
    </Container>
    </UserProvider>
  );

  
} 




export default App;
