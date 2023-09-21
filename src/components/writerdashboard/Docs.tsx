import React, { useState, useEffect } from "react";

import axios from "axios";

import { BACKEND_URL } from "../../constants";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "react-bootstrap/Table";
import FloatingButton from "../common/FloatingButton";

export default function Docs() {
  const [key, setKey] = useState("home");
  const [temp_userdb, setTemp_UserDB] = useState([
    {
      name: "document1",
      email: "email1@gmail.com",
      phone: "+1 234 56789",
      regtime: "08:20 Sep. 5 2023",
    },
    {
      name: "document2",
      email: "email2@gmail.com",
      phone: "+1 234 56789",
      regtime: "08:20 Sep. 5 2023",
    },
    {
      name: "document3",
      email: "email3@gmail.com",
      phone: "+1 234 56789",
      regtime: "08:20 Sep. 5 2023",
    },
    {
      name: "document4",
      email: "email4@gmail.com",
      phone: "+1 234 56789",
      regtime: "08:20 Sep. 5 2023",
    },
    {
      name: "document5",
      email: "email5@gmail.com",
      phone: "+1 234 56789",
      regtime: "08:20 Sep. 5 2023",
    },
    {
      name: "document6",
      email: "email6@gmail.com",
      phone: "+1 234 56789",
      regtime: "08:20 Sep. 5 2023",
    },
    {
      name: "document7",
      email: "email7@gmail.com",
      phone: "+1 234 56789",
      regtime: "08:20 Sep. 5 2023",
    },
    {
      name: "document8",
      email: "email8@gmail.com",
      phone: "+1 234 56789",
      regtime: "08:20 Sep. 5 2023",
    },
    {
      name: "document9",
      email: "email9@gmail.com",
      phone: "+1 234 56789",
      regtime: "08:20 Sep. 5 2023",
    },
    {
      name: "document10",
      email: "email0@gmail.com",
      phone: "+1 234 56789",
      regtime: "08:20 Sep. 5 2023",
    },
    {
      name: "document11",
      email: "email11@gmail.com",
      phone: "+1 234 56789",
      regtime: "08:20 Sep. 5 2023",
    },
    {
      name: "document12",
      email: "email12@gmail.com",
      phone: "+1 234 56789",
      regtime: "08:20 Sep. 5 2023",
    },
    {
      name: "document12",
      email: "email12@gmail.com",
      phone: "+1 234 56789",
      regtime: "08:20 Sep. 5 2023",
    },
    {
      name: "document12",
      email: "email12@gmail.com",
      phone: "+1 234 56789",
      regtime: "08:20 Sep. 5 2023",
    },
    {
      name: "document12",
      email: "email12@gmail.com",
      phone: "+1 234 56789",
      regtime: "08:20 Sep. 5 2023",
    },
    {
      name: "document12",
      email: "email12@gmail.com",
      phone: "+1 234 56789",
      regtime: "08:20 Sep. 5 2023",
    },
  ]);

  const [userList, setUserList] = useState([]);
  const [docList, setDocList] = useState([]);

  const fetchUserDocsData = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res1 = await axios.post(
        `${BACKEND_URL}/users/userList`,
        {},
        config
      );
      if (res1.data.success) setUserList(res1.data.users);
      else setUserList([]);

      const res2 = await axios.post(
        `${BACKEND_URL}/users/viewalldocs`,
        {},
        config
      );
      if (res2.data.success) setDocList(res2.data.docs);
      else setDocList([]);
    } catch (err: any) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchUserDocsData();
  }, []);

  const documentViewHandler = (idx: any) => {
    console.log(`document ${idx} view clicked!`);
  };

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
          <div style={{ width: "5%" }}>No</div>
          <div style={{ width: "20%" }}>Name</div>
          <div style={{ width: "20%" }}>Email</div>
          <div style={{ width: "20%" }}>Writer</div>
          <div style={{ width: "20%" }}>Clerk</div>
          <div style={{ width: "15%", textAlign: "end" }}>View PDFs</div>
        </div>
      </div>
      <div style={{ overflowY: "auto", height: "60vh" }}>
        {docList.map((idx: any, key: any) => {
          return (
            <div key={key} role="button" className="hover-row-bg-change">
              <div
                className="d-inline-flex w-100 px-3 py-2"
                onClick={() => documentViewHandler(key + 1)}
              >
                <div style={{ width: "5%" }}>{key + 1}</div>
                <div style={{ width: "20%" }}>
                  {
                    (
                      userList.filter(
                        (idx1: any) => idx1.email === idx.email
                      )[0] as any
                    ).fullName
                  }
                </div>
                <div style={{ width: "20%" }}>{idx.email}</div>
                <div style={{ width: "20%" }}>
                  {
                    (
                      userList.filter(
                        (idx1: any) => idx1.email === idx.writer
                      )[0] as any
                    ).fullName
                  }
                </div>
                <div style={{ width: "20%" }}>
                  {
                    (
                      userList.filter(
                        (idx1: any) => idx1.email === idx.clerk
                      )[0] as any
                    )?.fullName
                  }
                </div>
                <div style={{ width: "15%", textAlign: "end" }}>
                  <div
                    className="d-inline-flex row-send-btn"
                    style={{ zIndex: 50 }}
                    onClick={() => console.log("view button clicked!")}
                  >
                    View
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
