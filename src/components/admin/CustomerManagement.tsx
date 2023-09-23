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
        className="py-2"
      >
        <div className="d-inline-flex w-100 px-3 py-2">
          <div style={{ width: "10%" }}>No</div>
          <div style={{ width: "20%" }}>Name</div>
          <div style={{ width: "25%" }}>Email</div>
          <div style={{ width: "30%" }} className="text-end">
            Registered Time
          </div>
          <div style={{ width: "8%" }}></div>
        </div>
      </div>
      <div style={{ overflowY: "auto", height: "60vh" }}>
        {usersList
          .filter((user: any) => user.roles === key.toUpperCase())
          .filter((user: any) => JSON.stringify(user).includes(props.searchKey))
          .map((idx: any, key: any) => {
            return (
              <div className="hover-row-bg-change" key={key} role="button">
                <div className="d-flex w-100 px-3 py-2">
                  <div style={{ width: "10%" }}>{key + 1}</div>
                  <div style={{ width: "20%" }}>{idx.fullName}</div>
                  <div style={{ width: "25%" }}>{idx.email}</div>
                  <div style={{ width: "30%" }} className="text-end">
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
