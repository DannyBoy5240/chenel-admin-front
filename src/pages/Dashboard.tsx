import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Carousel } from "react-bootstrap";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import jwt_decode from "jwt-decode";

import { useTranslation } from "react-i18next";

interface Props {
  auth: any;
}
function Dashboard(props: Props) {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { t, i18n } = useTranslation();

  // authorization
  const decoded_token = props.auth.token ? jwt_decode(props.auth.token) : null;
  const isAuthorized = decoded_token && (decoded_token as any).user;

  const handleSelect = (selectedIndex: any, e: any) => {
    setIndex(selectedIndex);
  };

  // payment handling
  const paymentHandler = (method: number) => {
    if (!isAuthorized) {
      navigate("/login");
      return;
    }
    // payment integration
    navigate("/packages");
  };

  return (
    <div className="h-100" style={{ backgroundColor: "#f4fbfe", overflowY: "auto" }}>
      <Header isAuthorized={isAuthorized} title="home" />
      <div style={{overflowY: "auto", height: "90vh"}}>
        <section id="hero" className="d-flex align-items-center">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-5 pt-4 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center p-4">
                <h1>{t("project_title")}</h1>
                <h2>{t("project_subtitle")}</h2>
                <div style={{ marginBottom: "10px" }}>
                  <a onClick={() => navigate("/contact")} className="btn-get-started scrollto">
                    {t("call_to_us")}
                  </a>
                </div>
                <div className="row" style={{ fontSize: "14px" }}>
                  <div className="col-lg-12" style={{ textAlign: "justify" }}>
                    {t("project_summary")}
                  </div>
                </div>
              </div>
              <div className="col-lg-7 order-1 order-lg-2 hero-img">
                <div className="pt-5 pb-3">{t("project_summary_beta")}</div>

                <Carousel
                  activeIndex={index}
                  onSelect={handleSelect}
                  className="testimonials"
                >
                  <Carousel.Item interval={3000}>
                    <div className="row">
                      <div className="col-4 d-flex flex-column justify-content-center align-items-center flex-wrap">
                        <img
                          src="assets/img/testimonials/testimonials-1.jpg"
                          className="testimonial-img"
                          alt=""
                        />
                        <h4>Wiberson Delva</h4>
                      </div>
                      <div className="col-8 d-flex flex-column justify-content-center align-items-center flex-wrap">
                        <p>
                          I am genuinely overjoyed with how everything is
                          unfolding. Each day, I offer my heartfelt prayers of
                          gratitude to God for the staff. Truly, words cannot
                          capture the depth of my happiness and gratitude for
                          having this family by my side here.
                        </p>
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item interval={3000}>
                    <div className="row">
                      <div className="col-4 d-flex flex-column justify-content-center align-items-center flex-wrap">
                        <img
                          src="assets/img/testimonials/testimonials-1.jpg"
                          className="testimonial-img"
                          alt=""
                        />
                        <h4>Jean Louis Estimable</h4>
                      </div>
                      <div className="col-8 d-flex flex-column justify-content-center align-items-center flex-wrap">
                        <p>
                          When I first arrived in the US, I was without a work
                          permit. But today, thanks to Chenel Super Service, I
                          proudly stand as a US Citizen with my wife and children
                          by my side.
                        </p>
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item interval={3000}>
                    <div className="row">
                      <div className="col-4 d-flex flex-column justify-content-center align-items-center flex-wrap">
                        <img
                          src="assets/img/testimonials/testimonials-1.jpg"
                          className="testimonial-img"
                          alt=""
                        />
                        <h4>Laniese Francois</h4>
                      </div>
                      <div className="col-8 d-flex flex-column justify-content-center align-items-center flex-wrap">
                        <p>
                          Thank you so much. I don't regret choosing you for your
                          services.
                        </p>
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item interval={3000}>
                    <div className="row">
                      <div className="col-4 d-flex flex-column justify-content-center align-items-center flex-wrap">
                        <img
                          src="assets/img/testimonials/testimonials-1.jpg"
                          className="testimonial-img"
                          alt=""
                        />
                        <h4>Bermane Rene</h4>
                      </div>
                      <div className="col-8 d-flex flex-column justify-content-center align-items-center flex-wrap">
                        <p>
                          These individuals provide excellent service in asylum
                          cases. Even in setting up appointments, they are
                          exceptional. In fact, they handled my asylum process.
                        </p>
                      </div>
                    </div>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="services section-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div
                  className="icon-box"
                  role="button"
                  onClick={() => paymentHandler(1)}
                >
                  <div className="icon"></div>
                  <h4 className="title">
                    <a href="">{t("simple_asylum_title")}</a>
                  </h4>
                  <div className="description">
                    <ul>
                      <li>{t("simple_asylum_item1")}</li>
                      <li>{t("simple_asylum_item2")}</li>
                      <li>{t("simple_asylum_item3")}</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="icon-box"
                  role="button"
                  onClick={() => paymentHandler(2)}
                >
                  <div className="icon"></div>
                  <h4 className="title">
                    <a href="">{t("advanced_asylum_title")}</a>
                  </h4>
                  <div className="description">
                    <ul>
                      <li>{t("advanced_asylum_item1")}</li>
                      <li>{t("advanced_asylum_item2")}</li>
                      <li>{t("advanced_asylum_item3")}</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6" data-wow-delay="0.1s">
                <div
                  className="icon-box"
                  role="button"
                  onClick={() => paymentHandler(3)}
                >
                  <div className="icon"></div>
                  <h4 className="title">
                    <a href="">{t("accompained_asylum_title")}</a>
                  </h4>
                  <div className="description">
                    <ul>
                      <li>{t("accompained_asylum_item1")}</li>
                      <li>{t("accompained_asylum_item2")}</li>
                      <li>{t("accompained_asylum_item3")}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state: any) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Dashboard);
