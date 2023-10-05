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
    <div className="h-100 d-flex flex-column" style={{ backgroundColor: "#f4fbfe" }}>
      <Header isAuthorized={isAuthorized} title="faq" />
      <div className="flex-grow-1">
        <section id="faq" className="faq section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>F.A.Q</h2>
              <h3>
                {t("frequently_asked")}
                <span>{t("questions")}</span>
              </h3>
              <p>{t("faq_summary")}</p>
            </div>

            <div className="row justify-content-center">
              <div className="col-xl-12">
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>{t("faq_qus_1")}</Accordion.Header>
                    <Accordion.Body
                      dangerouslySetInnerHTML={{ __html: t("faq_ans_1") }}
                    ></Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>{t("faq_qus_2")}</Accordion.Header>
                    <Accordion.Body
                      dangerouslySetInnerHTML={{ __html: t("faq_ans_2") }}
                    ></Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>{t("faq_qus_3")}</Accordion.Header>
                    <Accordion.Body
                      dangerouslySetInnerHTML={{ __html: t("faq_ans_3") }}
                    ></Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>{t("faq_qus_4")}</Accordion.Header>
                    <Accordion.Body
                      dangerouslySetInnerHTML={{ __html: t("faq_ans_4") }}
                    ></Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>{t("faq_qus_5")}</Accordion.Header>
                    <Accordion.Body
                      dangerouslySetInnerHTML={{ __html: t("faq_ans_5") }}
                    ></Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion>
                  <Accordion.Item eventKey="5">
                    <Accordion.Header>{t("faq_qus_6")}</Accordion.Header>
                    <Accordion.Body
                      dangerouslySetInnerHTML={{ __html: t("faq_ans_6") }}
                    ></Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion>
                  <Accordion.Item eventKey="6">
                    <Accordion.Header>{t("faq_qus_7")}</Accordion.Header>
                    <Accordion.Body
                      dangerouslySetInnerHTML={{ __html: t("faq_ans_7") }}
                    ></Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion>
                  <Accordion.Item eventKey="7">
                    <Accordion.Header>{t("faq_qus_8")}</Accordion.Header>
                    <Accordion.Body
                      dangerouslySetInnerHTML={{ __html: t("faq_ans_8") }}
                    ></Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion>
                  <Accordion.Item eventKey="8">
                    <Accordion.Header>{t("faq_qus_9")}</Accordion.Header>
                    <Accordion.Body
                      dangerouslySetInnerHTML={{ __html: t("faq_ans_9") }}
                    ></Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion>
                  <Accordion.Item eventKey="9">
                    <Accordion.Header>{t("faq_qus_10")}</Accordion.Header>
                    <Accordion.Body
                      dangerouslySetInnerHTML={{ __html: t("faq_ans_10") }}
                    ></Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion>
                  <Accordion.Item eventKey="10">
                    <Accordion.Header>{t("faq_qus_11")}</Accordion.Header>
                    <Accordion.Body
                      dangerouslySetInnerHTML={{ __html: t("faq_ans_11") }}
                    ></Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion>
                  <Accordion.Item eventKey="11">
                    <Accordion.Header>{t("faq_qus_12")}</Accordion.Header>
                    <Accordion.Body
                      dangerouslySetInnerHTML={{ __html: t("faq_ans_12") }}
                    ></Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion>
                  <Accordion.Item eventKey="12">
                    <Accordion.Header>{t("faq_qus_13")}</Accordion.Header>
                    <Accordion.Body
                      dangerouslySetInnerHTML={{ __html: t("faq_ans_13") }}
                    ></Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion>
                  <Accordion.Item eventKey="13">
                    <Accordion.Header>{t("faq_qus_14")}</Accordion.Header>
                    <Accordion.Body
                      dangerouslySetInnerHTML={{ __html: t("faq_ans_14") }}
                    ></Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion>
                  <Accordion.Item eventKey="14">
                    <Accordion.Header>{t("faq_qus_15")}</Accordion.Header>
                    <Accordion.Body
                      dangerouslySetInnerHTML={{ __html: t("faq_ans_15") }}
                    ></Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion>
                  <Accordion.Item eventKey="15">
                    <Accordion.Header>{t("faq_qus_16")}</Accordion.Header>
                    <Accordion.Body
                      dangerouslySetInnerHTML={{ __html: t("faq_ans_16") }}
                    ></Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion>
                  <Accordion.Item eventKey="16">
                    <Accordion.Header>{t("faq_qus_17")}</Accordion.Header>
                    <Accordion.Body
                      dangerouslySetInnerHTML={{ __html: t("faq_ans_17") }}
                    ></Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion>
                  <Accordion.Item eventKey="17">
                    <Accordion.Header>{t("faq_qus_18")}</Accordion.Header>
                    <Accordion.Body
                      dangerouslySetInnerHTML={{ __html: t("faq_ans_18") }}
                    ></Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion>
                  <Accordion.Item eventKey="18">
                    <Accordion.Header>{t("faq_qus_19")}</Accordion.Header>
                    <Accordion.Body
                      dangerouslySetInnerHTML={{ __html: t("faq_ans_19") }}
                    ></Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion>
                  <Accordion.Item eventKey="19">
                    <Accordion.Header>{t("faq_qus_20")}</Accordion.Header>
                    <Accordion.Body
                      dangerouslySetInnerHTML={{ __html: t("faq_ans_20") }}
                    ></Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion>
                  <Accordion.Item eventKey="20">
                    <Accordion.Header>{t("faq_qus_21")}</Accordion.Header>
                    <Accordion.Body
                      dangerouslySetInnerHTML={{ __html: t("faq_ans_21") }}
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
