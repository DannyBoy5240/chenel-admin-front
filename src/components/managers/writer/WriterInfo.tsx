import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import tempAvatar from "../../../assets/img/avatar.jpg";

export default function WriterInfo(props: any) {
  const [key, setKey] = useState("home");

  const navigate = useNavigate();

  function convertToUSDateTime(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      timeZone: "America/New_York",
    };
    return date.toLocaleString("en-US", options);
  }

  return (
    <div className="d-flex default-component-back">
      <div className="col-sm-12 col-lg-6 py-2">
        <img src={tempAvatar} style={{ height: "60%", paddingLeft: "48px" }} />
      </div>
      <div className="col-sm-12 col-lg-6 pt-4" style={{ fontSize: "24px" }}>
        <div className="py-3">Name : {props.data.fullName}</div>
        <div className="py-3">
          Gender : {props.data.gender ? "Male" : "Female"}
        </div>
        <div className="py-3">Email : {props.data.email}</div>
        <div className="py-3">Phone : {props.data.phoneNumber}</div>
        <div className="py-3">Address : {props.data.address}</div>
        <div className="py-3">
          Registration Time : {convertToUSDateTime(props.data.regTime)}
        </div>
      </div>
    </div>
  );
}
