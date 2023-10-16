import React, { useState, useEffect } from "react";

import houseSolidIcon from "../../assets/icons/house-solid.svg";
import toWritersIcon from "../../assets/icons/to-writers.svg";
import toClerksIcon from "../../assets/icons/to-clerks.svg";
import backIcon from "../../assets/icons/back.png";
import removeIcon from "../../assets/icons/delete.svg";

import axios from "axios";

import { BACKEND_URL } from "../../constants";

export default function UserInfo(props: any) {
  const MAX_VALUE = 10005;
  const [key, setKey] = useState("home");
  const [userViewFlag, setUserViewFlag] = useState(0); // flag idx for user item click

  const [userList, setUserList] = useState([]);
  const [docList, setDocList] = useState([]);

  const [flagWriterUser, setFlagWriterUser] = useState(
    new Array(MAX_VALUE).fill(0)
  );
  const [flagWriterIdx, setFlagWriterIdx] = useState(0);
  const [flagClerkUser, setFlagClerkUser] = useState(
    new Array(MAX_VALUE).fill(0)
  );
  const [flagClerkIdx, setFlagClerkIdx] = useState(0);

  const fetchUserData = async () => {
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
    fetchUserData();
  }, []);

  const [userDocContent, setUserDocContent] = useState([]);

  const fetchUserDocData = async (email: any) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(
        `${BACKEND_URL}/users/viewdoc`,
        { email: email },
        config
      );
      if (res.data.success) setUserDocContent(res.data.users.qusans);
      else setUserDocContent([]);
    } catch (err: any) {
      console.log(err.message);
    }
  };

  const userViewHandler = (idx: any, email: String) => {
    fetchUserDocData(email);
    setUserViewFlag(idx);
  };

  const removeUserHandler = () => {
    console.log(`user ${userViewFlag} will be deleted!`);
  };

  const setWriterUserManageHandler = async () => {
    if (flagWriterIdx == 0) return;

    const data = {
      info: userList
        .filter((user: any) => user.roles === "CUSTOMER")
        .filter((val: any, idx: any) => flagWriterUser[idx] === 1),
      writer: userList.filter((user: any) => user.roles === "WRITER")[
        flagWriterIdx - 1
      ],
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(
        `${BACKEND_URL}/users/updateUserWriter`,
        data,
        config
      );
    } catch (err: any) {
      console.log(err.message);
    }

    // Clear FlagWriterUser
    setFlagWriterUser(new Array(MAX_VALUE).fill(0));
    setFlagWriterIdx(0);

    // update information
    fetchUserData();
  };

  const setClerkUserManageHandler = async () => {
    if (flagClerkIdx == 0) return;

    const data = {
      info: userList
        .filter((user: any) => user.roles === "CUSTOMER")
        .filter((val: any, idx: any) => flagClerkUser[idx] === 1),
      clerk: userList.filter((user: any) => user.roles === "CLERK")[
        flagClerkIdx - 1
      ],
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(
        `${BACKEND_URL}/users/updateUserClerk`,
        data,
        config
      );
    } catch (err: any) {
      console.log(err.message);
    }

    // Clear FlagWriterUser
    setFlagClerkUser(new Array(MAX_VALUE).fill(0));
    setFlagClerkIdx(0);

    // update information
    fetchUserData();
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
    <div className="h-100">
      {/* Summary View */}
      {userViewFlag == 0 ? (
        <div className="d-flex flex-column h-100">
          <div
            className="d-flex justify-content-between align-items-center"
            style={{
              backgroundColor: "white",
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
            }}
          >
            <div className="d-flex">
              <div
                className={`${
                  key == "home"
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
                  setKey("home");
                }}
              >
                <span className="px-1">
                  <img src={houseSolidIcon} className="icon-default-sz mb-1" />
                </span>
                <span className="px-1">Home</span>
              </div>
              <div
                className={`${
                  key == "towriters"
                    ? "bg-header-clicked"
                    : "hover-bg-header-change"
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
                  setKey("towriters");
                }}
              >
                <span className="px-1">
                  <img src={toWritersIcon} className="icon-default-sz" />
                </span>
                <span className="px-1">To Writers</span>
              </div>
              <div
                className={`${
                  key == "toclerks"
                    ? "bg-header-clicked"
                    : "hover-bg-header-change"
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
                  setKey("toclerks");
                }}
              >
                <span className="px-1">
                  <img src={toClerksIcon} className="icon-default-sz" />
                </span>
                <span className="px-1">To Clerks</span>
              </div>
            </div>
            <div className="pe-3"></div>
          </div>
          {/* Table Body */}
          {key === "home" ? (
            <div>
              <div style={{ overflowY: "auto", height: "calc(100vh - 170px)" }}>
                {userList
                  .filter((user: any) => user.roles === "CUSTOMER")
                  .map((idx: any, key: any) => {
                    return (
                      <div
                        key={key}
                        role="button"
                        className="hover-row-bg-change"
                      >
                        <div
                          className="d-flex w-100 px-3 py-2 align-items-center"
                          onClick={() => userViewHandler(key + 1, idx.email)}
                        >
                          <div className="w-25 d-flex">
                            <div className="w-50">{key + 1}</div>
                            <div className="w-50">{idx.fullName}</div>
                          </div>
                          <div className="w-50 d-flex">
                            <div className="w-50">{idx.email}</div>
                            <div className="w-50">{idx.phoneNumber}</div>
                          </div>
                          <div className="w-25 text-end">
                            {convertToUSDateTime(idx.regTime)}
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          ) : key === "towriters" ? (
            <div className="d-flex">
              <div className="w-50">
                <div
                  style={{
                    overflowY: "auto",
                    height: "calc(100vh - 170px)",
                    paddingRight: "2px",
                  }}
                >
                  {/* Users Header */}
                  <div
                    key={key}
                    role="button"
                    style={{ background: "#c2e7ff" }}
                    className="w-100"
                  >
                    <div className="w-100 d-inline-flex px-3 py-2">
                      <div className="w-25">No</div>
                      <div className="w-25">Name</div>
                      <div className="w-25">Writer</div>
                    </div>
                  </div>
                  {/* Users Content */}
                  {userList
                    .filter((user: any) => user.roles === "CUSTOMER")
                    .map((data: any, idx: any) => {
                      return (
                        <div
                          className={`w-100 d-inline-flex px-3 py-2 ${
                            flagWriterUser[idx] === 1
                              ? "row-bg-clicked"
                              : "hover-row-bg-change"
                          }`}
                          key={"userwriter" + idx}
                          role="button"
                          onClick={() => {
                            let tempUserList = [...flagWriterUser]; // Create a new array to avoid mutating state directly
                            tempUserList[idx] = 1 - tempUserList[idx]; // Toggle the value at idx
                            setFlagWriterUser(tempUserList);
                          }}
                        >
                          <div className="w-25">{idx + 1}</div>
                          <div className="w-25">{data.fullName}</div>
                          <div className="w-25">
                            {
                              (
                                userList.filter(
                                  (user: any) =>
                                    user.email ===
                                    (
                                      docList.filter(
                                        (doc: any) => doc.email === data.email
                                      )[0] as any
                                    ).writer
                                )[0] as any
                              )?.fullName // Render the email property
                            }
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
              <div className="w-50">
                <div
                  style={{ overflowY: "auto", height: "calc(100vh - 170px)" }}
                >
                  {/* Writers Header */}
                  <div
                    key={key}
                    role="button"
                    style={{ background: "#c2e7ff" }}
                    className="w-100"
                  >
                    <div className="w-100 d-inline-flex px-3 py-2">
                      <div className="w-50">No</div>
                      <div className="w-50">Name</div>
                    </div>
                  </div>
                  {/* Writers Content */}
                  {userList
                    .filter((user: any) => user.roles === "WRITER")
                    .map((data: any, idx: any) => {
                      return (
                        <div
                          className={`position-relative w-100 d-flex px-3 py-2 ${
                            flagWriterIdx == idx + 1
                              ? "row-bg-clicked"
                              : "hover-row-bg-change"
                          }`}
                          role="button"
                          key={"userwriter" + idx}
                          onClick={() => setFlagWriterIdx(idx + 1)}
                        >
                          <div className="w-50">{idx + 1}</div>
                          <div className="w-50">{data.fullName}</div>
                          <div
                            role="button"
                            className="position-absolute row-send-btn"
                            style={{ zIndex: 100, top: 8, right: 10 }}
                            onClick={() => setWriterUserManageHandler()}
                          >
                            Send
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          ) : key === "toclerks" ? (
            <div className="d-flex">
              <div className="w-50">
                <div
                  style={{
                    overflowY: "auto",
                    height: "calc(100vh - 170px)",
                    paddingRight: "2px",
                  }}
                >
                  {/* Users Header */}
                  <div
                    key={key}
                    role="button"
                    style={{ background: "#c2e7ff" }}
                    className="w-100"
                  >
                    <div className="w-100 d-inline-flex px-3 py-2">
                      <div className="w-25">No</div>
                      <div className="w-25">Name</div>
                      <div className="w-25">Clerk</div>
                    </div>
                  </div>
                  {/* Users Content */}
                  {userList
                    .filter((user: any) => user.roles === "CUSTOMER")
                    .map((data: any, idx: any) => {
                      return (
                        <div
                          className={`w-100 d-inline-flex px-3 py-2 ${
                            flagClerkUser[idx] === 1
                              ? "row-bg-clicked"
                              : "hover-row-bg-change"
                          }`}
                          key={"userclerk" + idx}
                          role="button"
                          onClick={() => {
                            let tempUserList = [...flagClerkUser]; // Create a new array to avoid mutating state directly
                            tempUserList[idx] = 1 - tempUserList[idx]; // Toggle the value at idx
                            setFlagClerkUser(tempUserList);
                          }}
                        >
                          <div className="w-25">{idx + 1}</div>
                          <div className="w-25">{data.fullName}</div>
                          <div className="w-25">
                            {
                              (
                                userList.filter(
                                  (user: any) =>
                                    user.email ===
                                    (
                                      docList.filter(
                                        (doc: any) => doc.email === data.email
                                      )[0] as any
                                    ).clerk
                                )[0] as any
                              )?.fullName // Render the email property
                            }
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
              <div className="w-50">
                <div
                  style={{ overflowY: "auto", height: "calc(100vh - 170px)" }}
                >
                  {/* Clerks Header */}
                  <div
                    key={key}
                    role="button"
                    style={{ background: "#c2e7ff" }}
                    className="w-100"
                  >
                    <div className="w-100 d-inline-flex px-3 py-2">
                      <div className="w-50">No</div>
                      <div className="w-50">Name</div>
                    </div>
                  </div>
                  {/* Clerks Content */}
                  {userList
                    .filter((user: any) => user.roles === "CLERK")
                    .map((data: any, idx: any) => {
                      return (
                        <div
                          className={`position-relative w-100 d-flex px-3 py-2 ${
                            flagClerkIdx == idx + 1
                              ? "row-bg-clicked"
                              : "hover-row-bg-change"
                          }`}
                          role="button"
                          key={"userclerk" + idx}
                          onClick={() => setFlagClerkIdx(idx + 1)}
                        >
                          <div className="w-50">{idx + 1}</div>
                          <div className="w-50">{data.fullName}</div>
                          <div
                            role="button"
                            className="position-absolute row-send-btn"
                            style={{ zIndex: 100, top: 8, right: 10 }}
                            onClick={() => setClerkUserManageHandler()}
                          >
                            Send
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      ) : key === "home" ? (
        <div
          className="p-4"
          style={{ backgroundColor: "white", borderRadius: "20px" }}
        >
          {/* User Info View with Idx Toolbar */}
          <div className="d-flex py-1 w-full justify-content-between">
            <div className="d-flex">
              <div
                className="p-1"
                onClick={() => setUserViewFlag(0)}
                role="button"
              >
                <img src={backIcon} className="icon-default-sz" />
              </div>
              {/* <div
                className="p-1"
                onClick={() => removeUserHandler()}
                role="button"
              >
                <img src={removeIcon} className="icon-default-sz" />
              </div> */}
            </div>
            <div>
              Registration Time :
              {convertToUSDateTime((userList[userViewFlag] as any).regTime)}
            </div>
          </div>
          {/* Main Content */}
          <div style={{ height: "calc(100vh - 180px)", overflow: "auto" }}>
            <div className="container pt-2 pb-4">
              <div className="row px-2" style={{ fontSize: "18px" }}>
                <div className="col-12 col-sm-6 py-1">
                  <div>Name: {(userList[userViewFlag] as any).fullName}</div>
                </div>
                <div className="col-12 col-sm-6 py-1">
                  <div>Email: {(userList[userViewFlag] as any).email}</div>
                </div>
                <div className="col-12 col-sm-6 py-1">
                  <div>
                    Phone: {(userList[userViewFlag] as any).phoneNumber}
                  </div>
                </div>
                <div className="col-12 col-sm-6 py-1">
                  <div>Writer: {(userList[userViewFlag] as any).writer}</div>
                </div>
              </div>
            </div>
            <div className="px-2 py-1">
              {userDocContent.map((data: any, idx: any) => {
                return (
                  <div key={`userinfo+${idx}`}>
                    <div style={{ fontSize: "18px" }}>
                      {idx + 1}. {data.qus}
                    </div>
                    <div style={{ lineHeight: "30px" }}>
                      {data.ans ? data.ans : "------"}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <>Else</>
      )}
    </div>
  );
}
