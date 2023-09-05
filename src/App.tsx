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

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signIn" element={<Login />} />
          <Route path="/signUp" element={<Register />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/blog" element={<BlogPage />} />

          <Route path="/writer/" element={<WriterDashboard />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
