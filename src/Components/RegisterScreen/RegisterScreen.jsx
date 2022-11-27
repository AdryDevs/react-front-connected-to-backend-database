import React, { useState } from 'react';
import { Form, Button, Row, Col, InputGroup } from 'react-bootstrap';

const RegisterScreen = () => {
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
    const str = "hello world!";
    const result = /^hello/.test(str);

    const validateForm = () => {
        const { username, email, dob, password, password2 } = form;
        const newErrors = {};
        if (!username || username === 'Enter username') newErrors.username = 'Please enter a username'
        if (!email || email === 'Enter email') newErrors.email = 'Please enter an email'
        if (!dob || dob === '') newErrors.dob = 'Please enter your date of birth'
        if (!password || password === 'Enter your password') newErrors.password = 'Please enter a password'
        else {
            if (!/[?=.*[0-9]]*/.test(password)) newErrors.password = 'Password must contain a number'
            if (!/[?=.*[a-z]]*/.test(password)) newErrors.password = 'Password must contain at least 1 lower case'
            console.log(newErrors)
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
        }

        console.log(form);
    }

    return (
        <Form>
            <Form.Group controlId='username'>
                <Form.Label>Username</Form.Label>
                <Form.Control
                    placeholder='Enter username'
                    value={form.username}
                    onChange={(e) => setField('user-name', e.target.value)}
                    isInvalid={!!errors.username}
                >
                </Form.Control>
                <Form.Control.Feedback type='invalid'>
                    {errors.username}

                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId='email'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type='email'
                    placeholder='Enter email'
                    value={form.email}
                    onChange={(e) => setField('email', e.target.value)}
                    isInvalid={!!errors.email}
                >
                </Form.Control>
                <Form.Control.Feedback type='invalid'>
                    {errors.email}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId='dob'>
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                    type='date'
                    placeholder='Enter date of birth'
                    value={form.dob}
                    onChange={(e) => setField('dob', e.target.value)}
                    isInvalid={!!errors.dob}
                >
                </Form.Control>
                <Form.Control.Feedback type='invalid'>
                    {errors.dob}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type='password'
                    placeholder='Enter your password'
                    value={form.password}
                    onChange={(e) => setField('password', e.target.value)}
                    isInvalid={!!errors.password}
                >
                </Form.Control>
                <Form.Control.Feedback type='invalid'>
                    {errors.password}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId='password2'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type='password'
                    placeholder='Repeat your password'
                    value={form.password2}
                    onChange={(e) => setField('password2', e.target.value)}
                    isInvalid={!!errors.password2}
                >
                </Form.Control>
                <Form.Control.Feedback type='invalid'>
                    {errors.password2}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId='submit'>
                <Button type='submit'
                    onClick={handleSubmit} >
                    Submit
                </Button>
            </Form.Group>
        </Form>



    )
}

export default RegisterScreen;