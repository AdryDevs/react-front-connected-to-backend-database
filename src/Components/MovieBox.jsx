import React from 'react';
import { Card } from 'antd';
import { useNavigate } from "react-router-dom";



const MovieBox = ({movie}) => {

  const navigate = useNavigate();

    return (
        <Card hoverable style={{width: 240,height: 365,margin:10}}
        cover={<img alt="movie_poster" src={movie.url_img} />}
        onClick={() => navigate(`/movies/${movie.title}`)}>
        </Card>
    );
};

export default MovieBox;