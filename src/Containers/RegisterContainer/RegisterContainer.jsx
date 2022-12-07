import React from 'react';
import {Row, Col } from 'react-bootstrap';
import Register from "../../Components/Register/Register";
import './RegisterContainer.scss'
const RegisterContainer = () => {
  return (
      <Row className='ContainerRegister'>
        <Col >
        </Col>
        <Col xs={10} sm={8} md={6} lg={5}>
          <Register />
        </Col>
        <Col />
      </Row>
  );
}
export default RegisterContainer;