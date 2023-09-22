import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import axios from "axios";

import { BACKEND_URL } from "../constants";

import addPlusIcon from "../assets/icons/add-new-user.svg";
import logoImage from "../assets/img/logo.png";

export default function Userinfo() {
  const navigate = useNavigate();
  const location = useLocation();

  const defaultQuestions = [
    "What is your full legal name?",
    "Do you have any other names or aliases you have used?",
    "When were you born?",
    "Where were you born (city and country)?",
    "Are you male or female?",
    "What is your Social Security Number?",
    "What is your Alien Registration Number (A-Number)?",
    "What is your current mailing and physical address, those for the last five years?",
    "What is your phone number?",
    "What is your email address?",
    "What is your current immigration status?",
    "When did you enter the United States?",
    "Where did you enter the United States?",
    "What was your port of entry?",
    "What type of visa did you use to enter the United States?",
    "What is your I-94 Arrival/Departure Record number?",
    "Have you ever had a previous visa denied or revoked?",
    "Have you previously applied for any immigration benefits?",
    "Have you ever been out of status in the United States?",
    "What is your marital status?",
    "What is your spouse's full name?",
    "When was your spouse born?",
    "What is your spouse's immigration status?",
    "Do you have any children? If yes, provide their names and dates of birth.",
    "Where are you currently employed?",
    "What is your job title?",
    "What are your job responsibilities?",
    "When did you start your current job?",
    "Have you worked for any other employers for the past five years? If yes, provide details.",
    "List the countries you have visited outside the United States.",
    "Provide the purpose and dates of your last international trip.",
    "Have you ever been arrested or convicted of a crime? If yes, provide details.",
    "Do you have any health conditions that might affect your application?",
    "Have you ever been diagnosed with a communicable disease of public health significance?",
    "Have you ever been a member of or associated with any terrorist organizations?",
    "Have you ever engaged in espionage or sabotage?",
  ];
  const [info, setInfo] = useState(new Array(36).fill(""));

  const submitDataHandler = async () => {
    const data = {
      email: location.state.email,
      qusans: defaultQuestions.map((qus, idx) => {
        return { qus: qus, ans: info[idx] };
      }),
    };
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(
        `${BACKEND_URL}/users/usersubmitdoc`,
        data,
        config
      );

      if (res.data.success) {
        // return to main manager page
        console.log("userdoc update succeed!");
        navigate("/");
      } else {
        console.log("userdoc update failed!");
      }
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <div className="position-relative w-100 d-flex py-3 align-items-center">
        <div
          className="col-lg-2 d-flex align-items-center"
          role="button"
          onClick={() => navigate("/manager")}
        >
          <div className="px-3">
            <img
              src={logoImage}
              className="img-fluid"
              style={{ width: "60px" }}
              alt="Logo"
            />
          </div>
          <div className="fw-bold">Chenel Service</div>
        </div>
        {/* Save & Submit Button */}
        <div
          className="position-absolute"
          style={{ top: "24px", right: "24px" }}
        >
          {/* <div
            className="px-0 py-2 d-inline-flex mx-2"
            style={{ background: "#c2e7ff", borderRadius: "12px" }}
            onClick={() => saveDataHandler()}
            role="button"
          >
            <span className="px-3">
              <img src={addPlusIcon} className="icon-default-sz" />
            </span>
            <span className="pe-3">Save</span>
          </div> */}
          <div
            className="px-0 py-2 d-inline-flex"
            style={{ background: "#c2e7ff", borderRadius: "12px" }}
            onClick={() => submitDataHandler()}
            role="button"
          >
            <span className="px-3">
              <img src={addPlusIcon} className="icon-default-sz" />
            </span>
            <span className="pe-3">Submit</span>
          </div>
        </div>
      </div>
      <div
        className="px-4"
        style={{ paddingTop: "32px", height: "90vh", overflow: "auto" }}
      >
        {defaultQuestions.map((qus, key) => {
          return (
            <div key={`qus${key + 1}`}>
              <div>
                {key + 1}. {qus}
              </div>
              <div>
                <textarea
                  className="user-input-box"
                  value={info[key]}
                  onChange={(e) => {
                    const updatedInfo = [...info];
                    updatedInfo[key] = e.target.value;
                    setInfo(updatedInfo);
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
