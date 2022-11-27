import "./Login.scss"
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Login = () =>{
  const [form, setForm] = useState({});
  const setField = (field, value) => {
    setForm({
        ...form,
        [field]: value
    })
}

const handleSubmit = (e) => {
  e.preventDefault()
  console.log(form);
}

    return (
<Form>
            <Form.Group controlId='username'>
                <Form.Label>Username</Form.Label>
                <Form.Control
                    placeholder='Enter username'
                    value={form.username}
                    onChange={(e) => setField('username', e.target.value)}
                >
                </Form.Control>
            </Form.Group>

            <Form.Group controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type='password'
                    placeholder='Enter your password'
                    value={form.password}
                    onChange={(e) => setField('password', e.target.value)}
                >
                </Form.Control>
            </Form.Group>
            <Form.Group controlId='submit'>
                <Button type='submit'
                    onClick={handleSubmit} >
                    Submit
                </Button>
            </Form.Group>
        </Form>
  );
}
export default Login;