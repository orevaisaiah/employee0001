import React from "react";
import { Link } from 'react-router-dom';

const LoginForm = () => {
    return (
        <div style={{width: "75%", margin: "0 auto 0 auto"}}>   
                <div style={{ }}>
                    <h2
                        style={{
                            fontFamily: '"Lato", sans-serif',
                            fontSize: "32px",
                            fontWeight: "700",
                            color: "#000000",
                            lineHeight: "5vh",
                            margin: "220px 0 0 0"
                          }}
                    >
                        Login
                    </h2>
                </div>
                <div style={{ }}>
                    <p
                         style={{
                            width: "43.5vw",
                            fontFamily: '"Lato", sans-serif',
                            fontSize: "16px",
                            fontWeight: "400",
                            lineHeight: "3vh",
                            color: "#000000",
                            margin: "16px 0 33px 0"
                            
                          }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Enim eget justo, neque gravida nec at massa auctor.
                    </p>
                </div>
                <form action="">
                    <div style={{ width: "100%" }}>
                        <input
                            className="login-input"
                            type="email"
                            required
                            placeholder="Email"
                            style={{
                                marginBottom: "20px" 
                             }}
                        />
                    </div>
                    <div style={{ width: "100%" }}>
                        <input
                            className="login-input"
                            type="password"
                            required
                            placeholder="Password"
                            style={{
                               marginBottom: "14px" 
                            }}
                        />
                    </div>
                    <div>
                        <a
                            href="http://#"
                            style={{
                                color: "#08072E",
                                fontFamily: '"Lato", sans-serif',
                                fontSize: "16px",
                                fontWeight: "700",
                                textDecoration: "none",
                            }}
                        >
                            Forgot Password?
                        </a>
                    </div>
                    <input
                        style={{
                            width: "10.5vw",
                            height: "6.3vh",
                            backgroundColor: "#3D50C7",
                            color: "#F8F8F8",
                            fontFamily: '"Lato", sans-serif',
                            fontSize: "16px",
                            fontWeight: "400",
                            border: "none",
                            borderRadius: "5px",
                            margin: "30px 0 20px 0",
                        }}
                        type="submit"
                        value="Login"
                    />
                </form>
                <div style={{ width: "100%" }}>
                    <p className="login-link">
                        Don't have an Account?{" "}
                        <span>
                            {" "}
                            <Link
                                to="/signup"
                                style={{
                                    textDecoration: "none",
                                }}
                            >
                                {" "}
                                Register
                            </Link>
                        </span>
                    </p>
                </div>
        </div>
    );
};

export default LoginForm;
