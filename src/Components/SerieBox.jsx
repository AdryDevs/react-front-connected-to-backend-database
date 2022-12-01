import React from 'react';
import { Card } from 'antd';

const SerieBox = ({serie}) => {
    return (
        <Card hoverable style={{width: 240,}}
        cover={<img alt="serie_poster" src={serie.url_img} />}>
      </Card>
    );
};

export default SerieBox;