import React, { useState, useRef } from "react";

import { useNavigate } from "react-router-dom";

import axios from "axios";

import { BACKEND_URL } from "../../constants";

import "./auth.css";

export default function Login() {
  const navigate = useNavigate();

  const [signInError, setSignInError] = useState("");

  // Email and Password Handler Part
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [password, setPassword] = useState("");

  // Regular expression pattern for email validation
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmail(value);
    // Check if the email matches the pattern
    setIsValidEmail(emailPattern.test(value));
    // Initialize SignIn Status Error Message
    setSignInError("");
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPassword(value);
    // Initialize SignIn Status Error Message
    setSignInError("");
  };

  // signin handler with email and password
  const signInHandler = () => {
    const data = {
      email: email,
      password: password,
    };

    const url = `${BACKEND_URL}/users/signIn`;
    axios
      .post(url, data)
      .then((response) => {
        console.log("Response: ", response.data);
        const res = response.data;
        if (res.success) {
          // navigate based on the roles
          if (res.roles === "ADMIN") navigate("/admin");
          else if (res.roles === "MANAGER") navigate("/manager");
          else if (res.roles === "WRITER") navigate("/writer");
          else if (res.roles === "CLERK") navigate("/clerk");
          else navigate("/");
          //
        } else {
          console.log(res.message);
          setSignInError(res.message);
        }
        return;
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  return (
    <div className="d-flex align-items-center vh-100">
      <div className="container">
        <div className="card login-card">
          <div className="row no-gutters">
            <div className="col-md-5">
              <img
                src="http://localhost:3000/assets/img/signIn.jpg"
                alt="login"
                // className="login-card-img"
                width={500}
              />
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <p className="login-card-description">Sign into your account</p>
                <div>
                  <div className="form-group">
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control"
                      placeholder="Email address"
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </div>
                  {!isValidEmail && (
                    <p className="text-danger">
                      Please enter a valid email address.
                    </p>
                  )}
                  <div className="form-group mb-4">
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="form-control"
                      placeholder="***********"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </div>
                  {/* Show Sign In Error */}
                  <div className="py-1 text-danger">{signInError}</div>
                  <input
                    name="login"
                    id="login"
                    className="btn btn-block login-btn mb-4"
                    type="button"
                    value="Login"
                    disabled={!isValidEmail}
                    onClick={() => signInHandler()}
                  />
                </div>
                <a href="#!" className="forgot-password-link">
                  Forgot password?
                </a>
                <p className="login-card-footer-text">
                  Don't have an account?{" "}
                  <a className="text-reset" href="/signUp">
                    Register here
                  </a>
                </p>
                <nav className="login-card-footer-nav">
                  <a href="#!" style={{ textDecoration: "none" }}>
                    Terms of use.
                  </a>{" "}
                  <a href="#!">Privacy policy</a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
