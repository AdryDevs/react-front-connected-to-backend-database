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

