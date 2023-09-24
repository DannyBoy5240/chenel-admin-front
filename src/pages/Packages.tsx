import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { BACKEND_URL } from "../constants";

import axios from "axios";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import jwt_decode from "jwt-decode";

// stripe payment
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { useTranslation } from "react-i18next";

interface Props {
  auth: any;
}
function Packages(props: Props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { t, i18n } = useTranslation();

  // authorization
  const decoded_token =
    props.auth && props.auth.token ? jwt_decode(props.auth.token) : null;
  const isAuthorized = decoded_token && (decoded_token as any).user;

  // package selection
  const [hoveredElement, setHoveredElement] = React.useState(0);
  const handleMouseEnter = (elementId: number) => {
    setHoveredElement(elementId);
  };
  const handleMouseLeave = () => {
    setHoveredElement(0);
  };

  const paymentHandler = async (method: number) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(
        `${BACKEND_URL}/stripepayment/create-checkout-session`,
        {},
        config
      );
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <section id="about" className="about">
      <Header isAuthorized={isAuthorized} title="packages" />
      <div className="container">
        <div className="row">
          <div className="col-lg-4 d-flex package">
            <Card
              style={{
                border:
                  hoveredElement === 1
                    ? "3px solid cadetblue"
                    : "3px solid gray",
              }}
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
            >
              <Card.Img
                variant="top"
                src="http://localhost:3000/assets/img/p1.jpg"
              />
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  <h2>{t("simple_asylum")}</h2>
                  <h4>
                    <sup>$</sup>799.00<span> / {t("month")}</span>
                  </h4>
                </Card.Title>
                <Card.Text>
                  <ul>
                    <li>{t("simple_asylum_item1")}</li>
                    <li>{t("simple_asylum_item2")}</li>
                    <li>{t("simple_asylum_item3")}</li>
                    <br></br>
                  </ul>
                </Card.Text>
                <div
                  style={{
                    textAlign: "center",
                    position: "absolute",
                    bottom: "10px",
                    width: "100%",
                  }}
                >
                  <Button variant="primary" onClick={() => paymentHandler(1)}>
                    {t("select_plan")}
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 d-flex package">
            <Card
              style={{
                border:
                  hoveredElement === 2
                    ? "3px solid cadetblue"
                    : "3px solid gray",
              }}
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
            >
              <Card.Img
                variant="top"
                src="http://localhost:3000/assets/img/p2.jpg"
              />
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  <h2>{t("advanced_asylum")}</h2>
                  <h4>
                    <sup>$</sup>999.00<span> / {t("month")}</span>
                  </h4>
                </Card.Title>
                <Card.Text>
                  <ul>
                    <li>{t("advanced_asylum_item1")}</li>
                    <li>{t("advanced_asylum_item2")}</li>
                    <li>{t("advanced_asylum_item3")}</li>
                  </ul>
                </Card.Text>
                <div
                  style={{
                    textAlign: "center",
                    position: "absolute",
                    bottom: "10px",
                    width: "100%",
                  }}
                >
                  <Button variant="primary" onClick={() => paymentHandler(2)}>
                    {t("select_plan")}
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 d-flex package">
            <Card
              style={{
                border:
                  hoveredElement === 3
                    ? "3px solid cadetblue"
                    : "3px solid gray",
              }}
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={handleMouseLeave}
            >
              <Card.Img
                variant="top"
                src="http://localhost:3000/assets/img/p3.jpg"
              />
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  <h2>{t("accompanied_asylum")}</h2>
                  <h4>
                    <sup>$</sup>1,299.00<span> / {t("month")}</span>
                  </h4>
                </Card.Title>
                <Card.Text className="pb-4">
                  <ul>
                    <li>{t("accompained_asylum_item1")}</li>
                    <li>{t("accompained_asylum_item2")}</li>
                    <li>{t("accompained_asylum_item3")}</li>
                  </ul>
                </Card.Text>
                <div
                  style={{
                    textAlign: "center",
                    position: "absolute",
                    bottom: "10px",
                    width: "100%",
                  }}
                >
                  <Button variant="primary" onClick={() => paymentHandler(3)}>
                    {t("select_plan")}
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

Packages.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state: any) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Packages);
