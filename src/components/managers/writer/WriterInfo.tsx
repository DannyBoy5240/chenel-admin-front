import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import axios from "axios";
import { BACKEND_URL, FRONTEND_URL } from "../../../constants";

import tempAvatar from "../../../assets/img/avatar.jpg";

export default function WriterInfo(props: any) {
  const [key, setKey] = useState("home");

  const [passport, setPassport] = useState("");
  const [workpermit, setWorkpermit] = useState("");
  const [security, setSecurity] = useState("");

  const navigate = useNavigate();

  const fetchDocumentsData = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(
        `${BACKEND_URL}/users/getdocuments`,
        { email: props.data.email },
        config
      );
      if (res.data.success) {
        setPassport(res.data.passport);
        setWorkpermit(res.data.workpermit);
        setSecurity(res.data.security);
      }
    } catch (err: any) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchDocumentsData();
  }, []);

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
    <div className="default-component-back">
      <div className="d-flex">
        <div className="col-sm-12 col-lg-6 py-2">
          <img
            src={tempAvatar}
            style={{ height: "450px", paddingLeft: "48px" }}
          />
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
      <div className="row p-2">
        <div className="col-sm-12 col-lg-4 text-center">
          {/* <div className="pb-2">Passport</div> */}
          {passport !== "" && (
            <div
              className="py-2 border"
              role="button"
              onClick={() => {
                console.log(`${BACKEND_URL}/uploads/${passport}`);
                window.open(`${BACKEND_URL}/uploads/${passport}`, "_blank");
              }}
            >
              View Passport
            </div>
          )}
        </div>
        <div className="col-sm-12 col-lg-4 text-center">
          {/* <div>Work permit</div> */}
          {workpermit !== "" && (
            <div
              className="py-2 border"
              role="button"
              onClick={() => {
                console.log(`${BACKEND_URL}/uploads/${passport}`);
                window.open(`${BACKEND_URL}/uploads/${workpermit}`, "_blank");
              }}
            >
              View Work-Permit
            </div>
          )}
        </div>
        <div className="col-sm-12 col-lg-4 text-center">
          {/* <div>Security Card</div> */}
          {security !== "" && (
            <div
              className="py-2 border"
              role="button"
              onClick={() => {
                window.open(`${FRONTEND_URL}/${security}`, "_blank");
              }}
            >
              View Security-Card
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
