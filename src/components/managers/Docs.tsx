import React, { useState, useEffect } from "react";

import axios from "axios";

import { BACKEND_URL, FRONTEND_URL } from "../../constants";

export default function UserInfo(props: any) {
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

  const documentViewHandler = (_formdoc: any) => {
    window.open(`${FRONTEND_URL}/${_formdoc}`, "_blank");
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
          fontSize: "14px"
        }}
        className="py-2"
      >
        <div className="row d-flex w-100 px-3 py-2">
          <div className="col-md-1 col-lg-1">No</div>
          <div className="col-md-6 col-lg-3">Name</div>
          <div className="col-md-5 col-lg-3">Email</div>
          <div className="col-md-5 col-lg-2 ps-md-5 ps-lg-0">Writer</div>
          <div className="col-md-5 col-lg-2">Clerk</div>
          <div className="col-md-2 col-lg-1 ps-lg-3">View</div>
        </div>
      </div>
      <div style={{ overflowY: "auto", height: "calc(100vh - 150px)" }}>
        {docList
          .filter((doc: any) => JSON.stringify(doc).includes(props.searchKey))
          .filter((doc: any) => doc.status.toLowerCase() === "clerkconfirm")
          .map((idx: any, key: any) => {
            return (
              <div key={key} role="button" className="hover-row-bg-change">
                <div
                  className="row d-flex w-100 px-3 py-2 align-items-center"
                  onClick={() => documentViewHandler(idx.formdoc)}
                >
                  <div className="col-md-1 col-lg-1">{key + 1}</div>
                  <div className="col-md-6 col-lg-3">
                    {
                      (
                        userList.filter(
                          (idx1: any) => idx1.email === idx.email
                        )[0] as any
                      )?.fullName
                    }
                  </div>
                  <div className="col-md-5 col-lg-3">{idx.email}</div>
                  <div className="col-md-5 col-lg-2 ps-md-5 ps-lg-0">
                    {
                      (
                        userList.filter(
                          (idx1: any) => idx1.email === idx.writer
                        )[0] as any
                      )?.fullName
                    }
                  </div>
                  <div className="col-md-5 col-lg-2">
                    {
                      (
                        userList.filter(
                          (idx1: any) => idx1.email === idx.clerk
                        )[0] as any
                      )?.fullName
                    }
                  </div>
                  <div className="col-md-2 col-lg-1 d-flex justify-content-end">
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
