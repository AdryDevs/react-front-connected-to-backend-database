import './App.css';
import React, { useState, useEffect } from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';



// 
// import Register from './Components';
// import Pelis from './Components';
// import Series from './Components';

// Import the component

import Home from './Containers/Home/Home';
import Header from './Components/Header/Header';
import Login from "./Containers/Login/Login"
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
