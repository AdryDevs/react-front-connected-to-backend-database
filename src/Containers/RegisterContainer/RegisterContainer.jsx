import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Register from "../../Components/Register/Register";
const RegisterContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col />
        <Col xs={10} sm={8} md={6} lg={5}>
          <Register />
        </Col>
        <Col />
      </Row>
    </Container>
  );
}
export default RegisterContainer;