import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavLink from 'react-bootstrap/esm/NavLink';
import { Row, Col } from 'react-bootstrap';
import './Header.scss'

function Header() {
  return (
    <Row>

      <Navbar className='Navbar' expand="sm">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Col>
                <Nav.Link href="/Login">Login</Nav.Link>
              </Col>
              <Col>
                <Nav.Link href="/Register">Register</Nav.Link>
              </Col>
              <Col>
                <Nav.Link href="/Movies">Movies</Nav.Link>
              </Col>
              <Col>
                <Nav.Link href="/Series">Series</Nav.Link>
              </Col>
              <NavDropdown className='UserSettings' title="User" id="basic-nav-dropdown">
                <NavDropdown.Item href="Settings">Settings</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>

  );
}

export default Header