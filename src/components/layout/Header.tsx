import React from "react";
import { Dropdown, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Col from 'react-bootstrap/Col';

export default function Header() {
  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center justify-content-between">
        <a href="/" className="logo">
          <Image
            src="http://localhost:3000/assets/img/logo.png"
            alt=""
            className="img-fluid"
          />
        </a>

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a className="nav-link scrollto active" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="/about">
                About US
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="/blog">
                Blog
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="/packages">
                Packages
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="/faq">
                FAQ
              </a>
            </li>
            <li>
              <Link className="nav-link scrollto" to="/contact">
                Contact US
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
              >
                Sign In
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/signIn">
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

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
              >
                <Col xs={6} md={4}>
                  <Image src="assets/img/avatar.jpg" width={40} height={45} roundedCircle />
                </Col>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/signIn">
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
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}
