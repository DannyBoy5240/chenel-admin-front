import React from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import avatar_0 from "../assets/img/chenel_pierre.jpg";
import avatar_1 from "../assets/img/m_y_francois.jpg";
import avatar_2 from "../assets/img/yani_h.jpg";
import avatar_3 from "../assets/img/minelson_a.jpg";

import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import jwt_decode from "jwt-decode";

import { useTranslation } from "react-i18next";

interface Props {
  auth: any;
}
function AboutUs(props: Props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { t, i18n } = useTranslation();

  // authorization
  const decoded_token = props.auth.token ? jwt_decode(props.auth.token) : null;
  const isAuthorized = decoded_token && (decoded_token as any).user;

  return (
    <div
      className="h-100 d-flex flex-column"
      style={{ backgroundColor: "#f4fbfe" }}
    >
      <Header isAuthorized={isAuthorized} title="about" />
      <div className="flex-grow-1">
        <section
          id="team"
          className="team section-bg h-100 d-flex flex-column"
          style={{ backgroundColor: "#f4fbfe", padding: "100px 0px 0px 0px" }}
        >
          <div className="container">
            <div className="section-title">
              <h4>
                <i>{t("about_mission")}</i>
              </h4>
            </div>

            <div className="row justify-content-center align-items-center">
              <div className="col-lg-5 row">
                <div className="col-lg-6 col-md-6 d-flex align-items-stretch justify-content-center">
                  <div className="member">
                    <div className="member-img">
                      <img
                        src={avatar_0}
                        className="img-about-avatar-sz"
                        alt=""
                      />
                      <div className="social">
                        <a href="">
                          <i className="bi bi-twitter"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-facebook"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-instagram"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-linkedin"></i>
                        </a>
                      </div>
                    </div>
                    <div className="member-info">
                      <h4>Chenel Pierre</h4>
                      <span>President</span>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 d-flex align-items-stretch justify-content-center">
                  <div className="member">
                    <div className="member-img">
                      <img
                        src={avatar_1}
                        className="img-about-avatar-sz"
                        alt=""
                      />
                      <div className="social">
                        <a href="">
                          <i className="bi bi-twitter"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-facebook"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-instagram"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-linkedin"></i>
                        </a>
                      </div>
                    </div>
                    <div className="member-info">
                      <h4>M. Y. Francois</h4>
                      <span>Office Manager</span>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 d-flex align-items-stretch justify-content-center">
                  <div className="member">
                    <div className="member-img">
                      <img
                        src={avatar_2}
                        className="img-about-avatar-sz"
                        alt=""
                      />
                      <div className="social">
                        <a href="">
                          <i className="bi bi-twitter"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-facebook"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-instagram"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-linkedin"></i>
                        </a>
                      </div>
                    </div>
                    <div className="member-info">
                      <h4>Yani H</h4>
                      <span>Case Manager</span>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 d-flex align-items-stretch justify-content-center">
                  <div className="member">
                    <div className="member-img">
                      <img
                        src={avatar_3}
                        className="img-about-avatar-sz"
                        alt=""
                      />
                      <div className="social">
                        <a href="">
                          <i className="bi bi-twitter"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-facebook"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-instagram"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-linkedin"></i>
                        </a>
                      </div>
                    </div>
                    <div className="member-info">
                      <h4>Minelson A.</h4>
                      <span>Social Media Expert</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 px-4">
                <p
                  dangerouslySetInnerHTML={{ __html: t("about_history_1") }}
                  style={{ textAlign: "justify" }}
                ></p>
                <p
                  dangerouslySetInnerHTML={{ __html: t("about_history_2") }}
                  style={{ textAlign: "justify" }}
                ></p>
                <p
                  dangerouslySetInnerHTML={{ __html: t("about_history_3") }}
                  style={{ textAlign: "justify" }}
                ></p>
                <p
                  dangerouslySetInnerHTML={{ __html: t("about_history_4") }}
                  style={{ textAlign: "justify" }}
                ></p>
              </div>
            </div>
          </div>
          <div className="section-title">
            <p>
              <i>{t("about_mission_summary")}</i>
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

AboutUs.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state: any) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(AboutUs);
