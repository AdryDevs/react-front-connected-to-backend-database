import './App.css';
import React, { useState, useEffect } from "react";
import Login from "./Containers/Login/Login"

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
      <Login/>
    </div>
  );
}

export default App;
