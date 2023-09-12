import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import FloatingButton from "../../common/FloatingButton";

export default function Wusers() {
  const [key, setKey] = useState("home");
  const navigate = useNavigate();

  const [temp_userdb, setTemp_UserDB] = useState([
    {
      name: "user1",
      email: "email1@gmail.com",
      phone: "+1 234 56789",
      regtime: "08:20 Sep. 5 2023",
    },
    {
      name: "user2",
      email: "email2@gmail.com",
      phone: "+1 234 56789",
      regtime: "08:20 Sep. 5 2023",
    },
    {
      name: "user3",
      email: "email3@gmail.com",
      phone: "+1 234 56789",
      regtime: "08:20 Sep. 5 2023",
    },
    {
      name: "user4",
      email: "email4@gmail.com",
      phone: "+1 234 56789",
      regtime: "08:20 Sep. 5 2023",
    },
    {
      name: "user5",
      email: "email5@gmail.com",
      phone: "+1 234 56789",
      regtime: "08:20 Sep. 5 2023",
    },
    {
      name: "user6",
      email: "email6@gmail.com",
      phone: "+1 234 56789",
      regtime: "08:20 Sep. 5 2023",
    },
    {
      name: "user7",
      email: "email7@gmail.com",
      phone: "+1 234 56789",
      regtime: "08:20 Sep. 5 2023",
    },
    {
      name: "user8",
      email: "email8@gmail.com",
      phone: "+1 234 56789",
      regtime: "08:20 Sep. 5 2023",
    },
    {
      name: "user9",
      email: "email9@gmail.com",
      phone: "+1 234 56789",
      regtime: "08:20 Sep. 5 2023",
    },
    {
      name: "user10",
      email: "email0@gmail.com",
      phone: "+1 234 56789",
      regtime: "08:20 Sep. 5 2023",
    },
    {
      name: "user11",
      email: "email11@gmail.com",
      phone: "+1 234 56789",
      regtime: "08:20 Sep. 5 2023",
    },
    {
      name: "user12",
      email: "email12@gmail.com",
      phone: "+1 234 56789",
      regtime: "08:20 Sep. 5 2023",
    },
    {
      name: "user12",
      email: "email12@gmail.com",
      phone: "+1 234 56789",
      regtime: "08:20 Sep. 5 2023",
    },
    {
      name: "user12",
      email: "email12@gmail.com",
      phone: "+1 234 56789",
      regtime: "08:20 Sep. 5 2023",
    },
    {
      name: "user12",
      email: "email12@gmail.com",
      phone: "+1 234 56789",
      regtime: "08:20 Sep. 5 2023",
    },
    {
      name: "user12",
      email: "email12@gmail.com",
      phone: "+1 234 56789",
      regtime: "08:20 Sep. 5 2023",
    },
  ]);

  const writerViewHandler = (idx: any) => {
    console.log(`user ${idx} view clicked!`);
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
                onClick={() => writerViewHandler(key + 1)}
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
