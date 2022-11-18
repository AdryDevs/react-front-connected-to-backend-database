import React from 'react'
import { Carousel } from 'antd';
import './Home.scss'

const contentStyle = {
    margin: 0,
    height: '90vh',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#000000',
  };

const Home = () => {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
      };
      return (

        <Carousel afterChange={onChange}>
          <div className='homeDesign'>
            <h3 style={contentStyle}>Picture1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>Picture2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>Picture3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>Picture4</h3>
          </div>
        </Carousel>

      );
    };

export default Home