import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from '@mui/material';
import LoginForm from "../forms/LoginForm";
import Fridge from '../ressources/fridgeqru.svg';

class Login extends Component {
  render() {
    return (
    <>
    <br></br>
    <Container maxWidth="sm" padding="normal">
    <img src={Fridge} width={150} height={150} alt="Fridge Logo" />
    <LoginForm/>
    </Container>
    </>
    );
  }
}
    

export default Login;
