import React from "react";
import state from '../../state';

import './MovieDetail.scss'


const MovieDetail = ({ movie }) => {
    return (
        <div>
            <div onClick={() => state.resetMovie()}>
                <h4 className="back">Back</h4>
            </div>
        <h1 className="texto">{movie.title}</h1>
        <img src={movie.url_img} />
        <p className="texto">{movie.synopsis}</p>
        </div>
    );
    }



export default MovieDetail;