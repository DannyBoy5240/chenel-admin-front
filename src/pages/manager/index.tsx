import React, { useState } from "react";
import UserInfo from "../../components/managers/UserInfo";
import Sidebutton from "../../components/managers/Sidebutton";
import TopSideBar from "../../components/common/TopSideBar";
import Clerks from "../../components/managers/Clerks";
import Writers from "../../components/managers/Writers";
import Docs from "../../components/managers/Docs";
import Editor from "../../components/common/ManagerEditor";

import searchIcon from "../../assets/icons/search-icon.svg";

import logoImage from "../../assets/img/logo.png";
import testAvatar from "../../assets/img/avatar.jpg";

export default function ManagerDashboard() {
  const [page, setPage] = useState("info");
  return (
    <div className="h-100 d-flex flex-column position-relative">
      {/* Header */}
      <div className="d-flex py-3 align-items-center">
        <div className="col-lg-2 d-flex align-items-center">
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
              className="form-control border-0 rounded-pill p-2 pl-5 bg-light"
              placeholder="Search User"
            />
            <div style={{ position: "absolute", top: "8px", right: "30px" }}>
              <img src={searchIcon} className="icon-default-sz" />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-grow-1">
        <div className="col-lg-2">
          <Sidebutton page={page} setPage={setPage} />
        </div>
        <div className="col-lg-9">
          {/* <TopSideBar /> */}
          {page == "info" && <UserInfo setPage={setPage} />}
          {page == "clerk" && <Clerks />}
          {page == "writer" && <Writers />}
          {page == "doc" && <Docs />}
          {page == "editor" && <Editor />}
        </div>
        <div className="col-lg-1 mt-5"></div>
      </div>
      {/* Profile Icon */}
      <div className="position-aboluste" style={{ top: "20px", right: "20px" }}>
        <div className="avatar-default-sz rounded-circle">
          <img src={testAvatar} className="avatar-default-sz rounded-circle" />
        </div>
      </div>
    </div>
  );
}
