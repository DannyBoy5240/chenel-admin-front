import React, { useState, useEffect } from "react";

import axios from "axios";

import { BACKEND_URL } from "../../constants";

export default function UserInfo() {
  const [key, setKey] = useState("home");

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
                    )?.fullName
                  }
                </div>
                <div style={{ width: "20%" }}>{idx.email}</div>
                <div style={{ width: "20%" }}>
                  {
                    (
                      userList.filter(
                        (idx1: any) => idx1.email === idx.writer
                      )[0] as any
                    )?.fullName
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
