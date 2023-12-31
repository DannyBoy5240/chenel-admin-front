import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import axios from "axios";

import { BACKEND_URL } from "../../constants";

export default function Clerks(props: any) {
  const [key, setKey] = useState("home");

  const navigate = useNavigate();

  const [userList, setUserList] = useState([]);

  const fetchClerkData = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(`${BACKEND_URL}/users/userList`, {}, config);

      if (res.data.success) setUserList(res.data.users);
      else setUserList([]);
    } catch (err: any) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchClerkData();
  }, []);

  const clerkViewHandler = (idx: any, data: any) => {
    console.log(`clerk ${idx} view clicked!`);
    navigate("/manager/employee", { state: { data: data, status: "clerk" } });
  };

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
    <div className="bg-white h-100 default-border-raidus">
      {/* Table Header */}
      <div
        key={key}
        role="button"
        style={{
          background: "#c2e7ff",
          borderTopLeftRadius: "18px",
          borderTopRightRadius: "18px",
        }}
        className="py-2"
      >
        <div className="d-inline-flex w-100 px-3 py-2">
          {/* <div className="w-25 d-flex">
            <div className="w-50">No</div>
            <div className="w-50">Name</div>
          </div>
          <div className="w-50 d-flex">
            <div className="w-50">Email</div>
            <div className="w-50">Phone</div>
          </div>
          <div className="w-25 text-end">Registered Time</div> */}
        </div>
      </div>
      <div style={{ overflowY: "auto", height: "calc(100vh - 150px)", fontSize: "14px" }}>
        {userList
          .filter((user: any) => user.roles.toLowerCase() === "clerk")
          .filter((user: any) => JSON.stringify(user).includes(props.searchKey))
          .map((idx: any, key: any) => {
            return (
              <div key={key} role="button" className="hover-row-bg-change">
                <div
                  className="row d-flex w-100 px-3 py-2 align-items-center"
                  onClick={() => clerkViewHandler(key + 1, idx)}
                >
                  <div className="col-md-1 col-lg-1">{key + 1}</div>
                  <div className="col-md-5 col-lg-3">{idx.email}</div>
                  <div className="col-md-6 col-lg-3 text-end text-lg-start">{idx.fullName}</div>
                  <div className="col-md-6 col-lg-2 ps-md-5 ps-lg-0">{idx.phoneNumber}</div>
                  <div className="col-md-6 col-lg-3 text-end">{convertToUSDateTime(idx.regTime)}</div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
