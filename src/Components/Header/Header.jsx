import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavLink from 'react-bootstrap/esm/NavLink';
import { Row, Col } from 'react-bootstrap';
import './Header.scss'

function Header() {
  //HARDCODEAR JWT
  // let jwt="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBlbWFpbC5jb20iLCJjcmVhdGVkIjoxNjY5ODMyOTk0NDEwLCJpYXQiOjE2Njk4MzI5OTR9.WG6ZwhsqmLdEmxA_eK6RY3L5Gi7lKrcOKjGUCEn5WSs";
  // localStorage.setItem('jwt', JSON.stringify(jwt));

  if(localStorage.getItem('jwt')===""||localStorage.getItem('jwt')===null){
    return (
      <Row>
        <Navbar className='Navbar' expand="sm">
          <Container>
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
              <Col>
                  <Nav.Link href="/Movies">Movies</Nav.Link>
                </Col>
                <Col>
                  <Nav.Link href="/Series">Series</Nav.Link>
                </Col>
                <Col>
                  <Nav.Link href="/Login">Login</Nav.Link>
                </Col>
                <Col>
                  <Nav.Link href="/Register">Register</Nav.Link>
                </Col>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Row>
  
    )
  }else{
    return (
      <Row>
        <Navbar className='Navbar' expand="sm">
          <Container>
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Col>
                  <Nav.Link href="/Movies">Movies</Nav.Link>
                </Col>
                <Col>
                  <Nav.Link href="/Series">Series</Nav.Link>
                </Col>
                <Col>
                  <Nav.Link href="">Log Out</Nav.Link>
                </Col>
                <NavDropdown className='UserSettings' title="User" id="basic-nav-dropdown">
                  <NavDropdown.Item href="Settings">User Settings</NavDropdown.Item>
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

}

export default Header