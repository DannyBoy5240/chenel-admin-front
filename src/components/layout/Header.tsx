import React from "react";
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

interface Props {
  isAuthorized: any;
  title: any;
  logout: any;
}
export default function Header(props: any) {
  // authorization
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    await dispatch(logout());
    navigate("/login");
  };

  return (
    <header id="header" className="fixed-top" style={{ padding: "0px" }}>
      <div className="container d-flex align-items-center justify-content-between">
        <a href="/" className="logo">
          <img
            src={logoImage}
            className="img-fluid"
            style={{ width: "80px" }}
            alt="Logo"
          />
        </a>

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a
                className={`nav-link scrollto ${
                  props.title === "home" && "active"
                }`}
                href="/"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className={`nav-link scrollto ${
                  props.title === "about" && "active"
                }`}
                href="/about"
              >
                About US
              </a>
            </li>
            {/* <li>
              <a className="nav-link scrollto" href="/blog">
                Blog
              </a>
            </li> */}
            <li>
              <a
                className={`nav-link scrollto ${
                  props.title === "packages" && "active"
                }`}
                href="/packages"
              >
                Services
              </a>
            </li>
            <li>
              <a
                className={`nav-link scrollto ${
                  props.title === "faq" && "active"
                }`}
                href="/faq"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                className={`nav-link scrollto ${
                  props.title === "contact" && "active"
                }`}
                href="/contact"
              >
                Contact US
              </a>
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
                      LogOut
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
                  Sign In/Up
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/login">
                      SignIn
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/signUp">
                      SignUp
                    </Link>
                  </li>
                </ul>
              </li>
            )}
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}
