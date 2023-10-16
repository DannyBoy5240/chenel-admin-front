import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";

import logoImage from "../../assets/img/logo.png";
import testAvatar from "../../assets/img/avatar.jpg";

import { useDispatch } from "react-redux";
import { logout } from "../../actions/auth";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import jwt_decode from "jwt-decode";

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
              {(props.isAuthorized as any)?.roles === "CUSTOMER" ? (
                <a
                  className={`nav-link scrollto ${
                    props.title === "home" && "active"
                  }`}
                  onClick={() => navigate("/")}
                >
                  {t("home")}
                </a>
              ) : (
                <a
                  className={`nav-link scrollto ${
                    props.title === "home" && "active"
                  }`}
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
              )}
            </li>
            <li>
              <a
                className={`nav-link scrollto ${
                  props.title === "about" && "active"
                }`}
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
                  <li>
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
                  <a
                    className={`nav-link scrollto ${
                      props.title === "home" && "active"
                    }`}
                    onClick={() => navigate("/")}
                  >
                    {t("home")}
                  </a>
                </div>
                <div>
                  <a
                    className={`nav-link scrollto ${
                      props.title === "about" && "active"
                    }`}
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
                        <li>
                          <div
                            className="dropdown-item"
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
    </header>
  );
}
