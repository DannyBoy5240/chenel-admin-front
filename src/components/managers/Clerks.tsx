import React, { useState, useEffect } from "react";

import axios from "axios";

import { BACKEND_URL } from "../../constants";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "react-bootstrap/Table";

export default function Clerks() {
  const [key, setKey] = useState("home");

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

  const clerkViewHandler = (idx: any) => {
    console.log(`clerk ${idx} view clicked!`);
  };

  return (
    <div>
      {/* Table Header */}
      <div key={key} role="button" style={{ background: "#c2e7ff" }}>
        <div className="d-inline-flex w-100 px-3 py-2">
          <div className="w-25 d-flex">
            <div className="w-50">No</div>
            <div className="w-50">Name</div>
          </div>
          <div className="w-50 d-flex">
            <div className="w-50">Email</div>
            <div className="w-50">Phone</div>
          </div>
          <div className="w-25 text-end">Registered Time</div>
        </div>
      </div>
      <div style={{ overflowY: "auto", height: "60vh" }}>
        {userList
          .filter((user: any) => user.roles === "CLERK")
          .map((idx: any, key: any) => {
            return (
              <div key={key} role="button" className="hover-row-bg-change">
                <div
                  className="d-flex w-100 px-3 py-2"
                  onClick={() => clerkViewHandler(key + 1)}
                >
                  <div className="w-25 d-flex">
                    <div className="w-50">{key + 1}</div>
                    <div className="w-50">{idx.fullName}</div>
                  </div>
                  <div className="w-50 d-flex">
                    <div className="w-50">{idx.email}</div>
                    <div className="w-50">{idx.phoneNumber}</div>
                  </div>
                  <div className="w-25 text-end">{idx.regTime}</div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
