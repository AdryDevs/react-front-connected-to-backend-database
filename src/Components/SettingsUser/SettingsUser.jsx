import React, { useState } from 'react';
import { Form, Button, Row } from 'react-bootstrap';
import './SettingsUser.scss'


const SettingsUser = () => {
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
        const { username, email, dob, password, password2, password3 } = form;
        const newErrors = {};
        if (!username || username === 'Enter username') newErrors.username = 'Please enter a username'
        if (!email || email === 'Enter email') newErrors.email = 'Please enter an email'
        if (!password || password === 'Enter your password') newErrors.password = 'Please enter a password'
        else {
            if (!/[?=.*[0-9]]*/.test(password)) newErrors.password = 'Password must contain a number'
            if (!/[?=.*[a-z]]*/.test(password)) newErrors.password = 'Password must contain at least 1 lower case'
            console.log(newErrors)
            if (!/[?=.*[A-Z]]*/.test(password)) newErrors.password = 'Password must contain at least 1 upper case'
            if (!/[[a-zA-Z0-9]{8,}]*/.test(password)) newErrors.password = 'Password must contain at least 8 characters'
        }
        if (!password2 || password2 === 'Enter your password') newErrors.password2 = 'Please enter a password'
        else {
            if (!/[?=.*[0-9]]*/.test(password2)) newErrors.password2 = 'Password must contain a number'
            if (!/[?=.*[a-z]]*/.test(password2)) newErrors.password2 = 'Password must contain at least 1 lower case'
            console.log(newErrors)
            if (!/[?=.*[A-Z]]*/.test(password2)) newErrors.password2 = 'Password must contain at least 1 upper case'
            if (!/[[a-zA-Z0-9]{8,}]*/.test(password2)) newErrors.password2 = 'Password must contain at least 8 characters'
        }

        if (!password3 || password3 === 'Repeat your password') newErrors.password3 = 'Please repeat your password'
        else if (password3 !== password2) newErrors.password3 = 'The passwords do not match'

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
        <Form className='Principal1'>
            <Form.Group controlId='username'>
                <Form.Label className='words'>Username</Form.Label>
                <Form.Control
                    placeholder='Enter username'
                    value={form.username}
                    onChange={(e) => setField('username', e.target.value)}
                    isInvalid={!!errors.username}
                    className= 'Edit'
                >
                </Form.Control>
                <Form.Control.Feedback type='invalid'>
                    {errors.username}

                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group  controlId='email'>
                <Form.Label className='words'>Email</Form.Label>
                <Form.Control
                    type='email'
                    placeholder='Enter email'
                    value={form.email}
                    onChange={(e) => setField('email', e.target.value)}
                    isInvalid={!!errors.email}
                    className= 'Edit'
                >
                </Form.Control>
                <Form.Control.Feedback type='invalid'>
                    {errors.email}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId='password'>
                <Form.Label className='words'> New Password</Form.Label>
                <Form.Control
                    type='password'
                    placeholder='Enter your password'
                    value={form.password2}
                    onChange={(e) => setField('password', e.target.value)}
                    isInvalid={!!errors.password2}
                    className= 'Edit'
                >
                </Form.Control>
                <Form.Control.Feedback type='invalid'>
                    {errors.password2}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId='password2'>
                <Form.Label className='words'>Repeat New Password</Form.Label>
                <Form.Control
                    type='password'
                    placeholder='Repeat your password'
                    value={form.password3}
                    onChange={(e) => setField('password2', e.target.value)}
                    isInvalid={!!errors.password3}
                    className= 'Edit'
                >
                </Form.Control>
                <Form.Control.Feedback type='invalid'>
                    {errors.password3}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className='CBoton' controlId='submit'>
                <Button type='submit'
                    onClick={handleSubmit}
                    className='Boton' >
                    Submit
                </Button>
            </Form.Group>
        </Form>
   



    )
}

export default SettingsUser;
