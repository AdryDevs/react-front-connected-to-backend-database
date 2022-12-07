import React from "react";
import state from '../../state';
import axios from "axios";
import { useState } from 'react'

import './MovieDetail.scss'


const MovieDetail = ({ movie }) => {
    const token=localStorage.getItem('jwt');
    const [error,setError]=useState('');


   function createOrderHandler(){
    const body={
        title:movie.title,
        type:"movie"
    }
    const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      console.log("lol");
        axios.post("https://proyectobackendpeliculas-production.up.railway.app/orders/create", body,config)
        .then(response => {
            console.log("wtf");
            if (response.data.message=="You already have that item registered") {
                setError(response.data.message);
                console.log(error)
            }else{
                console.log("No error");
            }
            
        }).catch(error => {
            console.log(error);
            setError(error);

        });
    }


    return (
        <div>
            <div onClick={() => state.resetMovie()}>
                <h4 className="back">Back</h4>
            </div>
        <h1 className="texto">{movie.title}</h1>
        <img src={movie.url_img} />
        <p className="texto">{movie.synopsis}</p>
        <h3>{error}</h3>
        <button onClick={createOrderHandler}>Order</button>
        </div>
    );
    }



export default MovieDetail;