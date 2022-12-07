import React from 'react';
import { Card } from 'antd';
import state from '../state';

const SerieBox = ({serie}) => {

    return (
        <Card hoverable style={{width: 240,height: 365,margin:10}}
        cover={<img alt="serie_poster" src={serie.url_img} />}
        onClick={() => state.setSerie(serie)}>
      </Card>
    );
};

export default SerieBox;