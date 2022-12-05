import Login from '../../Components/Login/Login'
import {Row,Col} from 'react-bootstrap'
import './LoginContainer.scss'

const LoginContainer = () =>{
    return (
        <Row className='containerlogin'>
            <Col/>
            <Col xs={10} sm={8} md={6} lg={4}>
                <Login/>
            </Col>
            <Col/>
        </Row>
  );
}
export default LoginContainer;