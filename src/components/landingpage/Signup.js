import React from "react";
import './LandingPage.css';
import SignupImage from "./images/signup.svg";
import SignupForm from "./SignupForm";

const Signup = () => {
  return (
    <div className=" container-fluid row" style={{display: "flex", maxWidth: "100%", padding: "0px"}}>
      <div className="col-md-5"style={{padding: "0" }} >
        <img src={SignupImage} alt="signup" className="img-fluid" style={{ width: "100%"}}/>
      </div>
      <div style={{padding: "0px"}} className="col-md-7" >
        <SignupForm />
      </div>
    </div>
  );
};

export default Signup;
