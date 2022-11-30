import Login from '../../Components/Login/Login'
import {Row,Col} from 'react-bootstrap'

const LoginContainer = () =>{
    return (
        <Row>
            <Col/>
            <Col xs={10} sm={8} md={6} lg={3}>
                <Login/>
            </Col>
            <Col/>
        </Row>
  );
}
export default LoginContainer;