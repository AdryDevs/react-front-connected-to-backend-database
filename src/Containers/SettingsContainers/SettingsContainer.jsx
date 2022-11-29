import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SettingsUserComponent from '../../Components/SettingsUser/SettingsUser';

const SettingsUser = () => {
  return (
    <Container fluid className='Principal'>
      <Row>
        <Col />
        <Col xs={10} sm={8} md={6} lg={5}>
          <SettingsUserComponent />
        </Col>
        <Col />
      </Row>
    </Container>
  );
}
export default SettingsUser;