import "./Login.scss"
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({});
    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value
        })
    }

    const handleSubmit = (e) => {
        let resp = "";
        e.preventDefault()
        console.log(form);
        axios.post("http://localhost:3002/auth/login", form)
            .then(response => {
                console.log(response);
                resp = response;
                if (resp !== "") {
                    localStorage.setItem('jwt', JSON.stringify(resp.data.jwt));
                    navigate("/");
                }
                else {
                    console.log("No se ha guardado el token");
                }
            });

    }

    return (
        <Form>
            <Form.Group controlId='email'>
                <Form.Label>Username</Form.Label>
                <Form.Control
                    placeholder='Enter username'
                    value={form.username}
                    onChange={(e) => setField('email', e.target.value)}
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