import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import jwt_decode from "jwt-decode";

import axios from "axios";

import { useTranslation } from "react-i18next";
import { BACKEND_URL } from "../constants";

interface Props {
  auth: any;
}
function Contact(props: Props) {
  const { t, i18n } = useTranslation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [messageResult, setMessageResult] = useState("");

  // authorization
  const decoded_token =
    props.auth && props.auth.token ? jwt_decode(props.auth.token) : null;
  const isAuthorized = decoded_token && (decoded_token as any).user;

  const sendMessageHandler = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(
        `${BACKEND_URL}/users/contactus`,
        { name, email, subject, message },
        config
      );

      if (res.data.success) {
        console.log("message sent successfully!");
        setMessageResult(t("contact_message_result_succeed"));
      } else {
        console.log("message sent failed!");
        setMessageResult(t("contact_message_result_failed"));
      }
    } catch (err: any) {
      console.log(err.message);
    }

    setTimeout(() => {
      setMessageResult("");
    }, 5000);
  };

  return (
    <div
      className="h-100 d-flex flex-column"
      style={{ backgroundColor: "#f4fbfe" }}
    >
      <Header isAuthorized={isAuthorized} title="contact" />
      <div className="flex-grow-1">
        <section
          id="contact"
          className="contact h-100 d-flex flex-column"
          style={{
            padding: "100px 0px 0px 0px",
            overflowY: "auto",
            backgroundColor: "rgb(244, 251, 254);",
          }}
        >
          <div className="container">
            <div className="section-title" style={{ paddingTop: "20px" }}>
              <h2>{t("contact")}</h2>
            </div>
            <div>
              <iframe
                style={{ border: "0", width: "100%", height: "270px" }}
                // src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                src="https://www.google.com/maps/embed/v1/place?q=709+W+Main+St+%231,+Immokalee,+FL+34142&key=AIzaSyB_33--qCwuW0gqGY9ScKAzFeZiaBaRm70"
                frameBorder={0}
                allowFullScreen
                title="map"
              ></iframe>
            </div>
            <div className="row mt-3">
              <div className="col-lg-4">
                <div
                  className="info"
                  style={{ backgroundColor: "rgb(244, 251, 254)" }}
                >
                  <div
                    className="address"
                    role="button"
                    onClick={() =>
                      window.open(
                        "https://www.google.com/maps/place/709+W+Main+St+%231,+Immokalee,+FL+34142,+USA/@26.4181476,-81.4241072,17z/data=!3m1!4b1!4m5!3m4!1s0x88dba4210bde7cd9:0xf2fe7d4f777f7324!8m2!3d26.4181476!4d-81.4241072?entry=ttu",
                        "_blank"
                      )
                    }
                  >
                    <i className="bi bi-geo-alt"></i>
                    <h4>{t("location")}:</h4>
                    <p>709 W. Main Street</p>
                    <p>Unit 1</p>
                    <p>Immokalee FL, 34142</p>
                  </div>

                  <div className="email">
                    <i className="bi bi-envelope"></i>
                    <h4>{t("email")}:</h4>
                    <p>
                      <a href="mailto:Taxgration@gmail.com">
                        Taxgration@gmail.com
                      </a>
                    </p>
                  </div>

                  <div className="phone">
                    <i className="bi bi-phone"></i>
                    <h4>{t("call")}:</h4>
                    <p>
                      <a href="tel:+12396577000">+1 239-657-7000</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-8 mt-5 mt-lg-0">
                <div
                  role="form"
                  className="php-email-form"
                  style={{ backgroundColor: "rgb(244, 251, 254)" }}
                >
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder={t("your_name")}
                        value={name}
                        onChange={(ev) => setName(ev.target.value)}
                        required
                      />
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder={t("your_email")}
                        value={email}
                        onChange={(ev) => setEmail(ev.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder={t("subject")}
                      value={subject}
                      onChange={(ev) => setSubject(ev.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group mt-3">
                    <textarea
                      className="form-control"
                      name="message"
                      rows={5}
                      placeholder={t("message")}
                      value={message}
                      onChange={(ev) => setMessage(ev.target.value)}
                      required
                    ></textarea>
                  </div>
                  <div className="my-3">
                    <div className="loading">{t("loading")}</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      {t("your_message_sent_thank_you")}
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      className="btn btn-dark"
                      onClick={() => sendMessageHandler()}
                      disabled={email === ""}
                    >
                      {t("send_message")}
                    </button>
                  </div>
                  <div className="py-1 text-center">
                    <p>{messageResult}</p>
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

Contact.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state: any) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Contact);
