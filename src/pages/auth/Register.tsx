import React from "react";
import "./auth.css";

export default function Register() {
  return (
    <main className="d-flex align-items-center py-md-0">
      <div className="container">
        <div className="card register-card">
          <div className="row no-gutters">
            <div className="col-md-7">
              <div className="card-body">
                {/* <div className="brand-wrapper">
                  <img
                    src="http://localhost:3000/assets/img/logo.png"
                    alt="logo"
                    className="logo"
                  />
                </div> */}
                <p className="register-card-description">
                  Sign up to your account
                </p>
                <form action="#!">
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
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="sr-only">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                      placeholder="John Doe"
                    />
                  </div>
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
                    />
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor="password" className="sr-only">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      name="password2"
                      id="password2"
                      className="form-control"
                      placeholder="***********"
                    />
                  </div>
                  <input
                    name="register"
                    id="register"
                    className="btn btn-block register-btn mb-4"
                    type="button"
                    value="register"
                  />
                </form>
                <p className="register-card-footer-text">
                  You already have an account?{" "}
                  <a href="/signIn" className="text-reset">
                    Login here
                  </a>
                </p>
                <nav
                  className="register-card-footer-nav"
                  style={{ textAlign: "center" }}
                >
                  <a href="#!" style={{ textDecoration: "none" }}>
                    Terms of use.
                  </a>{" "}
                  <a href="#!">Privacy policy</a>
                </nav>
              </div>
            </div>
            <div className="col-md-5">
              <img
                src="http://localhost:3000/assets/img/signUp.jpg"
                alt="register"
                // className="login-card-img"
                width={555}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
