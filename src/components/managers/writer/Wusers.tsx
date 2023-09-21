import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Wusers(props: any) {
  const [key, setKey] = useState("home");
  const navigate = useNavigate();

  const writerViewHandler = (idx: any) => {
    console.log(`user ${idx} view clicked!`);
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
        {props.docs.map((idx: any, key: any) => {
          return (
            <div key={key} role="button" className="hover-row-bg-change">
              <div
                className="d-flex w-100 px-3 py-2"
                onClick={() => writerViewHandler(key + 1)}
              >
                <div className="w-25 d-flex">
                  <div className="w-50">{key + 1}</div>
                  <div className="w-50">{idx.user.fullName}</div>
                </div>
                <div className="w-50 d-flex">
                  <div className="w-50">{idx.user.email}</div>
                  <div className="w-50">{idx.user.phoneNumber}</div>
                </div>
                <div className="w-25 text-end">
                  {convertToUSDateTime(idx.userdoc.createdAt)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
