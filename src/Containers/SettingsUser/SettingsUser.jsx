// import "./Settings.scss"
import React from 'react';
import { Button, Form, Input,DatePicker, Col, Row } from 'antd';
const Settings = () =>{
    const onFinish = (values) => {
        console.log('Success:', values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    return (
        <div className="principal">
<br />
<Row>
    <Col xs={1} sm={2} md={6} lg={7}></Col>
    <Col  xs={22} sm={20} md={12} lg={10}>
    <Form className="Settings-form"
      name="basic"
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
         <Form.Item
        label="Username"
        name="username"
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>
 <Form.Item
        label="Email"
        name="email"
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Date of Birth"
        name="birthdate"
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <DatePicker/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
            {
              pattern: /[?=.*[0-9]]*/,
              message: "Password must contain a number!"
            },
            {
              pattern: /[?=.*[a-z]]*/,
              message: "Password must contain at least 1 lower case!"
            },
            {
              pattern: /[?=.*[A-Z]]*/,
              message: "Password must contain at least 1 upper case!"
            },
            {
              pattern: /[[a-zA-Z0-9]{8,}]*/,
              message: "Password must contain at least 8 characters!"
            },
            
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Repeat Password"
        name="password2"
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please repeat your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </Col>

    <Col xs={1} sm={2} md={6} lg={7}></Col>

</Row>
    </div>
  );
}
export default Settings;