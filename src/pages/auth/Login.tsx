import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import axios from "axios";

import { BACKEND_URL } from "../../constants";

import "./auth.css";

import { login } from "../../actions/auth";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import jwt_decode from "jwt-decode";

interface Props {
  auth: any;
}
function Login(props: Props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  const customerLoginHandler = async (email: String) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(
        `${BACKEND_URL}/users/getuserdocstatus`,
        { email },
        config
      );
      // navigate
      if (res.data.status === "EDITING")
        navigate("/userInfo", { state: { email: email } });
      else navigate("/");
    } catch (err: any) {
      console.log(err.message);
    }
  };

  // signin handler with email and password
  const signInHandler = async () => {
    const res = await dispatch(login(email, password));
    if (res.success) {
      const decoded_res = jwt_decode(res.token) as any;
      // navigate to the url based on the role
      const role = decoded_res.user.roles;
      if (role === "ADMIN") navigate("/admin");
      else if (role === "MANAGER") navigate("/manager");
      else if (role === "WRITER") navigate("/writer");
      else if (role === "CLERK") navigate("/clerk");
      else if (role === "CUSTOMER") {
        customerLoginHandler(decoded_res.user.email);
      } else navigate("/notfound");
    } else {
      setSignInError(res.message);
    }
  };

  // authorization
  const decoded_token = props.auth.token ? jwt_decode(props.auth.token) : null;
  const isAuthorized = decoded_token && (decoded_token as any).user;

  useEffect(() => {
    if (isAuthorized) navigate(`/${(decoded_token as any).user.roles}`);
    else navigate("/login");
  }, [isAuthorized, navigate]);

  return (
    <div className="d-flex align-items-center vh-100">
      <div className="container">
        <div className="card login-card">
          <div className="row no-gutters">
            <div className="col-md-5">
              <img
                src="http://localhost:3000/assets/img/signIn.jpg"
                alt="login"
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

Login.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state: any) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Login);
