import React from "react";
import { useNavigate } from "react-router-dom";

import Accordion from "react-bootstrap/Accordion";

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
function FAQ(props: Props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { t, i18n } = useTranslation();

  // authorization
  const decoded_token =
    props.auth && props.auth.token ? jwt_decode(props.auth.token) : null;
  const isAuthorized = decoded_token && (decoded_token as any).user;

  return (
    <div
      className="h-100 d-flex flex-column"
      style={{ backgroundColor: "#f4fbfe" }}
    >
      <Header isAuthorized={isAuthorized} title="faq" />
      <div className="flex-grow-1">
        <section id="faq" className="faq section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>F.A.Q</h2>
              <h3>{t("frequently_asked")}</h3>
              <p>{t("faq_summary")}</p>
            </div>

            <div className="row justify-content-center">
              <div className="col-xl-12">
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header style={{ fontFamily: "Helvetica" }}>
                      <b>{t("faq_qus_1")}</b>
                    </Accordion.Header>
                    <Accordion.Body
                      dangerouslySetInnerHTML={{ __html: t("faq_ans_1") }}
                      style={{ textAlign: "justify" }}
                    ></Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header style={{ fontFamily: "Helvetica" }}>
                      <b>{t("faq_qus_2")}</b>
                    </Accordion.Header>
                    <Accordion.Body
                      dangerouslySetInnerHTML={{ __html: t("faq_ans_2") }}
                      style={{ textAlign: "justify" }}
                    ></Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header style={{ fontFamily: "Helvetica" }}>
                      <b>{t("faq_qus_3")}</b>
                    </Accordion.Header>
                    <Accordion.Body
                      dangerouslySetInnerHTML={{ __html: t("faq_ans_3") }}
                      style={{ textAlign: "justify" }}
                    ></Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="3">
                    <Accordion.Header style={{ fontFamily: "Helvetica" }}>
                      <b>{t("faq_qus_4")}</b>
                    </Accordion.Header>
                    <Accordion.Body
                      dangerouslySetInnerHTML={{ __html: t("faq_ans_4") }}
                      style={{ textAlign: "justify" }}
                    ></Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header style={{ fontFamily: "Helvetica" }}>
                      <b>{t("faq_qus_5")}</b>
                    </Accordion.Header>
                    <Accordion.Body
                      dangerouslySetInnerHTML={{ __html: t("faq_ans_5") }}
                      style={{ textAlign: "justify" }}
                    ></Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion>
                  <Accordion.Item eventKey="5">
                    <Accordion.Header style={{ fontFamily: "Helvetica" }}>
                      <b>{t("faq_qus_6")}</b>
                    </Accordion.Header>
                    <Accordion.Body
                      dangerouslySetInnerHTML={{ __html: t("faq_ans_6") }}
                      style={{ textAlign: "justify" }}
                    ></Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion>
                  <Accordion.Item eventKey="6">
                    <Accordion.Header style={{ fontFamily: "Helvetica" }}>
                      <b>{t("faq_qus_7")}</b>
                    </Accordion.Header>
                    <Accordion.Body
                      dangerouslySetInnerHTML={{ __html: t("faq_ans_7") }}
                      style={{ textAlign: "justify" }}
                    ></Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion>
                  <Accordion.Item eventKey="7">
                    <Accordion.Header style={{ fontFamily: "Helvetica" }}>
                      <b>{t("faq_qus_8")}</b>
                    </Accordion.Header>
                    <Accordion.Body
                      dangerouslySetInnerHTML={{ __html: t("faq_ans_8") }}
                      style={{ textAlign: "justify" }}
                    ></Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion>
                  <Accordion.Item eventKey="8">
                    <Accordion.Header style={{ fontFamily: "Helvetica" }}>
                      <b>{t("faq_qus_9")}</b>
                    </Accordion.Header>
                    <Accordion.Body
                      dangerouslySetInnerHTML={{ __html: t("faq_ans_9") }}
                      style={{ textAlign: "justify" }}
                    ></Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion>
                  <Accordion.Item eventKey="9">
                    <Accordion.Header style={{ fontFamily: "Helvetica" }}>
                      <b>{t("faq_qus_10")}</b>
                    </Accordion.Header>
                    <Accordion.Body
                      dangerouslySetInnerHTML={{ __html: t("faq_ans_10") }}
                      style={{ textAlign: "justify" }}
                    ></Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion>
                  <Accordion.Item eventKey="10">
                    <Accordion.Header style={{ fontFamily: "Helvetica" }}>
                      <b>{t("faq_qus_11")}</b>
                    </Accordion.Header>
                    <Accordion.Body
                      dangerouslySetInnerHTML={{ __html: t("faq_ans_11") }}
                      style={{ textAlign: "justify" }}
                    ></Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion>
                  <Accordion.Item eventKey="11">
                    <Accordion.Header style={{ fontFamily: "Helvetica" }}>
                      <b>{t("faq_qus_12")}</b>
                    </Accordion.Header>
                    <Accordion.Body
                      dangerouslySetInnerHTML={{ __html: t("faq_ans_12") }}
                      style={{ textAlign: "justify" }}
                    ></Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion>
                  <Accordion.Item eventKey="12">
                    <Accordion.Header style={{ fontFamily: "Helvetica" }}>
                      <b>{t("faq_qus_13")}</b>
                    </Accordion.Header>
                    <Accordion.Body
                      dangerouslySetInnerHTML={{ __html: t("faq_ans_13") }}
                      style={{ textAlign: "justify" }}
                    ></Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion>
                  <Accordion.Item eventKey="13">
                    <Accordion.Header style={{ fontFamily: "Helvetica" }}>
                      <b>{t("faq_qus_14")}</b>
                    </Accordion.Header>
                    <Accordion.Body
                      dangerouslySetInnerHTML={{ __html: t("faq_ans_14") }}
                      style={{ textAlign: "justify" }}
                    ></Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion>
                  <Accordion.Item eventKey="14">
                    <Accordion.Header style={{ fontFamily: "Helvetica" }}>
                      <b>{t("faq_qus_15")}</b>
                    </Accordion.Header>
                    <Accordion.Body
                      dangerouslySetInnerHTML={{ __html: t("faq_ans_15") }}
                      style={{ textAlign: "justify" }}
                    ></Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion>
                  <Accordion.Item eventKey="15">
                    <Accordion.Header style={{ fontFamily: "Helvetica" }}>
                      <b>{t("faq_qus_16")}</b>
                    </Accordion.Header>
                    <Accordion.Body
                      dangerouslySetInnerHTML={{ __html: t("faq_ans_16") }}
                      style={{ textAlign: "justify" }}
                    ></Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion>
                  <Accordion.Item eventKey="16">
                    <Accordion.Header style={{ fontFamily: "Helvetica" }}>
                      <b>{t("faq_qus_17")}</b>
                    </Accordion.Header>
                    <Accordion.Body
                      dangerouslySetInnerHTML={{ __html: t("faq_ans_17") }}
                      style={{ textAlign: "justify" }}
                    ></Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion>
                  <Accordion.Item eventKey="17">
                    <Accordion.Header style={{ fontFamily: "Helvetica" }}>
                      <b>{t("faq_qus_18")}</b>
                    </Accordion.Header>
                    <Accordion.Body
                      dangerouslySetInnerHTML={{ __html: t("faq_ans_18") }}
                      style={{ textAlign: "justify" }}
                    ></Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion>
                  <Accordion.Item eventKey="18">
                    <Accordion.Header style={{ fontFamily: "Helvetica" }}>
                      <b>{t("faq_qus_19")}</b>
                    </Accordion.Header>
                    <Accordion.Body
                      dangerouslySetInnerHTML={{ __html: t("faq_ans_19") }}
                      style={{ textAlign: "justify" }}
                    ></Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion>
                  <Accordion.Item eventKey="19">
                    <Accordion.Header style={{ fontFamily: "Helvetica" }}>
                      <b>{t("faq_qus_20")}</b>
                    </Accordion.Header>
                    <Accordion.Body
                      dangerouslySetInnerHTML={{ __html: t("faq_ans_20") }}
                      style={{ textAlign: "justify" }}
                    ></Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion>
                  <Accordion.Item eventKey="20">
                    <Accordion.Header style={{ fontFamily: "Helvetica" }}>
                      <b>{t("faq_qus_21")}</b>
                    </Accordion.Header>
                    <Accordion.Body
                      dangerouslySetInnerHTML={{ __html: t("faq_ans_21") }}
                      style={{ textAlign: "justify" }}
                    ></Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

FAQ.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state: any) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(FAQ);
