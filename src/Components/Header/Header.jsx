import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Row, Col } from 'react-bootstrap';
import { useUserContext } from '../../UserProvider';
import { useJwt } from "react-jwt";
import './Header.scss'

function Header() {

  const user = useUserContext();
  const token = localStorage.getItem('jwt');
  const { decodedToken, isExpired } = useJwt(token);
  let username='';
  let isAdmin=false;
  if (decodedToken) {
       username=decodedToken.username;
      if (decodedToken.role===1) {
        isAdmin=true;
      }
  }


  function logOutHandler() {
    localStorage.removeItem("jwt");
  }
  if (decodedToken&&!!isExpired) {
    if (isAdmin===true) {
      return (
        <Row>
          <Navbar className='Navbar' expand="sm">
            <Container className='contnav' >
            <Navbar.Brand className='words1' href="/">Home</Navbar.Brand>
              <Navbar.Toggle className="collapse" aria-controls="basic-navbar-nav" />
              <Navbar.Collapse  id="basic-navbar-nav">
                <Nav  className="me-auto">
                  <Col lg={4}>
                    <Nav.Link className='words1'  href="/Movies">Movies</Nav.Link>
                  </Col>
                  <Col lg={4}>
                    <Nav.Link className='words1' href="/Series">Series</Nav.Link>
                  </Col>
                  <Col lg={4}>
                    <Nav.Link className='words1' href="/" onClick={logOutHandler}>Log Out</Nav.Link>
                  </Col>
                  <Col/>
                  <Col lg={4}>
                  <NavDropdown className='UserSettings' title={username} id="basic-nav-dropdown">
                    <NavDropdown.Item href="Settings">Account Settings</NavDropdown.Item>
                    <NavDropdown.Item href="/orders">
                      All Orders
                    </NavDropdown.Item>
                  </NavDropdown>
                  </Col>

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
            <Navbar.Brand className='words1' href="/">Home</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Col lg={4}>
                    <Nav.Link className='words1' href="/Movies">Movies</Nav.Link>
                  </Col>
                  <Col lg={4}>
                    <Nav.Link className='words1' href="/Series">Series</Nav.Link>
                  </Col>
                  <Col lg={4}>
                    <Nav.Link className='words1 logout' href="/" onClick={logOutHandler}>Log Out</Nav.Link>
                  </Col>
                  <NavDropdown className='UserSettings' title={username} id="basic-nav-dropdown">
                    <NavDropdown.Item href="Settings">Account Settings</NavDropdown.Item>
                    <NavDropdown.Item href="/orders">
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
            <Navbar.Brand className='words1' href="/">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Col>
                  <Nav.Link className='words1' href="/Movies">Movies</Nav.Link>
                </Col>
                <Col>
                  <Nav.Link className='words1' href="/Series">Series</Nav.Link>
                </Col>
                <Col>
                  <Nav.Link className='words1' href="/Login">Login</Nav.Link>
                </Col>
                <Col>
                  <Nav.Link className='words1' href="/Register">Register</Nav.Link>
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