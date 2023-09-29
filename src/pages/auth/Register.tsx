import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import { BACKEND_URL } from "../../constants";
import "./auth.css";

import backIcon from "../../assets/icons/back.jpg";
import signUpImage from "../../assets/assets/img/signUp.jpg";

import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import jwt_decode from "jwt-decode";

import Privacy from "../../components/layout/Privacy";

import { useTranslation } from "react-i18next";

interface Props {
  auth: any;
}
function Register(props: Props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { t, i18n } = useTranslation();

  // authorization
  const decoded_token = props.auth.token ? jwt_decode(props.auth.token) : null;
  const isAuthorized = decoded_token ? (decoded_token as any).user : false;

  useEffect(() => {
    if (isAuthorized) {
      // redirect to origin
      const decoded_token_role = (
        (decoded_token as any)?.user as any
      )?.roles.toLowerCase();

      navigate(
        `/${decoded_token_role === "customer" ? "" : decoded_token_role}`
      );
    }
  }, [isAuthorized, navigate]);

  const [signUpError, setSignUpError] = useState("");

  const checkboxMembershipRef = useRef<HTMLInputElement>(null);

  // Email and Password Handler Part
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [fullName, setFullName] = useState("");
  const [isValidFullName, setIsValidFullName] = useState(true);

  // Regular expression pattern for password validation (at least 8 characters)
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmail(value);
    // Check if the email matches the pattern
    setIsValidEmail(emailPattern.test(value));
  };

  const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFullName(value);
    // if Full Name is empty, then it requies to input full name
    setIsValidFullName(value !== "");
  };

  const passwordPattern = /^.{8,}$/;
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPassword(value);
    // Check if the password matches the pattern
    setIsValidPassword(
      passwordPattern.test(value) && value === confirmPassword
    );
  };
  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target;
    setConfirmPassword(value);
    // Check if the password matches the pattern
    setIsValidPassword(passwordPattern.test(value) && password === value);
  };

  const signUpHandler = () => {
    // Empty Field Handle
    if (email === "") setIsValidEmail(false);
    if (fullName === "") setIsValidFullName(false);
    else setIsValidFullName(true);
    if (password === "") setIsValidPassword(false);
    if (!isValidEmail || !isValidFullName || !isValidPassword) return;

    // Register
    const curEmail = email;
    const curFullName = fullName;
    const curPassword = password;

    if (checkboxMembershipRef && checkboxMembershipRef.current) {
      if (checkboxMembershipRef.current.checked == true) {
        navigate("/signUp/Employee", {
          state: {
            email: curEmail.toLowerCase(),
            name: curFullName,
            password: curPassword,
          },
        });
      } else {
        // Sign Up the User
        const data = {
          email: curEmail.toLowerCase(),
          fullName: curFullName,
          password: curPassword,
        };

        const url = `${BACKEND_URL}/users/signUp`;

        fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then((responseData) => {
            // Check for successful responses or handle errors based on the responseData.
            if (responseData && responseData.success) {
              setSignUpError("");
              // Handle successful response
              console.log("Success:", responseData);
              if (responseData.success) {
                navigate("/login");
              } else {
                setSignUpError("Register occurs an Error!");
                return;
              }
            } else {
              // Handle error response
              console.error("Error Response:", responseData);
              setSignUpError(responseData.message);
            }
          })
          .catch((error) => {
            // Handle network errors or other issues
            console.error("Error fetching data:", error);
          });
      }
    }
  };

  // terms policy status
  const [isPolicyStatus, setIsPolicyStatus] = useState(false);

  return (
    <div className="d-flex align-items-center vh-100">
      <div className="container">
        <div className="card register-card">
          <div className="row no-gutters">
            <div className="col-md-7">
              {!isPolicyStatus ? (
                <div className="card-body">
                  <p className="register-card-description">
                    {t("sign_up_to_your_account")}
                  </p>
                  <form action="#!">
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
                        {t("please_enter_valid_email_address")}
                      </p>
                    )}
                    <div className="form-group">
                      <label htmlFor="email" className="sr-only">
                        {t("full_name")}
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        placeholder="John Doe"
                        value={fullName}
                        onChange={handleFullNameChange}
                      />
                    </div>
                    {!isValidFullName && (
                      <p className="text-danger">
                        {t("please_enter_your_full_name")}
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
                    <div className="form-group">
                      <label htmlFor="password" className="sr-only">
                        {t("confirm_password")}
                      </label>
                      <input
                        type="password"
                        name="password2"
                        id="password2"
                        className="form-control"
                        placeholder="***********"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                      />
                    </div>
                    {/* Show Confirm Password Error */}
                    {!isValidPassword && (
                      <p className="text-danger">
                        {t("please_enter_password_correctly")}
                      </p>
                    )}
                    <div className="form-group mt-2 mb-4">
                      <input
                        type="checkbox"
                        id="membership"
                        name="membership"
                        value="membershipValue"
                        ref={checkboxMembershipRef}
                      />
                      <label htmlFor="membership">{t("be_an_employee")}</label>
                    </div>
                    {/* Register Status Represent */}
                    <div className="pb-2 text-danger">{signUpError}</div>
                    <input
                      name="register"
                      id="register"
                      className="btn btn-block register-btn mb-4"
                      type="button"
                      value={t("register")}
                      onClick={() => signUpHandler()}
                    />
                  </form>
                  <p className="register-card-footer-text">
                    {t("you_already_have_account")}{" "}
                    <a onClick={() => navigate("/login")} className="text-reset">
                      {t("login_here")}
                    </a>
                  </p>
                  <nav
                    className="register-card-footer-nav"
                    style={{ textAlign: "center" }}
                  >
                    <a href="#!" style={{ textDecoration: "none" }}>
                      {t("term_of_use")}
                    </a>{" "}
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
                    style={{ top: "18px", left: "32px" }}
                    role="button"
                    onClick={() => setIsPolicyStatus(false)}
                  >
                    <img src={backIcon} className="icon-default-sz" />
                  </div>
                </div>
              )}
            </div>
            <div className="col-md-5 align-self-center">
              <img
                // src="http://195.201.246.182:3000/assets/img/signUp.jpg"
                src={signUpImage}
                alt="register"
                width={555}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Register.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state: any) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Register);
