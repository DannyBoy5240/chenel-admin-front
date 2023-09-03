import React from "react";
import "./auth.css";

export default function Login() {
  return (
    <main className="d-flex align-items-center py-md-0">
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
                  <input
                    name="login"
                    id="login"
                    className="btn btn-block login-btn mb-4"
                    type="button"
                    value="Login"
                  />
                </form>
                <a href="#!" className="forgot-password-link">
                  Forgot password?
                </a>
                <p className="login-card-footer-text">
                  Don't have an account?{" "}
                  <a href="2.html" className="text-reset">
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
    </main>
  );
}
