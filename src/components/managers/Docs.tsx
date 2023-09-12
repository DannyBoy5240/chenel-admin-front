import React from "react";
import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "react-bootstrap/Table";
import FloatingButton from "../common/FloatingButton";

export default function UserInfo() {
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

  const documentViewHandler = (idx: any) => {
    console.log(`document ${idx} view clicked!`);
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
        {temp_userdb.map((idx: any, key: any) => {
          return (
            <div key={key} role="button" className="hover-row-bg-change">
              <div
                className="d-flex w-100 px-3 py-2"
                onClick={() => documentViewHandler(key + 1)}
              >
                <div className="w-25 d-flex">
                  <div className="w-50">{key + 1}</div>
                  <div className="w-50">{idx.name}</div>
                </div>
                <div className="w-50 d-flex">
                  <div className="w-50">{idx.email}</div>
                  <div className="w-50">{idx.phone}</div>
                </div>
                <div className="w-25 text-end">{idx.regtime}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
