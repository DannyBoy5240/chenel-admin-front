import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { BACKEND_URL } from "../../constants";
import axios from "axios";

import { useDispatch } from "react-redux";
import { logout } from "../../actions/auth";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import jwt_decode from "jwt-decode";

import WriterInfo from "../../components/managers/writer/WriterInfo";
import Sidebutton from "../../components/managers/writer/Sidebutton";
import Wusers from "../../components/managers/writer/Wusers";
import Docs from "../../components/managers/writer/Docs";

import searchIcon from "../../assets/icons/search-icon.svg";
import logoImage from "../../assets/img/logo.png";
import testAvatar from "../../assets/img/avatar.jpg";
import backIcon from "../../assets/icons/back.jpg";

interface Props {
  auth: any;
}
function ManagerWriterProfile(props: Props) {
  const [page, setPage] = useState("info");
  const [docList, setDocList] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const data = location.state.data;
  const statusMode = location.state.status;

  // authorization
  const decoded_token = props.auth.token ? jwt_decode(props.auth.token) : null;
  const isAuthorized = decoded_token
    ? (decoded_token as any).user &&
      (decoded_token as any).user.roles.toLowerCase() === "manager"
    : false;

  useEffect(() => {
    if (isAuthorized)
      navigate("/manager/employee", { state: { data: data, status: statusMode === "writer" ? "writer" : "clerk" } });
    else navigate("/login");
  }, [isAuthorized, navigate]);

  // profile dropdown
  const [isProfileDropdown, setIsProfileDropdown] = useState(false);

  const logoutHandler = async () => {
    await dispatch(logout());
    navigate("/login");
  };

  const fetchWriterData = async () => {
    const tdata = {
      writer: data.email,
    };
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(
        `${BACKEND_URL}/users/viewriterdoc`,
        tdata,
        config
      );
      if (res.data.success) {
        setDocList(res.data.users);
      }
    } catch (err: any) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchWriterData();
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
          onClick={() => navigate("/manager")}
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
      </div>
      <div className="d-flex flex-grow-1">
        <div className="col-md-2 col-lg-2">
          <Sidebutton page={page} setPage={setPage} status={statusMode} />
        </div>
        <div className="col-md-10 col-lg-10 pe-5" style={{height: "80vh", overflowY: "auto"}}>
          {page == "info" && <WriterInfo setPage={setPage} data={data} />}
          {page == "writer" && (
            <Wusers
              docs={docList.filter(
                (doc: any) => doc.userdoc.writer === data.email
              )}
            />
          )}
          {page == "doc" && (
            <Docs
              docs={docList.filter(
                (doc: any) => doc.userdoc.clerk === data.email
              )}
            />
          )}
        </div>
        <div className="col-lg-1 mt-5"></div>
      </div>
      {/* Profile Icon */}
      <div style={{ position: "absolute", top: "18px", right: "18px" }}>
        <div className="position-relative">
          <div
            className="avatar-default-sz rounded-circle"
            role="button"
            onClick={() => setIsProfileDropdown(!isProfileDropdown)}
          >
            <img
              src={testAvatar}
              className="avatar-default-sz rounded-circle profile-avatar"
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
        onClick={() => navigate("/manager")}
      >
        <img src={backIcon} className="icon-default-sz" />
      </div>
    </div>
  );
}

ManagerWriterProfile.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state: any) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(ManagerWriterProfile);
