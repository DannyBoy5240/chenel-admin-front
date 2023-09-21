import React, { useState, useEffect } from "react";

import { useNavigate, useLocation } from "react-router-dom";

import { BACKEND_URL } from "../../constants";

import axios from "axios";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import jwt_decode from "jwt-decode";

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
import backIcon from "../../assets/icons/back.jpg";

interface Props {
  auth: any;
}

function ManagerWriterProfile(props: Props) {
  const [page, setPage] = useState("info");
  const [docList, setDocList] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (props.auth.token) {
      const decoded = jwt_decode(props.auth.token) as any;
      fetchWriterData();
    } else {
      navigate("/login");
    }
  }, []);

  const data = location.state.data;
  const statusMode = location.state.status;

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
        <div className="col-lg-2">
          <Sidebutton page={page} setPage={setPage} status={statusMode} />
        </div>
        <div className="col-lg-9">
          {page == "info" && <WriterInfo setPage={setPage} data={data} />}
          {page == "writer" && (
            <Wusers
              docs={docList.filter(
                (data: any) =>
                  data.userdoc.status ===
                  (statusMode === "writer" ? "WRITERCHECKING" : "CLERKCHECKING")
              )}
            />
          )}
          {page == "doc" && (
            <Docs
              docs={docList.filter(
                (data: any) =>
                  data.userdoc.status ===
                  (statusMode === "writer" ? "WRITERCONFIRM" : "CLERKCONFIRM")
              )}
            />
          )}
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

export default connect(mapStateToProps)(ManagerWriterProfile);
