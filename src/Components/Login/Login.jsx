import "./Login.scss"
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUserToggleContext } from "../../UserProvider";
const Login = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({});
    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value
        })
    }
    const changeLogin=useUserToggleContext();

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("https://proyectobackendpeliculas-production.up.railway.app/auth/login", form)
            .then(response => {
                    localStorage.setItem('jwt', JSON.stringify(response.data.jwt));
                    localStorage.setItem('username', response.data.username);
                    localStorage.setItem('isAdmin', response.data.admin);
                    changeLogin(response.data.username,response.data.admin);
                    navigate("/");
            });
    }

    return (
<Form  className="containerform">
            <Form.Group controlId='email'>
                <Form.Label  className="words">Username</Form.Label>
                <Form.Control
                    placeholder='Enter username'
                    value={form.username}
                    onChange={(e) => setField('email', e.target.value)}
                    className="input"
                >
                </Form.Control>
            </Form.Group>

            <Form.Group controlId='password'>
                <Form.Label className="words">Password</Form.Label>
                <Form.Control
                    type='password'
                    placeholder='Enter your password'
                    value={form.password}
                    onChange={(e) => setField('password', e.target.value)}
                    className="input"
                >
                </Form.Control>
            </Form.Group>
            <Form.Group className="boxboton" controlId='submit'>
                <Button type='submit' className="Boton"
                    onClick={handleSubmit} >
                    Submit
                </Button>
            </Form.Group>
            <p className="textlogin">Logueate aqui</p>
        </Form>
    );
}
export default Login;