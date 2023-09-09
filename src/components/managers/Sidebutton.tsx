import React from "react";

export default function SideButton(props: any) {

  return (
    <ul className="nav nav-pills flex-column">
      <li className="nav-item">
        <a
          className={`nav-link ${props.page == "info" && "active"}`}
          onClick={() => props.setPage("info")}
        >
          👨‍👩‍👧User Info
        </a>
      </li>
      <li className="nav-item">
        <a
          className={`nav-link ${props.page == "writer" && "active"}`}
          onClick={() => props.setPage("writer")}
        >
          👩‍🏫Writers
        </a>
      </li>
      <li className="nav-item">
        <a
          className={`nav-link ${props.page == "clerk" && "active"}`}
          onClick={() => props.setPage("clerk")}
        >
          👨‍💼Clerks
        </a>
      </li>
      <li className="nav-item">
        <a
          className={`nav-link ${props.page == "doc" && "active"}`}
          onClick={() => props.setPage("doc")}
        >
          ✔Completed Doc
        </a>
      </li>
    </ul>
  );
}
