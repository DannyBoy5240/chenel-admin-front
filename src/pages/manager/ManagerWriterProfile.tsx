import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import WriterInfo from "../../components/managers/writer/WriterInfo";
import Sidebutton from "../../components/managers/writer/Sidebutton";
import Wusers from "../../components/managers/writer/Wusers";
import Docs from "../../components/managers/writer/Docs";

// import TopSideBar from "../../components/common/TopSideBar";
// import Clerks from "../../components/managers/writer/Clerks";
// import Editor from "../../components/common/ManagerEditor";

import searchIcon from "../../assets/icons/search-icon.svg";

import logoImage from "../../assets/img/logo.png";
import testAvatar from "../../assets/img/avatar.jpg";

export default function ManagerWriterProfile() {
  const [page, setPage] = useState("info");

  const navigate = useNavigate();

  return (
    <div className="h-100 d-flex flex-column position-relative">
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
        <div className="col-lg-2">
          <Sidebutton page={page} setPage={setPage} />
        </div>
        <div className="col-lg-9">
          {page == "info" && <WriterInfo setPage={setPage} />}
          {page == "writer" && <Wusers />}
          {page == "doc" && <Docs />}
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
