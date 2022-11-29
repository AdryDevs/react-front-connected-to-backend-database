import React from 'react';
import { Card } from 'react-bootstrap';

const API_IMG= "https://image.tmdb.org/t/p/w500/";

const MovieBox = ({movie}) => {
    return (
        <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src={API_IMG + movie.poster_path} />
        </Card>
    );
};

export default MovieBox;