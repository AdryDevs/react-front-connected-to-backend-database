import axios from "axios";
import React, { useState } from "react";
import state from '../../state';

const SerieDetail = ({ serie }) => {
    const token=localStorage.getItem('jwt');
    const [error,setError]=useState('');


   function createOrderHandler(){
    const body={
        title:serie.title,
        type:"serie"
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
            <div onClick={() => state.resetSerie()}>
                <h4>Back</h4>
            </div>
        <h1>{serie.title}</h1>
        <img src={serie.url_img} />
        <h3>{error}</h3>
        <button onClick={createOrderHandler}>Order</button>
        <p>{serie.synopsis}</p>
        </div>
    );
    }

export default SerieDetail;