import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

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

import p1image from "../assets/assets/img/p1.jpg";
import p2image from "../assets/assets/img/p2.jpg";
import p3image from "../assets/assets/img/p3.jpg";

import ticktokIcon from "../assets/icons/ticktok_ico.png";
import facebookIcon from "../assets/icons/facebook_ico.png";
import instagramIcon from "../assets/icons/instagram_ico.png";
import youtubeIcon from "../assets/icons/youtube_ico.png";

import { useTranslation } from "react-i18next";

interface Props {
  auth: any;
}
function Packages(props: Props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const payment_success = useParams<{ success?: string }>().success;

  // Get the current URL
  var currentURL = window.location.href;
  // Use the URLSearchParams API to parse the URL
  var url = new URL(currentURL);
  var params = new URLSearchParams(url.search);
  // Get the value of the "success" parameter
  var payment_success = params.get("success");

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

  useEffect(() => {
    console.log("payment handle status --> ", payment_success);
    if (payment_success)
      navigate("/signUp");
  }, [])

  const paymentHandler = async (method: number) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(
        `${BACKEND_URL}/stripepayment/create-checkout-session`,
        {method},
        config
      );
      window.location.href = res.data.url;
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <div className="h-100 d-flex flex-column" style={{ backgroundColor: "#f4fbfe" }}>
      <Header isAuthorized={isAuthorized} title="packages" />
      <div className="flex-grow-1 align-self-center">
        <div className="container" style={{paddingTop: "100px"}}>
          <div className="row">
            <div className="col-md-4 px-3 d-flex package">
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
                  src={p1image}
                />
                <Card.Body>
                  <Card.Title style={{ textAlign: "center" }}>
                    <h3>{t("simple_asylum")}</h3>
                    <h5>
                      <sup>$</sup>799.00<span> / {t("month")}</span>
                    </h5>
                  </Card.Title>
                  <div>
                    <ul>
                      <li>{t("simple_asylum_item1")}</li>
                      <li>{t("simple_asylum_item2")}</li>
                      <li>{t("simple_asylum_item3")}</li>
                      <br></br>
                    </ul>
                  </div>
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
            <div className="col-md-4 px-3 d-flex package">
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
                  src={p2image}
                />
                <Card.Body>
                  <Card.Title style={{ textAlign: "center" }}>
                    <h3>{t("advanced_asylum")}</h3>
                    <h5>
                      <sup>$</sup>999.00<span> / {t("month")}</span>
                    </h5>
                  </Card.Title>
                  <div>
                    <ul>
                      <li>{t("advanced_asylum_item1")}</li>
                      <li>{t("advanced_asylum_item2")}</li>
                      <li>{t("advanced_asylum_item3")}</li>
                    </ul>
                  </div>
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
            <div className="col-md-4 px-3 d-flex package">
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
                  src={p3image}
                />
                <Card.Body>
                  <Card.Title style={{ textAlign: "center" }}>
                    <h3>{t("accompanied_asylum")}</h3>
                    <h5>
                      <sup>$</sup>1,299.00<span> / {t("month")}</span>
                    </h5>
                  </Card.Title>
                  <div className="pb-4">
                    <ul>
                      <li>{t("accompained_asylum_item1")}</li>
                      <li>{t("accompained_asylum_item2")}</li>
                      <li>{t("accompained_asylum_item3")}</li>
                    </ul>
                  </div>
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
        {/* Social Media Links */}
        {/* <div className="d-flex justify-content-around py-4">
          <div role="button">
            <img src={ticktokIcon} className="avatar-default-sz" />
          </div>
          <div role="button">
            <img src={facebookIcon} className="avatar-default-sz" />
          </div>
          <div role="button">
            <img src={instagramIcon} className="avatar-default-sz" />
          </div>
          <div role="button">
            <img src={youtubeIcon} className="avatar-default-sz" />
          </div>
        </div> */}
      </div>
      <Footer />
    </div>
  );
}

Packages.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state: any) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Packages);
