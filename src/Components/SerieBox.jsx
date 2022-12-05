import React from 'react';
import { Card } from 'antd';
import { useNavigate } from "react-router-dom";

const SerieBox = ({serie}) => {
  
  const navigate = useNavigate();

    return (
        <Card hoverable style={{width: 240,height: 365}}
        cover={<img alt="serie_poster" src={serie.url_img} />}
        onClick={() => navigate(`/series/${serie.title}`)}>
        
      </Card>
    );
};

export default SerieBox;