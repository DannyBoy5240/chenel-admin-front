import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { BACKEND_URL } from "../../constants";
import axios from "axios";

import backIcon from "../../assets/icons/back.png";
import "./auth.css";

import { login } from "../../actions/auth";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import jwt_decode from "jwt-decode";
import { genSaltSync, hashSync } from "bcrypt-ts";

import Privacy from "../../components/layout/Privacy";

import { useTranslation } from "react-i18next";

interface Props {
  auth: any;
}
function Login(props: Props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { t, i18n } = useTranslation();

  const [signInError, setSignInError] = useState("");
  const [resetPasswordNote, setResetPasswordNote] = useState("");
  const [isForgetPassword, setIsForgetPassword] = useState(false);

  // Email and Password Handler Parts
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

  // Forget Password
  const [verifyEmail, setVerifyEmail] = useState("");
  const [isValidVerifyEmail, setIsValidVerifyEmail] = useState(false);

  const [verifyCode, setVerifyCode] = useState("");
  const [verifyInputCode, setVerifyInputCode] = useState("");
  const [isCodeVerified, setIsCodeVerified] = useState(0);  // 0: null, 1: verified, 2: not verified

  const forgetPasswordHandler = () => {
    setIsForgetPassword(true);
    setVerifyEmail("");
    setIsValidEmail(false);
    setVerifyCode("");
    setVerifyInputCode("");
    setIsCodeVerified(0);
  }
  
  // Regular expression pattern for verify email validation
  const handleVerifyEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setVerifyEmail(value);
    // Check if the email matches the pattern
    setIsValidVerifyEmail(emailPattern.test(value));
    // Initialize Note Verify Message
    setResetPasswordNote("");
  };

  const handleVerifyInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setVerifyInputCode(value);
    setIsCodeVerified(0);
  }
  const verifyCodeHandler = () => {
    // const salt = genSaltSync(10);
    // const hash = hashSync(verifyInputCode, salt);
    if (verifyInputCode === verifyCode) {
      setIsCodeVerified(1);
    } else {
      setIsCodeVerified(2);
    }
    setResetPasswordNote("");
  } 
  // reset password handler with emails
  const resetPasswordHandler = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(
        `${BACKEND_URL}/users/resetpassword`,
        { email: verifyEmail },
        config
      );
      // inform password reset succeed
      setResetPasswordNote(t("reset_password_succeed"));
      setVerifyCode(res.data.code);
    } catch (err: any) {
      console.log(err.message);
      setResetPasswordNote(t("reset_password_failed"));
      setVerifyCode("");
    }
  }

  // reset new password really
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");
  const resetNewPasswordHandler = async () => {
    try {
      const res = await axios.post(
        `${BACKEND_URL}/users/updatepassword`,
        { email: verifyEmail, password: newPassword}
      );
      // inform password reset succeed
      setResetPasswordNote(t("password_update_succeed"));
      setTimeout(() => {
        setIsForgetPassword(false);
      }, 3000);
    } catch (err: any) {
      console.log(err.message);
      setResetPasswordNote(t("password_update_failed"));
    }
  }

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
            {
              !isForgetPassword ?
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
                      <a
                        className="forgot-password-link py-4"
                        role="button"
                        onClick={() => forgetPasswordHandler()}
                      >
                        {t("forget_your_password")}
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
              : 
              (isCodeVerified !== 1 ? 
                <div className="p-4 p-lg-5">
                  <p className="login-card-description text-center">
                    {t("forget_your_password")}
                  </p>
                  <div>
                    <div className="form-group">
                      <label htmlFor="email" className="sr-only">
                        {t("email")}
                      </label>
                      <input
                        type="email"
                        name="verify_email"
                        id="verify_email"
                        className="form-control"
                        placeholder={t("email_address")}
                        value={verifyEmail}
                        onChange={handleVerifyEmailChange}
                      />
                    </div>
                    {!isValidVerifyEmail && (
                      <p className="text-danger">
                        {t("please_enter_valid_address")}
                      </p>
                    )}
                    {/* Show Sign In Error */}
                    <div className="py-1 text-danger">{resetPasswordNote}</div>
                    <input
                      name="verify"
                      id="verify"
                      className="btn btn-block login-btn mb-4"
                      type="button"
                      value={t("reset_password")}
                      disabled={!isValidVerifyEmail}
                      onClick={() => resetPasswordHandler()}
                    />
                    {verifyCode !== "" && <div className="py-2 d-flex align-items-center">
                      <div>
                        <input
                          name="verifycode"
                          id="verifycode"
                          className="form-control"
                          style={{ marginBottom: "0px" }}
                          placeholder={t("input_verifycode")}
                          value={verifyInputCode}
                          onChange={handleVerifyInputChange}
                        />
                      </div>
                      <div className="px-3">
                        <input
                          name="codeverify"
                          id="codeverify"
                          className="btn btn-block login-btn"
                          style={{ marginBottom: "0px" }}
                          type="button"
                          value={t("code_verify")}
                          disabled={verifyInputCode === ""}
                          onClick={verifyCodeHandler}
                        />
                      </div>
                      <div className='text-danger'>
                        {isCodeVerified === 1 ? t("code_verified") : (isCodeVerified === 2 ? t("code_not_verified") : "")}
                      </div>
                    </div>}
                  </div>
                  <p className="login-card-footer-text">
                    {t("return_to_login")}{" "}
                    <a
                      className="text-reset"
                      role="button"
                      onClick={() => {
                        setIsForgetPassword(false);
                        setIsForgetPassword(false);
                      }}
                    >
                      {t("login_here")}
                    </a>
                  </p>
                </div>
              :
                <div className="p-4 p-lg-5">
                  <p className="login-card-description text-center">
                    {t("reset_your_password")}
                  </p>
                  <div>
                    <div className="form-group">
                      <label htmlFor="password1" className="sr-only">
                        {t("new_password")}
                      </label>
                      <input
                        type="password"
                        name="password1"
                        id="password1"
                        className="form-control"
                        placeholder={t("new_password")}
                        value={newPassword}
                        onChange={(ev) => setNewPassword(ev.target.value)}
                      />
                      <label htmlFor="password2" className="sr-only">
                        {t("new_password_confirm")}
                      </label>
                      <input
                        type="password"
                        name="password2"
                        id="password2"
                        className="form-control"
                        placeholder={t("new_password_confirm")}
                        value={newPasswordConfirm}
                        onChange={(ev) => setNewPasswordConfirm(ev.target.value)}
                      />
                      <input
                        name="newpasswordreset"
                        id="newpasswordreset"
                        className="btn btn-block login-btn"
                        style={{ marginBottom: "0px" }}
                        type="button"
                        value={t("new_password_reset")}
                        disabled={newPassword === "" || newPassword !== newPasswordConfirm}
                        onClick={resetNewPasswordHandler}
                      />
                      <div className="pt-4 text-danger">{resetPasswordNote}</div>
                    </div>
                  </div>
                </div>
              )
            }
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
