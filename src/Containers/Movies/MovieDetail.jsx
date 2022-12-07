import React from "react";
import state from '../../state';


const MovieDetail = ({ movie }) => {
    return (
        <div>
            <div onClick={() => state.resetMovie()}>
                <h4>Back</h4>
            </div>
        <h1>{movie.title}</h1>
        <img src={movie.url_img} />
        <p>{movie.synopsis}</p>
        </div>
    );
    }



export default MovieDetail;