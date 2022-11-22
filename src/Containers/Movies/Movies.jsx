import React from 'react'
import { Card } from 'antd'
import "./Movies.scss";
import InfiniteScroll from "react-infinite-scroll-component";

const { Meta } = Card

const Movies = () => {
  return (
    <div className='moviesDesign'>
      <Card
        hoverable
        style={{ width: 230 }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>

      <Card
        hoverable
        style={{ width: 230 }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>

      <Card
        hoverable
        style={{ width: 230 }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    </div>
  )
}





export default Movies