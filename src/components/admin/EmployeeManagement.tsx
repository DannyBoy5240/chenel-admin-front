import React, { useState, useEffect } from "react";

import houseSolidIcon from "../../assets/icons/house-solid.svg";
import writerIcon from "../../assets/icons/to-writers.svg";
import clerkIcon from "../../assets/icons/to-clerks.svg";
import removeIcon from "../../assets/icons/delete.svg";
import approveIcon from "../../assets/icons/approve.png";

import axios from "axios";

import { BACKEND_URL } from "../../constants";

export default function EmployeeManagement(props: any) {
  const [key, setKey] = useState("manager");
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
    <div className="d-flex flex-column h-100">
      {/* Management Header */}
      <div
        className="d-flex justify-content-between align-items-center"
        style={{
          backgroundColor: "white",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
        }}
      >
        <div className="d-flex">
          {/* Managers Management */}
          <div
            className={`${
              key == "manager"
                ? "bg-header-left-clicked"
                : "hover-bg-header-left-change"
            }`}
            style={{
              width: "240px",
              textAlign: "center",
              padding: "25px",
              color: "black",
              fontSize: "18px",
            }}
            role="button"
            onClick={() => {
              setKey("manager");
            }}
          >
            <span className="px-1">
              <img src={houseSolidIcon} className="icon-default-sz mb-1" />
            </span>
            <span className="px-1">Managers</span>
          </div>
          {/* Writers Management */}
          <div
            className={`${
              key == "writer" ? "bg-header-clicked" : "hover-bg-header-change"
            }`}
            style={{
              width: "240px",
              textAlign: "center",
              padding: "25px",
              color: "black",
              fontSize: "18px",
            }}
            role="button"
            onClick={() => {
              setKey("writer");
            }}
          >
            <span className="px-1">
              <img src={writerIcon} className="icon-default-sz" />
            </span>
            <span className="px-1">Writers</span>
          </div>
          {/* Clerks Management */}
          <div
            className={`${
              key == "clerk" ? "bg-header-clicked" : "hover-bg-header-change"
            }`}
            style={{
              width: "240px",
              textAlign: "center",
              padding: "25px",
              color: "black",
              fontSize: "18px",
            }}
            role="button"
            onClick={() => {
              setKey("clerk");
            }}
          >
            <span className="px-1">
              <img src={clerkIcon} className="icon-default-sz" />
            </span>
            <span className="px-1">Clerks</span>
          </div>
        </div>
        <div className="pe-3"></div>
      </div>
      {/* Management Body */}
      <div style={{ overflowY: "auto", height: "70vh" }}>
        {usersList
          .filter((user: any) => user.roles === key.toUpperCase())
          .map((idx: any, key: any) => {
            return (
              <div className="hover-row-bg-change" key={key} role="button">
                <div className="d-flex w-100 px-3 py-2">
                  <div style={{ width: "4%" }}>{key + 1}</div>
                  <div style={{ width: "15%" }}>{idx.fullName}</div>
                  <div style={{ width: "6%" }}>{idx.gender ? "M" : "W"}</div>
                  <div style={{ width: "10%" }}>
                    {convertToDateOnly(idx.birthday)}
                  </div>
                  <div style={{ width: "20%" }}>{idx.email}</div>
                  <div style={{ width: "15%" }}>{idx.phoneNumber}</div>
                  <div style={{ width: "15%" }} className="text-end">
                    {convertToUSDateTime(idx.regTime)}
                  </div>
                  <div
                    style={{
                      width: "10%",
                      color: idx.status === "PENDING" ? "red" : "blue",
                    }}
                    className="text-center"
                  >
                    {idx.status}
                  </div>
                  <div
                    style={{
                      width: "5%",
                      justifyContent: "space-around",
                      display: "flex",
                    }}
                  >
                    {idx.status === "PENDING" ? (
                      <div
                        className="d-inline-flex row-remove-btn px-1"
                        onClick={() => approveHandler(idx.email)}
                      >
                        <img src={approveIcon} style={{ width: "12px" }} />
                      </div>
                    ) : (
                      <></>
                    )}
                    <div
                      className="d-inline-flex row-remove-btn"
                      onClick={() => removeHandler(idx.email)}
                    >
                      <img src={removeIcon} style={{ width: "12px" }} />
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
