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
    <div  style={{backgroundColor: "#009688", width: '100%',
       height: '100%'}}>
    <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
    <div className="card shadow-2-strong" style={{borderRadius: "1rem"}}>
    <div className="card-body p-5 text-center">
    <div className='center-image'>
    <img src={Fridge} style={{ width:"25%", height :"25%" }}   alt="Fridge Logo" />
    </div>
    <div>
    <div className="card-header">Connectez-vous à l'application Stores !</div>
    <LoginForm/>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </>
    );
  }
}
    

export default Login;
