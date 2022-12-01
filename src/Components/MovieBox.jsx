import React from 'react';
import { Card } from 'antd';

const MovieBox = ({movie}) => {
    return (
        <Card hoverable style={{width: 240,height: 370}}
        cover={<img alt="movie_poster" src={movie.url_img} />}>
      </Card>
    );
};

export default MovieBox;