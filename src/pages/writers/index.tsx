import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import searchIcon from "../../assets/icons/search-icon.svg";
import backIcon from "../../assets/icons/back.jpg";
import logoImage from "../../assets/img/logo.png";
import testAvatar from "../../assets/img/avatar.jpg";

import RightSide from "../../components/writers/RightSide";
import WriterDocsInfo from "../../components/writers/WriterDocsInfo";
import CompletedDocs from "../../components/writers/CompletedDocs";

import { useDispatch } from "react-redux";
import { logout } from "../../actions/auth";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import jwt_decode from "jwt-decode";

interface Props {
  auth: any;
  logout: any;
}

function Writerboard(props: Props) {
  const [page, setPage] = useState("info");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // authorization
  const decoded_token = props.auth.token ? jwt_decode(props.auth.token) : null;
  const isAuthorized = decoded_token
    ? (decoded_token as any).user &&
      (decoded_token as any).user.roles.toLowerCase() === "writer"
    : false;

  useEffect(() => {
    if (isAuthorized) navigate("/writer");
    else navigate("/login");
  }, [isAuthorized, navigate]);

  // profile dropdown
  const [isProfileDropdown, setIsProfileDropdown] = useState(false);

  const logoutHandler = async () => {
    await dispatch(logout());
    navigate("/login");
  };

  // search function
  const [searchKey, setSearchkey] = useState("");

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
              value={searchKey}
              onChange={(ev) => setSearchkey(ev.target.value)}
            />
            <div style={{ position: "absolute", top: "10px", right: "18px" }}>
              <img src={searchIcon} className="icon-default-sz" />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-grow-1">
        <div className="col-md-2 col-lg-2">
          <RightSide page={page} setPage={setPage} />
        </div>
        <div className="col-md-10 col-lg-10 pe-5">
          {/* <TopSideBar /> */}
          {page == "info" && (
            <WriterDocsInfo
              setPage={setPage}
              curWriter={decoded_token ? (decoded_token as any).user.email : ""}
              searchKey={searchKey}
            />
          )}
          {page == "docs" && (
            <CompletedDocs
              curWriter={decoded_token ? (decoded_token as any).user.email : ""}
              searchKey={searchKey}
            />
          )}
        </div>
        <div className="col-lg-1 mt-5"></div>
      </div>
      {/* Profile Icon */}
      <div style={{ position: "absolute", top: "18px", right: "18px" }}>
        <div className="position-relative">
          <div className="avatar-default-sz rounded-circle">
            <img
              src={testAvatar}
              role="button"
              className="avatar-default-sz rounded-circle profile-avatar"
              onClick={() => setIsProfileDropdown(!isProfileDropdown)}
            />
          </div>
          {/* Dropdown Profile */}
          {isProfileDropdown && (
            <div
              style={{ backgroundColor: "#4A4A4A38", borderRadius: "10px" }}
              className="text-center"
              role="button"
              onClick={() => logoutHandler()}
            >
              Logout
            </div>
          )}
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
  logout: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state: any) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Writerboard);
