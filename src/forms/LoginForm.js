import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {error: '',username:'', password: '', grant_type: process.env.REACT_APP_GRANT_TYPE, client_id:process.env.REACT_APP_CLIENT_ID, client_secret: process.env.REACT_APP_CLIENT_SECRET};
      }
    
      handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
      }
     
      handleSubmit = (event) => {
        var status = '';
        fetch('/auth/loginstore',{
          method: "POST",
        headers: {
            'Content-type': 'application/json',
            'Accept':'application/json'          },
        body: JSON.stringify(this.state)
        })
        .then(response => {
          status = response.status;
          return response.json();
      })
        .then((result) => {
          if (status === 200){
            sessionStorage.setItem("token", result.access_token);
            console.log(sessionStorage.getItem("token"));
            window.location.href = '/home';
          }
          else if (status === 404){
          //  window.location.href = '/';
           this.setState({ error :  "Email inconnue" });

          }
          else if (status === 400){
            this.setState({ error :  "Mot de passe incorrect" });
            // window.location.href = '/';
          }
        })
        event.preventDefault();
    }
     
      render() {
        return (
    <>
    <br></br>
    <Form onSubmit={this.handleSubmit} >
      {this.state.error !== '' &&
        <div className="alert alert-danger text-center"><i className="fas fa-times-circle"></i>{this.state.error}</div>    
      }

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.FloatingLabel  controlId="floatingPseudo" label="Pseudo" className="mb-3">
      <Form.Control className="form-control form-control-lg" type="email" value={this.state.value} required name="username" onChange={this.handleChange} placeholder="Pseudo"/>
      </Form.FloatingLabel>
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.FloatingLabel  controlId="floatingPassword" label="Mot de passe" className="mb-3">
      <Form.Control className="form-control form-control-lg" type="password" value={this.state.value} required name="password" onChange={this.handleChange} placeholder="Mot de passe"/>
      </Form.FloatingLabel>
    </Form.Group>

    <div className="form-check d-flex justify-content-start mb-4">
      <Form.Control className="form-check-input" type="checkbox" value="" id="form1Example3" name="resterconnecter"/>
      <Form.Label className="form-check-label" htmlFor="form1Example3"> Rester connecté </Form.Label>
    </div>
  
    <Button type="submit" value="Submit" style={{ backgroundColor:"#009688"}}>
      <FontAwesomeIcon icon={faPaw}/> Se connecter
    </Button>
    </Form>
    </>
        );
      }
    }
    

export default LoginForm;
