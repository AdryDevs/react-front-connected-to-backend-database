import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Home from '../../Containers/Home/Home';
import './Register.scss'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUserToggleContext } from "../../UserProvider";

const RegisterContainer = () => {
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const changeLogin=useUserToggleContext();

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
        const { username, email, dob, password, password2 } = form;
        const newErrors = {};
        
        if (!username || username === 'Enter username') newErrors.username = 'Please enter a username'
        if (!email || email === 'Enter email'){
            newErrors.email = 'Please enter an email'
        } else if (!/.+\@.+\..+/.test(email)) newErrors.email = 'Please input a valid email'
        if (!dob || dob === '') newErrors.dob = 'Please enter your date of birth'
        if (!password || password === 'Enter your password') newErrors.password= 'Please enter a password'
        else {
            if (!/[?=.*[0-9]]*/.test(password)) newErrors.password = 'Password must contain a number'
            if (!/[?=.*[a-z]]*/.test(password)) newErrors.password = 'Password must contain at least 1 lower case'
            if (!/[?=.*[A-Z]]*/.test(password)) newErrors.password = 'Password must contain at least 1 upper case'
            if (!/[[a-zA-Z0-9]{8,}]*/.test(password)) newErrors.password = 'Password must contain at least 8 characters'
        }

        if (!password2 || password2 === 'Repeat your password') newErrors.password2 = 'Please repeat your password'
        else if (password2 !== password) newErrors.password2 = 'The passwords do not match'

        return newErrors;
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
        } else {
            console.log("submited form")
            e.preventDefault()
             axios.post("https://proyectobackendpeliculas-production.up.railway.app/auth/register",form)
            .then(response=>{
              console.log(response);
              if (response) {
                console.log("Intentando login");
                const body ={
                    email:form.email,
                    password:form.password
                }
                axios.post("https://proyectobackendpeliculas-production.up.railway.app/auth/login", body)
                .then(response => {
                        localStorage.setItem('jwt', JSON.stringify(response.data.jwt));
                        localStorage.setItem('username', response.data.username);
                        localStorage.setItem('isAdmin', response.data.admin);
                        changeLogin(response.data.username,response.data.admin);
                        navigate("/");
                });
            }
            });

        }
    }

    return (
        <Form className='Principal1'>
            <Form.Group controlId='username'>
                <Form.Label className='words'>Username</Form.Label>
                <Form.Control
                    placeholder='Enter username'
                    value={form.username}
                    onChange={(e) => setField('username', e.target.value)}
                    isInvalid={!!errors.username}
                    className='input'
                >
                </Form.Control>
                <Form.Control.Feedback type='invalid'>
                    {errors.username}

                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId='email'>
                <Form.Label className='words'>Email</Form.Label>
                <Form.Control
                    type='email'
                    placeholder='Enter email'
                    value={form.email}
                    onChange={(e) => setField('email', e.target.value)}
                    isInvalid={!!errors.email}
                    className='input'
                >
                </Form.Control>
                <Form.Control.Feedback type='invalid'>
                    {errors.email}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId='dob'>
                <Form.Label className='words'>Date of Birth</Form.Label>
                <Form.Control
                    type='date'
                    placeholder='Enter date of birth'
                    value={form.dob}
                    onChange={(e) => setField('dob', e.target.value)}
                    isInvalid={!!errors.dob}
                    className='input'
                >
                </Form.Control>
                <Form.Control.Feedback type='invalid'>
                    {errors.dob}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId='password' className='password'>
            <Form.Label className='words'>Password</Form.Label>

                <Form.Control
                    type='password'
                    placeholder='Enter your password'
                    value={form.password}
                    onChange={(e) => setField('password', e.target.value)}
                    isInvalid={!!errors.password}
                    className='input'
                >
                </Form.Control>
                <Form.Control.Feedback type='invalid'>
                    {errors.password};

                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId='password2'>
                <Form.Label className='words'>Password</Form.Label>
                <Form.Control
                    type='password'
                    placeholder='Repeat your password'
                    value={form.password2}
                    onChange={(e) => setField('password2', e.target.value)}
                    isInvalid={!!errors.password2}
                    className='input'
                >
                </Form.Control>
                <Form.Control.Feedback type='invalid'>
                    {errors.password2}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId='submit'>
                <Button className='Boton' type='submit'
                    onClick={handleSubmit} >
                    Submit
                </Button>
            </Form.Group>
        </Form>
    )
}

export default RegisterContainer;