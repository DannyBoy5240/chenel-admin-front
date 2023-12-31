import React from "react";

import inboxIcon from "../../assets/icons/inbox-solid.svg";
import toWritersIcon from "../../assets/icons/to-writers.svg";
import toClicksIcon from "../../assets/icons/to-clerks.svg";
import completedDocIcon from "../../assets/icons/completed-doc.svg";
import addPlusIcon from "../../assets/icons/add-new-user.svg";

export default function SideButton(props: any) {
  return (
    <div className="px-3" role="button">
      <div className="py-3">
        <div
          className="px-0 py-3 d-lg-flex text-center text-lg-start"
          style={{ background: "#c2e7ff", borderRadius: "12px" }}
          onClick={() => props.setPage("addnewuser")}
        >
          <div className="px-3">
            <img src={addPlusIcon} className="icon-default-sz" />
          </div>
          <div className="pe-lg-3">Add New User</div>
        </div>
      </div>
      <ul className="nav nav-pills flex-column">
        <li className="nav-item" role="button">
          <a
            className="nav-link text-center text-lg-start"
            style={{
              background: `${props.page == "info" ? "#c2e7ff" : "transparent"}`,
              borderTopRightRadius: "12px",
              borderBottomRightRadius: "12px",
            }}
            onClick={() => props.setPage("info")}
          >
            <span style={{ display: "inline-block", width: "30px" }}>
              <img src={inboxIcon} className="icon-default-sz" />
            </span>
            <span
              style={{
                fontWeight: `${props.page == "info" ? 700 : 500}`,
                color: "black",
              }}
            >
              Inbox
            </span>
          </a>
        </li>
        <li className="nav-item" role="button">
          <a
            className="nav-link text-center text-lg-start"
            style={{
              background: `${
                props.page == "writer" ? "#c2e7ff" : "transparent"
              }`,
              borderTopRightRadius: "12px",
              borderBottomRightRadius: "12px",
            }}
            onClick={() => props.setPage("writer")}
          >
            <span style={{ display: "inline-block", width: "30px" }}>
              <img src={toWritersIcon} className="icon-default-sz" />
            </span>
            <span
              style={{
                fontWeight: `${props.page == "writer" ? 700 : 500}`,
                color: "black",
              }}
            >
              Writers
            </span>
          </a>
        </li>
        <li className="nav-item" role="button">
          <a
            className="nav-link text-center text-lg-start"
            style={{
              background: `${
                props.page == "clerk" ? "#c2e7ff" : "transparent"
              }`,
              borderTopRightRadius: "12px",
              borderBottomRightRadius: "12px",
            }}
            onClick={() => props.setPage("clerk")}
          >
            <span style={{ display: "inline-block", width: "30px" }}>
              <img src={toClicksIcon} className="icon-default-sz" />
            </span>
            <span
              style={{
                fontWeight: `${props.page == "clerk" ? 700 : 500}`,
                color: "black",
              }}
            >
              Clerks
            </span>
          </a>
        </li>
        <li className="nav-item" role="button">
          <a
            className="nav-link text-center text-lg-start"
            style={{
              background: `${props.page == "doc" ? "#c2e7ff" : "transparent"}`,
              borderTopRightRadius: "12px",
              borderBottomRightRadius: "12px",
            }}
            onClick={() => props.setPage("doc")}
          >
            <span style={{ display: "inline-block", width: "30px" }}>
              <img src={completedDocIcon} className="icon-default-sz" />
            </span>
            <span
              style={{
                fontWeight: `${props.page == "doc" ? 700 : 500}`,
                color: "black",
              }}
            >
              Docs
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
}
