import React from "react";
import { Route } from "react-router-dom";
import LandingPage from "./landingpage/LandingPage";
import Signup from "./landingpage/Signup";
import Login from "./landingpage/Login";

const CompLandingPage = () => {
  return (
    <div>
      <Route exact path="/" component={LandingPage} />
      <div style={{ width: "100%" }}>
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
      </div>
    </div>
  );
};

export default CompLandingPage;
