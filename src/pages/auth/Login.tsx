import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { BACKEND_URL } from "../../constants";
import axios from "axios";

import backIcon from "../../assets/icons/back.png";
import signInImage from "../../assets/assets/img/signIn.jpg";
import "./auth.css";

import { login } from "../../actions/auth";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import jwt_decode from "jwt-decode";

import Privacy from "../../components/layout/Privacy";
import Footer from "../../components/layout/Footer";

import { useTranslation } from "react-i18next";

interface Props {
  auth: any;
}
function Login(props: Props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { t, i18n } = useTranslation();

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
        navigate("/userinfo", { state: { email: email } });
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
      setSignInError(t(res.message));
    }
  };

  // authorization
  const decoded_token = props.auth.token ? jwt_decode(props.auth.token) : null;
  const isAuthorized = decoded_token && (decoded_token as any).user;

  useEffect(() => {
    if (isAuthorized) {
      const role = (decoded_token as any).user.roles;
      navigate(`/${role === "CUSTOMER" ? "" : role}`);
    } else navigate("/login");
  }, [isAuthorized, navigate]);

  // terms policy status
  const [isPolicyStatus, setIsPolicyStatus] = useState(false);

  return (
    <div className="d-flex align-items-center h-100">
      <div className="container">
        <div className="card login-card">
          <div className="row no-gutters">
            {/* <div
              className="col-md-5 d-none d-md-block align-self-center"
            >
              <img
                src={signInImage}
                alt="login"
                width="100%"
              />
            </div> */}
            <div className="col-m12">
              {!isPolicyStatus ? (
                <div className="p-4 p-lg-5">
                  <p className="login-card-description text-center">
                    {t("sign_into_your_account")}
                  </p>
                  <div>
                    <div className="form-group">
                      <label htmlFor="email" className="sr-only">
                        {t("email")}
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                        placeholder={t("email_address")}
                        value={email}
                        onChange={handleEmailChange}
                      />
                    </div>
                    {!isValidEmail && (
                      <p className="text-danger">
                        {t("please_enter_valid_address")}
                      </p>
                    )}
                    <div className="form-group mb-4">
                      <label htmlFor="password" className="sr-only">
                        {t("password")}
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
                      value={t("login")}
                      disabled={!isValidEmail}
                      onClick={() => signInHandler()}
                    />
                  </div>
                  {/* <a href="#!" className="forgot-password-link">
                  Forgot password?
                  </a> */}
                  <p className="login-card-footer-text">
                    {t("dont_you_have_account")}{" "}
                    <a
                      className="text-reset"
                      role="button"
                      onClick={() => navigate("/signUp")}
                    >
                      {t("register_here")}
                    </a>
                    <br />
                    <br />
                    <a
                      className="text-reset"
                      onClick={() => navigate("/")}
                      role="button"
                    >
                      {t("return_to_homepage")}
                    </a>
                  </p>
                  <nav className="login-card-footer-nav">
                    <a style={{ textDecoration: "none" }}>{t("term_of_use")}</a>{" "}
                    <a
                      style={{ textDecoration: "underline" }}
                      onClick={() => setIsPolicyStatus(true)}
                      role="button"
                    >
                      {t("privacy_policy")}
                    </a>
                  </nav>
                </div>
              ) : (
                <div>
                  <Privacy />
                  <div
                    className="position-absolute"
                    style={{ top: "12px", left: "12px" }}
                    role="button"
                    onClick={() => setIsPolicyStatus(false)}
                  >
                    <img src={backIcon} className="icon-default-sz" />
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* <div className="d-block d-md-none">
            <Footer />
          </div> */}
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
