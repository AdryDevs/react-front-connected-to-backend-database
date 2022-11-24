import React from 'react';
import { Menu, Row, Col } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Navigate,useNavigate } from 'react-router-dom';
const Header = () => {

    const navigate=useNavigate();
    return(
        <Row>
  <Menu mode="horizontal" defaultSelectedKeys={['mail']}>
  <Col xs={3} sm={3} md={3} lg={3}>
    <Menu.Item >
    <Menu.Item className="headerWord" onClick={() => navigate("/login")}>Login</Menu.Item>
    </Menu.Item>
    </Col>
    <Col xs={3} sm={3} md={3} lg={3}>
    <Menu.Item >
    <Menu.Item className="headerWord" onClick={() => navigate("/register")}>Register</Menu.Item>
    </Menu.Item>
    </Col>
    <Col xs={3} sm={3} md={3} lg={3}>
    <Menu.Item >
    <Menu.Item className="headerWord" onClick={() => navigate("/movies")}>Movies</Menu.Item>
    </Menu.Item>
    </Col>
    <Col xs={3} sm={3} md={3} lg={3}>
    <Menu.Item >
    <Menu.Item className="headerWord" onClick={() => navigate("/series")}>Series</Menu.Item>
    </Menu.Item>
    </Col>
    {/* <Col xs={3} sm={3} md={3} lg={3}>
    <Menu.Item >
    <Menu.Item className="headerWord" onClick={() => navigate("/login")}>Login</Menu.Item>
    </Menu.Item>
    </Col> */}
    <Col xs={3} sm={3} md={3} lg={3}>
    <Menu.SubMenu key="SubMenu" title="User" icon={<SettingOutlined />}>
      <Menu.Item key="two" icon={<AppstoreOutlined />}>
        User
      </Menu.Item>
      
    </Menu.SubMenu>
    </Col>
  </Menu>
  </Row>
    )
    };
export default Header;