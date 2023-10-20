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
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    };

    const formattedDate = date.toLocaleString(undefined, options);
    return formattedDate;
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
        className="d-md-flex justify-content-between align-items-center"
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
              width: "213px",
              textAlign: "center",
              padding: "20px",
              color: "black",
              fontSize: "16px",
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
              width: "213px",
              textAlign: "center",
              padding: "20px",
              color: "black",
              fontSize: "16px",
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
              width: "213px",
              textAlign: "center",
              padding: "20px",
              color: "black",
              fontSize: "16px",
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
      <div
        style={{
          height: "calc(100vh - 178px)",
          fontSize: "14px",
        }}
      >
        {usersList
          .filter((user: any) => user.roles === key.toUpperCase())
          .filter((user: any) => JSON.stringify(user).includes(props.searchKey))
          .map((idx: any, key: any) => {
            return (
              <div className="hover-row-bg-change" key={key} role="button">
                <div className="row d-flex px-3 py-2 align-items-center">
                  <div className="col-2 col-md-2 col-lg-1 d-flex justify-content-between">
                    <div>{key + 1}</div>
                    <div>{idx.gender ? "M" : "W"}</div>
                  </div>
                  <div className="col-10 col-md-4 col-lg-3 d-flex justify-content-between">
                    <div>{idx.fullName}</div>
                    <div>{convertToDateOnly(idx.birthday)}</div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-between">
                    <div>{idx.email}</div>
                    <div>{idx.phoneNumber}</div>
                  </div>
                  <div className="col-12 col-md-9 col-lg-2 ps-5 ps-lg-0">
                    {convertToUSDateTime(idx.regTime)}
                  </div>
                  <div
                    className="col-12 col-md-3 col-lg-2 d-flex justify-content-between"
                    style={{ color: idx.status === "PENDING" ? "red" : "blue" }}
                  >
                    <div>{idx.status}</div>
                    <div>
                      {idx.status === "PENDING" ? (
                        <div
                          className="row-remove-btn"
                          onClick={() => approveHandler(idx.email)}
                        >
                          <img
                            src={approveIcon}
                            alt="Approve"
                            style={{ width: "12px" }}
                          />
                        </div>
                      ) : (
                        <></>
                      )}
                      <div
                        className="row-remove-btn"
                        onClick={() => removeHandler(idx.email)}
                      >
                        <img
                          src={removeIcon}
                          alt="Remove"
                          style={{ width: "12px" }}
                        />
                      </div>
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
