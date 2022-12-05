import React from 'react'
import './Home.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
  return (
    <Container className='Fondo' fluid>
      <Row className='Texto Fila'>

        <Col> 
          <div className='divtext' >
          <br/><br/><br/>
            <h2 className='text1'>Welcome to our Rental!</h2><br/>
            <h4 className='text2'>We have the best movies and series for you!</h4>
            <br/><br/><br/><br/>
            <h4>If you have an account with us, go to the login section. If you don't, feel free to register</h4>

          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;