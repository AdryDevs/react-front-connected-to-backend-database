import "./Register.scss"
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RegisterScreen from "../../Components/RegisterScreen/RegisterScreen";
const Register = () => {
  return (
    <Container fluid>
      <Row>
        <Col />
        <Col xs={10} sm={8} md={6} lg={5}>
          <RegisterScreen />
        </Col>
        <Col />
      </Row>
    </Container>
  );
}
export default Register;