import React from 'react';
import { Card } from 'antd';
const API_IMG= "https://image.tmdb.org/t/p/w500/";

const MovieBox = ({movie}) => {
    return (
        <Card hoverable style={{width: 240,}}
        cover={<img alt="example" src={API_IMG + movie.poster_path} />}>
      </Card>
    );
};

export default MovieBox;