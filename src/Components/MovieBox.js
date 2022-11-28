import React from 'react';
import { Card } from 'react-bootstrap';

const API_IMG= "https://image.tmdb.org/t/p/w500/";

const MovieBox = ({poster_path}) => {
    return (
            <Card style={{ width: '16rem' }}>
                <Card.Img variant="top" src={API_IMG + poster_path} />
            </Card>
    );
};

export default MovieBox;