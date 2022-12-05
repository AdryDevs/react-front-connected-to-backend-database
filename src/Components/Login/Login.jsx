import "./Login.scss"
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUserToggleContext } from "../../UserProvider";
import { render } from "@testing-library/react";
const Login = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value
        })
        if (!!errors[field])
            setErrors({
                ...errors,
                [field]: null
            })
    }

    const validateForm = () => {
        const { email, password } = form;
        const newErrors = {};
        if (!email || email === 'Enter email') newErrors.email = 'Please enter an email'
        if (!password || password === 'Enter your password') newErrors.password = 'Please enter a password'
        return newErrors;

    }
    const changeLogin = useUserToggleContext();

    const { email, password } = form;
    const newErrors = {};
    if (!email || email === 'Enter email') newErrors.email = 'Please enter an email'
    if (!password || password === 'Enter your password') newErrors.password = 'Please enter a password'

    const handleSubmit = (e) => {
        e.preventDefault()
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
        }
            axios.post("https://proyectobackendpeliculas-production.up.railway.app/auth/login", form)
            .then(response => {
                localStorage.setItem('jwt', response.data.jwt);
                localStorage.setItem('username', response.data.username);
                localStorage.setItem('isAdmin', response.data.admin);
                changeLogin(response.data.username, response.data.admin);
                navigate("/");
            }).catch(error => {
                errors.noLogin="Unable to login,check your credentials"
                console.log("SU PUTA MADREE");
                console.log(errors.noLogin)
                render();
            });
            if (Object.keys(formErrors).length > 0) {
                setErrors(formErrors);
            }

    }

    return (
        <Form className="containerform">
            <Form.Group controlId='email'>
                <Form.Label className="words">Email</Form.Label>
                <Form.Control
                    type="email"
                    placeholder='Enter email'
                    value={form.email}
                    onChange={(e) => setField('email', e.target.value)}
                    isInvalid={!!errors.email}
                    className="input"
                >
                </Form.Control>
                <Form.Control.Feedback type='invalid'>
                    {errors.email}

                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId='password'>
                <Form.Label className="words">Password</Form.Label>
                <Form.Control
                    type='password'
                    placeholder='Enter your password'
                    value={form.password}
                    onChange={(e) => setField('password', e.target.value)}
                    isInvalid={!!errors.email}
                    className="input"
                >
                </Form.Control>
                <Form.Control.Feedback type='invalid'>
                    {errors.password}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="boxboton" controlId='submit'>
                <Button type='submit' className="Boton"
                    onClick={handleSubmit} >
                    Login
                </Button>

            </Form.Group>
            <Form.Group>
            <Form.Control.Feedback type='invalid'>
            {errors.noLogin}
                </Form.Control.Feedback>
            <p className="error"></p>

            </Form.Group>
        </Form>
    );
}
export default Login;