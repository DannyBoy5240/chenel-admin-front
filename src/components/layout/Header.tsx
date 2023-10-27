import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";

import { BACKEND_URL } from "../../constants";
import axios from "axios";

import logoImage from "../../assets/img/logo.png";
import testAvatar from "../../assets/img/avatar.jpg";

import { useDispatch } from "react-redux";
import { logout } from "../../actions/auth";
import { useTranslation } from "react-i18next";

interface Props {
  isAuthorized: any;
  title: any;
  logout: any;
}
export default function Header(props: any) {
  // authorization
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { t, i18n } = useTranslation();

  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [isPasswordChange, setIsPasswordChange] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  const logoutHandler = async () => {
    await dispatch(logout());
    navigate("/login");
  };

  const languageChangeHandler = (lang: string) => {
    i18n.changeLanguage(lang);
    // save language settings to local storage
    localStorage.setItem("chenel_lang", lang);
  };

  // password update functions
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");
  const [resetPasswordNote, setResetPasswordNote] = useState("");

  const resetNewPasswordHandler = async () => {
    if (!props.isAuthorized) return;

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(
        `${BACKEND_URL}/users/updateuserpassword`,
        { email: props.isAuthorized.email, currentPassword, newPassword  },
        config
      );
      // inform password reset succeed
      setResetPasswordNote(t("reset_password_succeed"));
    } catch (err: any) {
      console.log(err.message);
      setResetPasswordNote(t("reset_password_failed"));
    }
  }

  return (
    <header id="header" className="fixed-top" style={{ padding: "0px" }}>
      <div className="position-relative container d-flex align-items-center justify-content-between">
        <a onClick={() => navigate("/")} className="logo">
          <img
            src={logoImage}
            className="img-fluid logo-default-sz"
            alt="Logo"
          />
        </a>

        <nav
          id="navbar"
          className={`navbar ${mobileMenuVisible ? "mobile-menu active" : ""}`}
        >
          <ul>
            <li>
              {!props.isAuthorized ||
              (props.isAuthorized as any)?.roles === "CUSTOMER" ? (
                <a
                  className={`nav-link scrollto ${
                    props.title === "home" && "active"
                  }`}
                  role="button"
                  onClick={() => navigate("/")}
                >
                  {t("home")}
                </a>
              ) : (
                props.isAuthorized && (
                  <a
                    className={`nav-link scrollto ${
                      props.title === "home" && "active"
                    }`}
                    role="button"
                    onClick={() =>
                      navigate(
                        `/${(
                          (props.isAuthorized as any)?.roles as any
                        ).toLowerCase()}`
                      )
                    }
                  >
                    {t("dashboard")}
                  </a>
                )
              )}
            </li>
            <li>
              <a
                className={`nav-link scrollto ${
                  props.title === "about" && "active"
                }`}
                role="button"
                onClick={() => navigate("/about")}
              >
                {t("aboutus")}
              </a>
            </li>
            {/* <li>
              <a className="nav-link scrollto" onClick={() => navigate("/blog")}>
                Blog
              </a>
            </li> */}
            <li>
              <a
                className={`nav-link scrollto ${
                  props.title === "packages" && "active"
                }`}
                role="button"
                onClick={() => navigate("/packages")}
              >
                {t("services")}
              </a>
            </li>
            <li>
              <a
                className={`nav-link scrollto ${
                  props.title === "faq" && "active"
                }`}
                role="button"
                onClick={() => navigate("/faq")}
              >
                {t("FAQ")}
              </a>
            </li>
            <li>
              <a
                className={`nav-link scrollto ${
                  props.title === "contact" && "active"
                }`}
                role="button"
                onClick={() => navigate("/contact")}
              >
                {t("contactus")}
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
              >
                {i18n.language.toLowerCase() === "en"
                  ? "English"
                  : i18n.language.toLowerCase() === "hat"
                  ? "Haitian"
                  : i18n.language.toLowerCase() === "spa"
                  ? "Spanish"
                  : "French"}
              </a>
              <ul className="dropdown-menu">
                <li
                  className="dropdown-item"
                  role="button"
                  onClick={() => languageChangeHandler("en")}
                >
                  English
                </li>
                <li
                  className="dropdown-item"
                  role="button"
                  onClick={() => languageChangeHandler("spa")}
                >
                  Spanish
                </li>
                <li
                  className="dropdown-item"
                  role="button"
                  onClick={() => languageChangeHandler("fr")}
                >
                  French
                </li>
                <li
                  className="dropdown-item"
                  role="button"
                  onClick={() => languageChangeHandler("hat")}
                >
                  Haitian
                </li>
              </ul>
            </li>
            {/* Header Auth Avatar */}
            {props.isAuthorized ? (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  <Col xs={6} md={4}>
                    <img
                      src={testAvatar}
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "50%",
                      }}
                      alt="Logo"
                    />
                  </Col>
                </a>
                <ul className="dropdown-menu">
                  {/* <li role="button">
                    <div
                      className="dropdown-item"
                      onClick={() => setIsPasswordChange(true)}
                    >
                      {t("change_password")}
                    </div>
                  </li> */}
                  <li role="button">
                    <div
                      className="dropdown-item"
                      onClick={() => logoutHandler()}
                    >
                      {t("logout")}
                    </div>
                  </li>
                </ul>
              </li>
            ) : (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  {t("signin_up")}
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/login">
                      {t("signin")}
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/signUp">
                      {t("signup")}
                    </Link>
                  </li>
                </ul>
              </li>
            )}
          </ul>
          {/* <i className="bi bi-list mobile-nav-toggle"></i> */}
          <i
            className="bi bi-list mobile-nav-toggle"
            onClick={toggleMobileMenu}
          ></i>
          {mobileMenuVisible && (
            <div
              className="position-absolute"
              style={{ top: "50px", right: "-20px", width: "50vw" }}
            >
              <div className="position-relative d-flex flex-column bg-white">
                <div>
                  {!props.isAuthorized ||
                  (props.isAuthorized as any)?.roles === "CUSTOMER" ? (
                    <a
                      className={`nav-link scrollto ${
                        props.title === "home" && "active"
                      }`}
                      role="button"
                      onClick={() => navigate("/")}
                    >
                      {t("home")}
                    </a>
                  ) : (
                    props.isAuthorized && (
                      <a
                        className={`nav-link scrollto ${
                          props.title === "home" && "active"
                        }`}
                        role="button"
                        onClick={() =>
                          navigate(
                            `/${(
                              (props.isAuthorized as any)?.roles as any
                            ).toLowerCase()}`
                          )
                        }
                      >
                        {t("dashboard")}
                      </a>
                    )
                  )}
                </div>
                <div>
                  <a
                    className={`nav-link scrollto ${
                      props.title === "about" && "active"
                    }`}
                    role="button"
                    onClick={() => navigate("/about")}
                  >
                    {t("aboutus")}
                  </a>
                </div>
                <div>
                  <a
                    className={`nav-link scrollto ${
                      props.title === "packages" && "active"
                    }`}
                    role="button"
                    onClick={() => navigate("/packages")}
                  >
                    {t("services")}
                  </a>
                </div>
                <div>
                  <a
                    className={`nav-link scrollto ${
                      props.title === "faq" && "active"
                    }`}
                    role="button"
                    onClick={() => navigate("/faq")}
                  >
                    {t("FAQ")}
                  </a>
                </div>
                <div>
                  <a
                    className={`nav-link scrollto ${
                      props.title === "contact" && "active"
                    }`}
                    role="button"
                    onClick={() => navigate("/contact")}
                  >
                    {t("contactus")}
                  </a>
                </div>
                <div
                  className="position-relative"
                  style={{ paddingRight: "50px" }}
                >
                  <a
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    {i18n.language.toLowerCase() === "en"
                      ? "English"
                      : i18n.language.toLowerCase() === "hat"
                      ? "Haitian"
                      : i18n.language.toLowerCase() === "spa"
                      ? "Spanish"
                      : "French"}
                  </a>
                  <div className="position-absolute bottom-0">
                    <ul className="dropdown-menu">
                      <li
                        className="dropdown-item"
                        role="button"
                        onClick={() => languageChangeHandler("en")}
                      >
                        English
                      </li>
                      <li
                        className="dropdown-item"
                        role="button"
                        onClick={() => languageChangeHandler("spa")}
                      >
                        Spanish
                      </li>
                      <li
                        className="dropdown-item"
                        role="button"
                        onClick={() => languageChangeHandler("fr")}
                      >
                        French
                      </li>
                      <li
                        className="dropdown-item"
                        role="button"
                        onClick={() => languageChangeHandler("hat")}
                      >
                        Haitian
                      </li>
                    </ul>
                  </div>
                </div>
                <div style={{ paddingRight: "50px" }}>
                  {/* Header Auth Avatar */}
                  {props.isAuthorized ? (
                    <div>
                      <a
                        className="nav-link dropdown-toggle"
                        role="button"
                        data-bs-toggle="dropdown"
                      >
                        <Col xs={6} md={4}>
                          <img
                            src={testAvatar}
                            style={{
                              width: "48px",
                              height: "48px",
                              borderRadius: "50%",
                            }}
                            alt="Logo"
                          />
                        </Col>
                      </a>
                      <ul className="dropdown-menu">
                        {/* <li>
                          <div
                            className="dropdown-item"
                            role="button"
                            onClick={() => setIsPasswordChange(true)}
                          >
                            {t("change_password")}
                          </div>
                        </li> */}
                        <li>
                          <div
                            className="dropdown-item"
                            role="button"
                            onClick={() => logoutHandler()}
                          >
                            {t("logout")}
                          </div>
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <div>
                      <a
                        className="nav-link dropdown-toggle"
                        role="button"
                        data-bs-toggle="dropdown"
                      >
                        {t("signin_up")}
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <Link className="dropdown-item" to="/login">
                            {t("signin")}
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/signUp">
                            {t("signup")}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
      {isPasswordChange === true && 
        <div className="centered-div">
          <div className="p-4">
            <div className="form-group">
              <h4>{t("reset_password")}</h4>
              <div className="pt-3">
                <label htmlFor="password1" className="sr-only">
                  {t("current_password")}
                </label>
                <input
                  type="password"
                  name="password1"
                  id="password1"
                  className="form-control"
                  placeholder={t("new_password")}
                  value={currentPassword}
                  onChange={(ev) => setCurrentPassword(ev.target.value)}
                />
              </div>
              <div className="py-2">
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
              </div>
              <div className="py-2">
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
              </div>
              <div className="py-2" style={{ textAlign: "center" }}>
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
              </div>
              <div className="text-danger">{resetPasswordNote}</div>
            </div>
          </div>
        </div>
      }
    </header>
  );
}
