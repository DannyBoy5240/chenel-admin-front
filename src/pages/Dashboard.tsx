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
    // if (!isAuthorized) {
    //   navigate("/login");
    //   return;
    // }
    // payment integration
    navigate("/packages");
  };

  return (
    <div
      className="h-100 d-flex flex-column"
      style={{ backgroundColor: "#f4fbfe" }}
    >
      <Header isAuthorized={isAuthorized} title="home" />
      <div className="flex-grow-1">
        <section id="hero" className="d-flex align-items-center pb-4">
          <div className="container">
            <div className="row justify-content-between">
              {/* <div className="col-lg-5 pt-4 pt-lg-0 order-1 d-flex flex-column justify-content-center p-4"> */}
              <div className="col-lg-5 order-1 d-flex flex-column justify-content-center">
                <h1>{t("project_title")}</h1>
                <h2>{t("project_subtitle")}</h2>
                <div style={{ marginBottom: "16px" }} role="button">
                  <a
                    onClick={() => navigate("/contact")}
                    className="btn-get-started scrollto"
                  >
                    {t("contact_us")}
                  </a>
                </div>
                <div className="row" style={{ fontSize: "17px" }}>
                  <div
                    className="col-lg-12"
                    style={{ textAlign: "justify" }}
                    dangerouslySetInnerHTML={{ __html: t("project_summary") }}
                  ></div>
                </div>
                <div
                  className="pt-5 pb-3 d-lg-none"
                  style={{ textAlign: "justify" }}
                >
                  {t("project_summary_beta")}
                </div>
              </div>
              <div className="col-lg-7 order-2 hero-img">
                <div
                  className="py-4 d-none d-lg-block"
                  style={{ textAlign: "justify", fontSize: "17px" }}
                >
                  {t("project_summary_beta")}
                </div>

                <Carousel
                  activeIndex={index}
                  onSelect={handleSelect}
                  className="testimonials"
                >
                  <Carousel.Item interval={3000}>
                    <div className="row">
                      <div className="col-12 col-md-4 col-lg-3 d-flex flex-column justify-content-center align-items-center flex-wrap">
                        <img
                          src="assets/img/testimonials/testimonials-1.jpg"
                          className="testimonial-img"
                          alt=""
                        />
                        <h4>Wiberson</h4>
                      </div>
                      <div className="col-12 col-md-8 col-lg-9 d-flex flex-column justify-content-center align-items-center flex-wrap">
                        <p
                          style={{ textAlign: "justify" }}
                          className="review-box"
                        >
                          I'm ecstatic about the way things are unfolding. Every
                          day, I offer heartfelt prayers of gratitude to God for
                          our incredible staff. It's impossible to put into
                          words the depth of my happiness and appreciation for
                          having this incredible family by my side.
                        </p>
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item interval={3000}>
                    <div className="row">
                      <div className="col-12 col-md-4 col-lg-3 d-flex flex-column justify-content-center align-items-center flex-wrap">
                        <img
                          src="assets/img/testimonials/testimonials-2.jpg"
                          className="testimonial-img"
                          alt=""
                        />
                        <h4>Bermane</h4>
                      </div>
                      <div className="col-12 col-md-8 col-lg-9 d-flex flex-column justify-content-center align-items-center flex-wrap">
                        <p
                          style={{ textAlign: "justify" }}
                          className="review-box"
                        >
                          Upon my arrival in the US without a work permit,
                          uncertainty loomed. Thanks to Chenel Super Service,
                          I'm now a proud US Citizen, joyfully reunited with my
                          wife and children. Immensely grateful for this
                          life-changing transformation!
                        </p>
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item interval={3000}>
                    <div className="row">
                      <div className="col-12 col-md-4 col-lg-3 d-flex flex-column justify-content-center align-items-center flex-wrap">
                        <img
                          src="assets/img/testimonials/testimonials-3.jpg"
                          className="testimonial-img"
                          alt=""
                        />
                        <h4>Estimable</h4>
                      </div>
                      <div className="col-12 col-md-8 col-lg-9 d-flex flex-column justify-content-center align-items-center flex-wrap">
                        <p
                          style={{ textAlign: "justify" }}
                          className="review-box"
                        >
                          I'm thrilled with the exceptional experience I've had
                          here. The dedicated staff's unwavering commitment to
                          excellence, warm support, and professionalism have
                          made every moment memorable. I wholeheartedly
                          recommend this top-notch place.
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
            <div className="row justify-content-center">
              <div className="text-center">
                <h3>
                  <b>{t("choose_your_package")}</b>
                </h3>
              </div>
              <div className="col-lg-4 col-md-6 py-2">
                <div
                  className="icon-box"
                  role="button"
                  onClick={() => paymentHandler(1)}
                >
                  <div className="icon"></div>
                  <h4 className="title">
                    <a href="">{t("simple_asylum")}</a>
                  </h4>
                  <div
                    className="description"
                    style={{ height: "252px", marginLeft: "0px" }}
                  >
                    <ul>
                      <li>{t("simple_asylum_item1")}</li>
                      <li>{t("simple_asylum_item2")}</li>
                      <li>{t("simple_asylum_item3")}</li>
                      <li>{t("simple_asylum_item4")}</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 py-2">
                <div
                  className="icon-box"
                  role="button"
                  onClick={() => paymentHandler(2)}
                >
                  <div className="icon"></div>
                  <h4 className="title">
                    <a href="">{t("advanced_asylum")}</a>
                  </h4>
                  <div
                    className="description"
                    style={{ height: "252px", marginLeft: "0px" }}
                  >
                    <ul>
                      {t("advanced_asylum_item1")}
                      <b> Plus:</b>
                      <li>{t("advanced_asylum_item2")}</li>
                      <li>{t("advanced_asylum_item3")}</li>
                      <li>{t("advanced_asylum_item4")}</li>
                      <li>{t("advanced_asylum_item5")}</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 py-2" data-wow-delay="0.1s">
                <div
                  className="icon-box"
                  role="button"
                  onClick={() => paymentHandler(3)}
                >
                  <div className="icon"></div>
                  <h4 className="title">
                    <a href="">{t("accompanied_asylum")}</a>
                  </h4>
                  <div
                    className="description"
                    style={{ height: "252px", marginLeft: "0px" }}
                  >
                    <ul>
                      {t("accompained_asylum_item1")}
                      <b> Plus:</b>
                      <li>{t("accompained_asylum_item2")}</li>
                      <li>{t("accompained_asylum_item3")}</li>
                      <li>{t("accompained_asylum_item4")}</li>
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
