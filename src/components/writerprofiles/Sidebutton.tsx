import React from "react";

export default function SideButton(props: any) {

  return (
    <ul className="nav nav-pills flex-column">
      <li className="nav-item">
        <a
          className={`nav-link ${props.page == "info" && "active"}`}
          onClick={() => props.setPage("info")}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          className={`nav-link ${props.page == "profile" && "active"}`}
          onClick={() => props.setPage("profile")}
        >
          Profile
        </a>
      </li>
    </ul>
  );
}
