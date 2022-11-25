import React from 'react';

const API_IMG= "https://image.tmdb.org/t/p/w500/";

const MovieBox = ({poster_path}) => {
    return (
        <div>
            <img src={API_IMG+poster_path}></img>
        </div>
    );
};

export default MovieBox;