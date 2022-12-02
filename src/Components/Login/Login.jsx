import "./Login.scss"
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from "axios";

const Login = () =>{
  const [form, setForm] = useState({});
  const setField = (field, value) => {
    setForm({
        ...form,
        [field]: value
    })
}

const handleSubmit = (e) => {
    let resp="";
  e.preventDefault()
  console.log(form);
   axios.post("http://localhost:3002/auth/login",form)
  .then(response=>{
    console.log(response);
    resp=response;
    if(resp!==""){
        localStorage.setItem('jwt', JSON.stringify(resp.data.jwt));
      }
      else{
        console.log("No se ha guardado el token");
      }
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
        </Form>
  );
}
export default Login;