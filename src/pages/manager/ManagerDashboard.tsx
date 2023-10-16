import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import UserInfo from "../../components/managers/UserInfo";
import Sidebutton from "../../components/managers/Sidebutton";
import TopSideBar from "../../components/common/TopSideBar";
import Clerks from "../../components/managers/Clerks";
import Writers from "../../components/managers/Writers";
import Docs from "../../components/managers/Docs";
import AddNewUserDoc from "../../components/managers/AddNewUserDoc";

import searchIcon from "../../assets/icons/search-icon.svg";

import logoImage from "../../assets/img/logo.png";
import testAvatar from "../../assets/img/avatar.jpg";

import { useDispatch } from "react-redux";
import { logout } from "../../actions/auth";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import jwt_decode from "jwt-decode";

interface Props {
  auth: any;
}
function ManagerDashboard(props: Props) {
  const [page, setPage] = useState("info");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // authorization
  const decoded_token = props.auth.token ? jwt_decode(props.auth.token) : null;
  const isAuthorized = decoded_token
    ? (decoded_token as any).user &&
      (decoded_token as any).user.roles.toLowerCase() === "manager"
    : false;

  useEffect(() => {
    if (isAuthorized) navigate("/manager");
    else navigate("/login");
  }, [isAuthorized, navigate]);

  // profile dropdown
  const [isProfileDropdown, setIsProfileDropdown] = useState(false);

  const logoutHandler = async () => {
    await dispatch(logout());
    navigate("/login");
  };

  // search function
  const [searchKey, setSearchKey] = useState("");

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
          onClick={() => navigate("/")}
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
              onChange={(ev) => setSearchKey(ev.target.value)}
            />
            <div style={{ position: "absolute", top: "10px", right: "18px" }}>
              <img src={searchIcon} className="icon-default-sz" />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-grow-1">
        <div className="col-md-2 col-lg-2">
          <Sidebutton page={page} setPage={setPage} />
        </div>
        <div className="col-md-10 col-lg-10 pe-5">
          {/* <TopSideBar /> */}
          {page == "info" && <UserInfo setPage={setPage} />}
          {page == "writer" && <Writers searchKey={searchKey} />}
          {page == "clerk" && <Clerks searchKey={searchKey} />}
          {page == "doc" && <Docs searchKey={searchKey} />}
          {page == "addnewuser" && <AddNewUserDoc setPage={setPage} />}
        </div>
        {/* <div className="col-lg-1 mt-5"></div> */}
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
              style={{ backgroundColor: "#4A4A4A18", borderRadius: "10px" }}
              className="text-center"
              role="button"
              onClick={() => logoutHandler()}
            >
              Logout
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

ManagerDashboard.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state: any) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(ManagerDashboard);
