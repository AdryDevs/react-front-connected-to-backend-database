import React from 'react'
import './Home.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
  return (
    <Row className='Fila'>
      <Col xs={10} sm={7} md={6} lg={5}> 
          <div className='divtext' >
          <br/><br/><br/>
            <h2>Welcome to our Rental!</h2><br/>
            <h4>We have the best movies and series for you!</h4>
            <br/><br/><br/><br/>
            <h4>If you have an account with us, go to the <a href='/login'>login</a> section. If you don't, feel free to <a href='/login'>register</a></h4>

          </div>
        </Col>
      </Row>
  );
}

export default Home;