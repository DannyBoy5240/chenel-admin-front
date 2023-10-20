import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import approveIcon from "../../assets/icons/approve.png";
import removeIcon from "../../assets/icons/delete.svg";

import axios from "axios";

import { BACKEND_URL } from "../../constants";

export default function CustomerManagement(props: any) {
  const [key, setKey] = useState("customer");
  const [usersList, setUsersList] = useState([]);

  const fetchAllUsersData = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(`${BACKEND_URL}/users/userList`, {}, config);
      if (res.data.success) setUsersList(res.data.users);
      else setUsersList([]);
    } catch (err: any) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchAllUsersData();
  }, []);

  const convertToDateOnly = (timestamp: any) => {
    const dateObject = new Date(timestamp);

    // Extract year, month, and day components
    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const day = String(dateObject.getDate()).padStart(2, "0");

    // Construct the desired format
    const formattedDate = `${month}/${day}/${year}`;

    return formattedDate;
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

  // approve / remove functions
  const approveHandler = async (email: string) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(
        `${BACKEND_URL}/users/approveUser`,
        { email },
        config
      );
      if (res.data.success) {
        fetchAllUsersData();
      }
    } catch (err: any) {
      console.log(err.message);
    }
  };

  const removeHandler = async (email: string) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(
        `${BACKEND_URL}/users/removeUser`,
        { email },
        config
      );
      if (res.data.success) {
        fetchAllUsersData();
      }
    } catch (err: any) {
      console.log(err.message);
    }
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
        className="py-4"
      >
        {/* <div className="d-inline-flex w-100 px-3 py-2">
          <div style={{ width: "10%" }}>No</div>
          <div style={{ width: "20%" }}>Name</div>
          <div style={{ width: "25%" }}>Email</div>
          <div style={{ width: "30%" }} className="text-end">
            Registered Time
          </div>
          <div style={{ width: "8%" }}></div>
        </div> */}
      </div>
      <div style={{ height: "calc(100vh - 168px)", fontSize: "14px" }}>
        {usersList
          .filter((user: any) => user.roles === key.toUpperCase())
          .filter((user: any) => JSON.stringify(user).includes(props.searchKey))
          .map((idx: any, key: any) => {
            return (
              <div className="hover-row-bg-change" key={key} role="button">
                <div className="row d-flex px-3 py-2 align-items-center">
                  <div className="col-2 col-md-2 col-lg-1">{key + 1}</div>
                  <div className="col-10 col-md-5 col-lg-3">{idx.fullName}</div>
                  <div className="col-12 col-md-5 col-lg-3">{idx.email}</div>
                  <div className="col-12 col-md-8 col-lg-3 ps-5 ps-lg-0">
                    {convertToUSDateTime(idx.regTime)}
                  </div>
                  <div
                    className="col-6 col-md-3 col-lg-1"
                    style={{ color: idx.status === "PENDING" ? "red" : "blue" }}
                  >
                    {idx.status}
                  </div>
                  <div className="col-6 col-md-1 col-lg-1 d-flex justify-content-end">
                    {idx.status === "PENDING" && (
                      <div
                        className="d-inline-flex row-remove-btn py-1 me-1"
                        onClick={() => approveHandler(idx.email)}
                      >
                        <img
                          src={approveIcon}
                          style={{ width: "12px" }}
                          alt="Approve"
                        />
                      </div>
                    )}
                    <div
                      className="d-inline-flex row-remove-btn"
                      onClick={() => removeHandler(idx.email)}
                    >
                      <img
                        src={removeIcon}
                        style={{ width: "12px" }}
                        alt="Remove"
                      />
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
