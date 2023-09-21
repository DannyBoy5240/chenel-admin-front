import React, { Fragment, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image, Carousel } from "react-bootstrap";

// import Header from "./components/layout/Header";
// import Footer from "./components/layout/Footer";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import EmployeeRegister from "./pages/auth/EmployeeRegister";

import FAQ from "./pages/FAQ";
import AboutUs from "./pages/AboutUs";
import Packages from "./pages/Packages";
import BlogPage from "./pages/Blog";

// import WriterDashboard from "./pages/writer";
import Userinfo from "./pages/Userinfo";
// import WriterProfiles from "./pages/profiles/WriterProfiles";
// import Admin from "./pages/admin";
import ManagerDashboard from "./pages/manager/ManagerDashboard";
import ManagerWriterProfile from "./pages/manager/ManagerWriterProfile";
import Writerboard from "./pages/writers";

import AdminDashBoard from "./pages/admin/AdminDashboard";

// Redux
import { Provider, useSelector } from "react-redux";
import store from "./store/store";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/auth";

// import PrivateRoute from "./routing/PrivateRoute";
import { connect } from "react-redux";
import PropTypes from "prop-types";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <div
          className="position-relative vh-100 overflow-hidden"
          style={{ fontFamily: "Dosis" }}
        >
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<Register />} />
            <Route path="/signUp/Employee" element={<EmployeeRegister />} />

            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/blog" element={<BlogPage />} />

            <Route path="/" element={<Dashboard />} />
            <Route path="/manager/" element={<ManagerDashboard />} />
            <Route path="/manager/writer" element={<ManagerWriterProfile />} />
            <Route path="/writer/" element={<Writerboard />} />

            {/* <Route path="/writer/" element={<WriterDashboard />} /> */}
            <Route path="/userInfo/" element={<Userinfo />} />
            {/* <Route path="/profiles/" element={<WriterProfiles />} /> */}

            <Route path="/admin/" element={<AdminDashBoard />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
