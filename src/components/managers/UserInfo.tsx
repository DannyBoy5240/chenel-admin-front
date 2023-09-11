import React from "react";
import { useState, useEffect } from "react";

import homeIcon from "../../assets/icon/house-solid.svg";

export default function UserInfo(props: any) {
  const MAX_VALUE = 10005;
  const [key, setKey] = useState("home");
  const [userViewFlag, setUserViewFlag] = useState(0); // flag idx for user item click

  const [temp_userdb, setTemp_UserDB] = useState([
    {
      name: "user1",
      email: "email1@gmail.com",
      phone: "+1 234 56789",
      regtime: "08:20 Sep. 5 2023",
      writer: "",
    },
    {
      name: "user2",
      email: "email2@gmail.com",
      phone: "+1 234 56789",
      regtime: "08:20 Sep. 5 2023",
      writer: "",
    },
    {
      name: "user3",
      email: "email3@gmail.com",
      phone: "+1 234 56789",
      regtime: "08:20 Sep. 5 2023",
      writer: "",
    },
    {
      name: "user4",
      email: "email4@gmail.com",
      phone: "+1 234 56789",
      regtime: "08:20 Sep. 5 2023",
      writer: "",
    },
    {
      name: "user5",
      email: "email5@gmail.com",
      phone: "+1 234 56789",
      regtime: "08:20 Sep. 5 2023",
      writer: "",
    },
    {
      name: "user6",
      email: "email6@gmail.com",
      phone: "+1 234 56789",
      regtime: "08:20 Sep. 5 2023",
      writer: "",
    },
    {
      name: "user7",
      email: "email7@gmail.com",
      phone: "+1 234 56789",
      regtime: "08:20 Sep. 5 2023",
      writer: "",
    },
    {
      name: "user8",
      email: "email8@gmail.com",
      phone: "+1 234 56789",
      regtime: "08:20 Sep. 5 2023",
      writer: "",
    },
    {
      name: "user9",
      email: "email9@gmail.com",
      phone: "+1 234 56789",
      regtime: "08:20 Sep. 5 2023",
      writer: "",
    },
    {
      name: "user10",
      email: "email0@gmail.com",
      phone: "+1 234 56789",
      regtime: "08:20 Sep. 5 2023",
      writer: "",
    },
    {
      name: "user11",
      email: "email11@gmail.com",
      phone: "+1 234 56789",
      regtime: "08:20 Sep. 5 2023",
      writer: "",
    },
    {
      name: "user12",
      email: "email12@gmail.com",
      phone: "+1 234 56789",
      regtime: "08:20 Sep. 5 2023",
      writer: "",
    },
    {
      name: "user12",
      email: "email12@gmail.com",
      phone: "+1 234 56789",
      regtime: "08:20 Sep. 5 2023",
      writer: "",
    },
    {
      name: "user12",
      email: "email12@gmail.com",
      phone: "+1 234 56789",
      regtime: "08:20 Sep. 5 2023",
      writer: "",
    },
    {
      name: "user12",
      email: "email12@gmail.com",
      phone: "+1 234 56789",
      regtime: "08:20 Sep. 5 2023",
      writer: "",
    },
    {
      name: "user12",
      email: "email12@gmail.com",
      phone: "+1 234 56789",
      regtime: "08:20 Sep. 5 2023",
      writer: "",
    },
  ]);
  const temp_userinfo = {
    name: "user",
    email: "user@gmail.com",
    phone: "+1 234 56789",
    writer: "writer",
    regtime: "08:20 Sep. 5 2023",
    data: [
      {
        qus: "What is your full legal name?",
        ans: "Answer1",
      },
      {
        qus: "Do you have any other names or aliases you have used?",
        ans: "Answer2",
      },
      {
        qus: "When were you born?",
        ans: "Answer3",
      },
      {
        qus: "Where were you born (city and country)?",
        ans: "Answer4",
      },
      {
        qus: "Are you male or female?",
        ans: "Answer5",
      },
      {
        qus: "What is your Social Security Number?",
        ans: "Answer6",
      },
      {
        qus: "What is your Alien Registration Number (A-Number)?",
        ans: "Answer7",
      },
      {
        qus: "What is your current mailing and physical address, those for the last five years?",
        ans: "Answer8",
      },
      {
        qus: "What is your phone number?",
        ans: "Answer9",
      },
      {
        qus: "What is your email address?",
        ans: "Answer10",
      },
      {
        qus: "What is your current immigration status?",
        ans: "Answer11",
      },
      {
        qus: "When did you enter the United States?",
        ans: "Answer12",
      },
      {
        qus: "Where did you enter the United States?",
        ans: "Answer13",
      },
      {
        qus: "What was your port of entry?",
        ans: "Answer14",
      },
      {
        qus: "What type of visa did you use to enter the United States?",
        ans: "Answer15",
      },
      {
        qus: "What is your I-94 Arrival/Departure Record number?",
        ans: "Answer16",
      },
      {
        qus: "Have you ever had a previous visa denied or revoked?",
        ans: "Answer17",
      },
      {
        qus: "Have you previously applied for any immigration benefits?",
        ans: "Answer18",
      },
      {
        qus: "Have you ever been out of status in the United States?",
        ans: "Answer19",
      },
      {
        qus: "What is your marital status?",
        ans: "Answer20",
      },
      {
        qus: "What is your spouse's full name?",
        ans: "Answer21",
      },
      {
        qus: "When was your spouse born?",
        ans: "Answer22",
      },
      {
        qus: "What is your spouse's immigration status?",
        ans: "Answer23",
      },
      {
        qus: "Do you have any children? If yes, provide their names and dates of birth.",
        ans: "Answer24",
      },
      {
        qus: "Where are you currently employed?",
        ans: "Answer25",
      },
      {
        qus: "What is your job title?",
        ans: "Answer26",
      },
      {
        qus: "What are your job responsibilities?",
        ans: "Answer27",
      },
      {
        qus: "When did you start your current job?",
        ans: "Answer28",
      },
      {
        qus: "Have you worked for any other employers for the past five years? If yes, provide details.",
        ans: "Answer29",
      },
      {
        qus: "List the countries you have visited outside the United States.",
        ans: "Answer30",
      },
      {
        qus: "Provide the purpose and dates of your last international trip.",
        ans: "Answer31",
      },
      {
        qus: "Have you ever been arrested or convicted of a crime? If yes, provide details.",
        ans: "Answer32",
      },
      {
        qus: "Do you have any health conditions that might affect your application?",
        ans: "Answer33",
      },
      {
        qus: "Have you ever been diagnosed with a communicable disease of public health significance?",
        ans: "Answer34",
      },
      {
        qus: "Have you ever been a member of or associated with any terrorist organizations?",
        ans: "Answer35",
      },
      {
        qus: "Have you ever engaged in espionage or sabotage?",
        ans: "Answer36",
      },
    ],
  };

  const [flagWriterUser, setFlagWriterUser] = useState(
    new Array(MAX_VALUE).fill(0)
  );
  const [flagWriterIdx, setFlagWriterIdx] = useState(0);

  const userViewHandler = (idx: any) => {
    console.log(`user ${idx} view clicked!`);
    setUserViewFlag(idx);
  };

  const removeUserHandler = () => {
    console.log(`user ${userViewFlag} will be deleted!`);
  };

  const setWriterUserManageHandler = () => {
    console.log("Set users to writer!");

    setTemp_UserDB((prevTemp_UserDB: any) => {
      return prevTemp_UserDB.map((data: any, idx: any) => {
        if (flagWriterUser[idx] != 0) {
          console.log("idx -> ", idx, " context -> ", temp_userdb[idx].name);
          return { ...data, writer: temp_userdb[flagWriterIdx].name };
        } else {
          // Keep other elements unchanged
          return data;
        }
      });
    });
  };

  return (
    <div className="h-100">
      {/* Summary View */}
      {userViewFlag == 0 ? (
        <div
          className="d-flex flex-column h-100"
          style={{ paddingBottom: "100px" }}
        >
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex">
              <div
                className={`${
                  key == "home" ? "bg-header-clicked" : "hover-bg-header-change"
                }`}
                style={{ width: "180px", textAlign: "center", padding: "15px" }}
                role="button"
                onClick={() => {
                  setKey("home");
                }}
              >
                <span className="px-1">Home</span>
              </div>
              <div
                className={`${
                  key == "towriters"
                    ? "bg-header-clicked"
                    : "hover-bg-header-change"
                }`}
                style={{ width: "180px", textAlign: "center", padding: "15px" }}
                role="button"
                onClick={() => {
                  setKey("towriters");
                }}
              >
                To Writers
              </div>
              <div
                className={`${
                  key == "toclerks"
                    ? "bg-header-clicked"
                    : "hover-bg-header-change"
                }`}
                style={{ width: "180px", textAlign: "center", padding: "15px" }}
                role="button"
                onClick={() => {
                  setKey("toclerks");
                }}
              >
                To Clerks
              </div>
            </div>
            <div className="pe-3"></div>
          </div>
          {/* Table Body */}
          {key === "home" ? (
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
                    <div
                      key={key}
                      role="button"
                      className="hover-row-bg-change"
                    >
                      <div
                        className="d-flex w-100 px-3 py-2"
                        onClick={() => userViewHandler(key + 1)}
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
          ) : key === "towriters" ? (
            <div className="d-flex">
              <div className="w-75">
                <div
                  className="w-75"
                  style={{ overflowY: "auto", height: "60vh" }}
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
                  {temp_userdb.map((data: any, idx: any) => {
                    return (
                      <div
                        className={`w-100 d-inline-flex px-3 py-2 hover-row-bg-change ${
                          flagWriterUser[idx] !== 0 && "row-bg-clicked"
                        }`}
                        key={"userwriter" + idx}
                        role="button"
                        onClick={() => {
                          let tempUserList = [...flagWriterUser]; // Create a new array to avoid mutating state directly
                          tempUserList[idx] = !tempUserList[idx]; // Toggle the value at idx
                          setFlagWriterUser(tempUserList);
                        }}
                      >
                        <div className="w-25">{idx + 1}</div>
                        <div className="w-25">{data.name}</div>
                        <div className="w-25">{data.writer}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="w-50">
                <div
                  className="w-50"
                  style={{ overflowY: "auto", height: "60vh" }}
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
                  {temp_userdb.map((data: any, idx: any) => {
                    return (
                      <div
                        className={`w-100 d-flex px-3 py-2 hover-row-bg-change ${
                          flagWriterIdx == idx + 1
                            ? "row-bg-clicked"
                            : "hover-row-bg-change"
                        }`}
                        role="button"
                        key={"userwriter" + idx}
                        onClick={() => setFlagWriterIdx(idx + 1)}
                      >
                        <div className="w-50">{idx + 1}</div>
                        <div className="w-50">{data.name}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div
                className="w-25 align-items-center d-flex"
                style={{ height: "60vh" }}
              >
                <div
                  className="bg-info px-5 py-2 rounded-pill"
                  role="button"
                  onClick={() => setWriterUserManageHandler()}
                >
                  Send
                </div>
              </div>
            </div>
          ) : key === "toclerks" ? (
            <div></div>
          ) : (
            <div></div>
          )}
        </div>
      ) : key === "home" ? (
        <div>
          {/* User Info View with Idx Toolbar */}
          <div className="d-flex py-1 w-full justify-content-between">
            <div className="d-flex">
              <div className="p-1" onClick={() => setUserViewFlag(0)}>
                Back
              </div>
              <div className="p-1" onClick={() => removeUserHandler()}>
                Delete
              </div>
            </div>
            <div>Registration Time: {temp_userinfo.regtime}</div>
          </div>
          {/* Main Content */}
          <div style={{ height: "70vh", overflow: "auto" }}>
            <div className="container">
              <div className="row px-2">
                <div className="col-12 col-sm-6">
                  <div>Name: {temp_userinfo.name}</div>
                </div>
                <div className="col-12 col-sm-6">
                  <div>Email: {temp_userinfo.email}</div>
                </div>
                <div className="col-12 col-sm-6">
                  <div>Phone: {temp_userinfo.phone}</div>
                </div>
                <div className="col-12 col-sm-6">
                  <div>Writer: {temp_userinfo.writer}</div>
                </div>
              </div>
            </div>
            <div className="px-2 py-1">
              {temp_userinfo.data.map((data: any, idx: any) => {
                return (
                  <div key={`userinfo+${idx}`}>
                    <div>
                      {idx + 1}. {data.qus}
                    </div>
                    <div>{data.ans}</div>
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
