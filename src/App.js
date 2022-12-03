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

function App() {
  let [pageNumber,setPageNumber]=useState(1);
  let [fetchedData,updateFetchData] = useState([]);
  

  //Info y results son parte del JSON que devuelve la api de rick y morty
  let {info,results}=fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;
  console.log(results);

  useEffect(()=>{
    //IIFE
    (async function(){
      let data= await fetch(api).then(res=>res.json())
      updateFetchData(data);
    })()

  },[api])
  
  return (
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
  );

  
} 




export default App;
