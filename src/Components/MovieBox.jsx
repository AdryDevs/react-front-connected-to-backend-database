import React from 'react';
import { Card } from 'antd';

import state from '../state';



const MovieBox = ({movie}) => {

    return (
        <Card hoverable style={{width: 240,height: 365,margin:10}}
        cover={<img alt="movie_poster" src={movie.url_img} />}
        onClick={() => state.setMovie(movie)}>
        </Card>
    );
};

export default MovieBox;