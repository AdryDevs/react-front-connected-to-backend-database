import React from 'react'
import './Home.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';


function UncontrolledExample() {
  return (
    <Container className='Fondo' fluid>
      <Row className='Texto Fila'>

        <Col> 
          <div className='divtext' >
            Are your redy for the beast series in the world?<br />
            Disfruta de un mundo lleno de<br />
            posibilidades y
            aventuras en<br />
            film FRESAS<br />

          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default UncontrolledExample;

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