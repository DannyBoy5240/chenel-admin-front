import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image, Carousel } from "react-bootstrap";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import FAQ from "./pages/FAQ";
import AboutUs from "./pages/AboutUs";
import Packages from "./pages/Packages";
import BlogPage from "./pages/Blog";

import WriterDashboard from "./pages/writer";
import ManagerDashboard from "./pages/manager/ManagerDashboard";
import ManagerWriterProfile from "./pages/manager/ManagerWriterProfile";
import Userinfo from "./pages/Userinfo";
import WriterProfiles from "./pages/profiles/WriterProfiles";

function App() {
  return (
    <Router>
      <div
        className="position-relative vh-100 overflow-hidden"
        style={{ fontFamily: "Dosis" }}
      >
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Header />
                <Dashboard />
              </div>
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signIn" element={<Login />} />
          <Route path="/signUp" element={<Register />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/blog" element={<BlogPage />} />

          <Route path="/manager/" element={<ManagerDashboard />} />
          <Route path="/manager/writer" element={<ManagerWriterProfile />} />
          <Route path="/writer/" element={<WriterDashboard />} />
          <Route path="/Userinfo/" element={<Userinfo />} />

          <Route path="/profiles/" element={<WriterProfiles />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
