import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Row, Col } from 'react-bootstrap';
import Image from "react-bootstrap/Image";
import { useUserContext } from '../../UserProvider';
import './Header.scss'

function Header() {
  //HARDCODEAR JWT
  // let jwt="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBlbWFpbC5jb20iLCJjcmVhdGVkIjoxNjY5ODMyOTk0NDEwLCJpYXQiOjE2Njk4MzI5OTR9.WG6ZwhsqmLdEmxA_eK6RY3L5Gi7lKrcOKjGUCEn5WSs";
  // localStorage.setItem('jwt', JSON.stringify(jwt));
  const user = useUserContext();
  const token = localStorage.getItem('jwt');
  const username = localStorage.getItem('username'.toString());
  const isAdmin = localStorage.getItem('isAdmin');

  console.log(user)
  function logOutHandler() {
    localStorage.removeItem("jwt")
  }
  console.log("TOKEEEEEEEEN::::" + token);
  if (token) {
    if (isAdmin) {
      return (
        <Row>
          <Navbar className='Navbar' expand="sm">
            <Container>
              <Navbar.Brand href="/">
              <Image className="logoImage zoomLogo" src={"../../logo.svg"}></Image>
  
              </Navbar.Brand>
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
                    <Nav.Link href="/" onClick={logOutHandler}>Log Out</Nav.Link>
                  </Col>
                  <NavDropdown className='UserSettings' title={username} id="basic-nav-dropdown">
                    <NavDropdown.Item href="Settings">Account Settings</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      All Orders
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Row>
      );
    }else{
      return (
        <Row>
          <Navbar className='Navbar' expand="sm">
            <Container>
              <Navbar.Brand href="/">
              <Image className="logoImage zoomLogo" src={"../../logo.svg"}></Image>
  
              </Navbar.Brand>
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
                    <Nav.Link href="/" onClick={logOutHandler}>Log Out</Nav.Link>
                  </Col>
                  <NavDropdown className='UserSettings' title={username} id="basic-nav-dropdown">
                    <NavDropdown.Item href="Settings">Account Settings</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Orders
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Row>
      );
    }
  } else {
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
  }
}

export default Header