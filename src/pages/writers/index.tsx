import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import searchIcon from "../../assets/icons/search-icon.svg";
import backIcon from "../../assets/icons/back.jpg";
import logoImage from "../../assets/img/logo.png";
import testAvatar from "../../assets/img/avatar.jpg";

import RightSide from "../../components/writerdashboard/RightSide";
import UserInfo from "../../components/writers/UserInfo";
import Docs from "../../components/writers/Docs";

import PropTypes from "prop-types";
import { connect } from "react-redux";

import jwt_decode from "jwt-decode";

interface Props {
  auth: any;
}

function Writerboard(props: Props) {
  const [page, setPage] = useState("info");
  const navigate = useNavigate();

  useEffect(() => {
    if (props.auth.token) {
      const decoded = jwt_decode(props.auth.token);
      const role = (decoded as any).user.roles;
      // redirect to the origin
      if (role === "MANAGER") navigate("/manager");
      if (role === "CLERK") navigate("/clerk");
      if (role === "ADMIN") navigate("/admin");
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <div
      className="h-100 d-flex flex-column position-relative"
      style={{ background: "#F6F8FC" }}
    >
      {/* Header */}
      <div className="d-flex py-3 align-items-center">
        <div
          className="col-lg-2 d-flex align-items-center"
          role="button"
          onClick={() => window.location.reload()}
        >
          <div className="px-3">
            <img
              src={logoImage}
              className="img-fluid"
              style={{ width: "60px" }}
              alt="Logo"
            />
          </div>
          <div className="fw-bold">Chenel Service</div>
        </div>
        <div className="col-md-7 col-lg-5">
          <div className="position-relative w-100 px-1 rounded-pill bg-light">
            <input
              className="form-control border-0 rounded-pill bg-white"
              placeholder="Search User"
              style={{ padding: "12px 12px" }}
            />
            <div style={{ position: "absolute", top: "10px", right: "18px" }}>
              <img src={searchIcon} className="icon-default-sz" />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-grow-1">
        <div className="col-lg-2">
          <RightSide page={page} setPage={setPage} />
        </div>
        <div className="col-lg-9">
          {/* <TopSideBar /> */}
          {page == "info" && <UserInfo setPage={setPage} />}
          {page == "docs" && <Docs />}
        </div>
        <div className="col-lg-1 mt-5"></div>
      </div>
      {/* Profile Icon */}
      <div style={{ position: "absolute", top: "18px", right: "18px" }}>
        <div className="avatar-default-sz rounded-circle">
          <img
            src={testAvatar}
            className="avatar-default-sz rounded-circle profile-avatar"
          />
        </div>
      </div>
      {/* return */}
      <div
        className="position-absolute"
        style={{ bottom: "18px", right: "24px" }}
        role="button"
        onClick={() => window.location.reload()}
      >
        <img src={backIcon} className="icon-default-sz" />
      </div>
    </div>
  );
}

Writerboard.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state: any) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Writerboard);
