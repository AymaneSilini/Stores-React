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
    <section className="vh-100">
    <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
    <div className="card shadow-2-strong" style={{borderRadius: "1rem"}}>
    <div className="card-body p-5 text-center">
    <h3 className="mb-5"><img src={Fridge} style={{paddingTop: "10%", minWidth: "100px", width:"25%", height :"25%" }}   alt="Fridge Logo" /></h3>
    <div className="card card-login mx-auto my-5 shadow">
    <LoginForm/>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
    </>
    );
  }
}
    

export default Login;
