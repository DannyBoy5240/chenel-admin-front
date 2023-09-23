import React from "react";

import inboxIcon from "../../assets/icons/inbox-solid.svg";
import completedDocIcon from "../../assets/icons/completed-doc.svg";
import addPlusIcon from "../../assets/icons/add-new-user.svg";

export default function RightSide(props: any) {
  return (
    <div className="px-3" role="button">
      <div className="py-3"></div>
      <ul className="nav nav-pills flex-column">
        <li className="nav-item" role="button">
          <a
            className="nav-link"
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
            className="nav-link"
            style={{
              background: `${props.page == "docs" ? "#c2e7ff" : "transparent"}`,
              borderTopRightRadius: "12px",
              borderBottomRightRadius: "12px",
            }}
            onClick={() => props.setPage("docs")}
          >
            <span style={{ display: "inline-block", width: "30px" }}>
              <img src={completedDocIcon} className="icon-default-sz" />
            </span>
            <span
              style={{
                fontWeight: `${props.page == "docs" ? 700 : 500}`,
                color: "black",
              }}
            >
              Completed Docs
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
}
