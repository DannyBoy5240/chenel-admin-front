import React from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import jwt_decode from "jwt-decode";

interface Props {
  auth: any;
}
function AboutUs(props: Props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // authorization
  const decoded_token = props.auth.token ? jwt_decode(props.auth.token) : null;
  const isAuthorized = decoded_token && (decoded_token as any).user;

  return (
    <section
      id="team"
      className="team section-bg h-100"
      style={{ backgroundColor: "#f4fbfe", marginTop: "80px" }}
    >
      <Header isAuthorized={isAuthorized} title="about" />
      <div className="container">
        <div className="section-title">
          <h4>
            <i>
              For a modest fee, we guide undocumented immigrants through asylum,
              defend their rights, and support their journey towards legal
              status and a brighter future.
            </i>
          </h4>
        </div>

        <div className="row">
          <div className="col-lg-4 row">
            <div className="col-lg-6 col-md-6 d-flex align-items-stretch">
              <div className="member">
                <div className="member-img">
                  <img
                    src="assets/img/team/team-1.jpg"
                    className="img-fluid"
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
                  <h4>Walter White</h4>
                  <span>Chief Executive Officer</span>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 d-flex align-items-stretch">
              <div className="member">
                <div className="member-img">
                  <img
                    src="assets/img/team/team-2.jpg"
                    className="img-fluid"
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
                  <h4>Sarah Jhonson</h4>
                  <span>Product Manager</span>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 d-flex align-items-stretch">
              <div className="member">
                <div className="member-img">
                  <img
                    src="assets/img/team/team-3.jpg"
                    className="img-fluid"
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
                  <h4>William Anderson</h4>
                  <span>CTO</span>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 d-flex align-items-stretch">
              <div className="member">
                <div className="member-img">
                  <img
                    src="assets/img/team/team-4.jpg"
                    className="img-fluid"
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
                  <h4>Amanda Jepson</h4>
                  <span>Accountant</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <p>
              <br />
              <br />
              In January 2001, Chenel Pierre founded Chenel Super Service, LLC
              in Immokalee, Florida, initially offering assistance with various
              documents such as letters, forms, phone calls, translations, and
              predominantly, income tax and immigration documents. The demand
              for his tax services skyrocketed, leading him to work exhaustively
              from 7:00 AM to 10:00 PM during tax seasons. His dedication to the
              community fostered a mutual affection and ensured a steady flow of
              clients who always paid on time.
              <br />
              <br />
              Chenel, while managing his business, furthered his education by
              studying Applied Behavioral Science and Business Science
              Management at National Louis University, completing an associate
              degree at Edison Community College, and briefly attending Florida
              Gulf Coast University. Despite his academic achievements, the
              success of Chenel Super Service was mainly attributed to his
              innate ability to learn, adapt, and teach others, as he never
              received formal training in the services offered by his company.
              <br />
              <br />
              Over the years, Chenel has assisted countless Haitians in entering
              the US, earning their citizenship, and gaining asylum. Inspired to
              broaden his impact, in January 2023, he expanded his services to
              help more undocumented immigrants in the US by collaborating with
              a diverse team of attorneys, journalists, politicians, and
              economists worldwide.
              <br />
              <br />
              Currently, Chenel Super Service operates from two locations,
              Immokalee and Fort Myers, Florida, but its team is globally
              distributed, including writers in Canada, France, the US, Haiti,
              and other employees in Pakistan and the Dominican Republic. The
              ultimate objective of Chenel Super Service is to serve as a beacon
              of hope for all undocumented immigrants in the US, guiding them
              towards a legal and secure future.
            </p>
          </div>
        </div>
      </div>
      <div className="section-title">
        <p>
          <i>
            At Chenel Super Service LLC, our culture is built on a foundation of
            client focus, teamwork, and a genuine love for people.
          </i>
        </p>
      </div>
      <Footer />
    </section>
  );
}

AboutUs.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state: any) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(AboutUs);
