import React from 'react';
import './LandingPage.css';
import LoginIm from "./images/login.svg"
import LoginForm from "./LoginForm"

const Login = () => {
    return (
        <div className="container-fluid row" style={{display: "flex", width: "100%", padding: "0px"}}>
            <div className="col-md-5"style={{ }} ><img src={LoginIm} alt="login" style={{ width: "100%",}} className="img-fluid" /></div>
            <div style={{padding: "0"}} className="col-md-7">
                <LoginForm />
            </div>
        </div>
    )
}

export default Login
