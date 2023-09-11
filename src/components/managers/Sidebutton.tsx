import React from "react";

export default function SideButton(props: any) {
  return (
    <div className="px-3" role="button">
      <div className="py-3">
        <div
          className="px-0 py-3 d-inline-flex"
          style={{ background: "#c2e7ff", borderRadius: "12px" }}
          onClick={() => props.setPage("editor")}
        >
          <span className="px-3">+</span>
          <span className="pe-3">Add New User</span>
        </div>
      </div>
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
            <span style={{ display: "inline-block", width: "30px" }}>👨‍👩‍👧</span>
            <span style={{ fontWeight: `${props.page == "info" ? 700 : 500}` }}>
              Users
            </span>
          </a>
        </li>
        <li className="nav-item" role="button">
          <a
            className="nav-link"
            style={{
              background: `${
                props.page == "writer" ? "#c2e7ff" : "transparent"
              }`,
              borderTopRightRadius: "12px",
              borderBottomRightRadius: "12px",
            }}
            onClick={() => props.setPage("writer")}
          >
            <span style={{ display: "inline-block", width: "30px" }}>👩‍🏫</span>
            <span
              style={{ fontWeight: `${props.page == "writer" ? 700 : 500}` }}
            >
              Writers
            </span>
          </a>
        </li>
        <li className="nav-item" role="button">
          <a
            className="nav-link"
            style={{
              background: `${
                props.page == "clerk" ? "#c2e7ff" : "transparent"
              }`,
              borderTopRightRadius: "12px",
              borderBottomRightRadius: "12px",
            }}
            onClick={() => props.setPage("clerk")}
          >
            <span style={{ display: "inline-block", width: "30px" }}>👨‍💼</span>
            <span
              style={{ fontWeight: `${props.page == "clerk" ? 700 : 500}` }}
            >
              Clerks
            </span>
          </a>
        </li>
        <li className="nav-item" role="button">
          <a
            className="nav-link"
            style={{
              background: `${props.page == "doc" ? "#c2e7ff" : "transparent"}`,
              borderTopRightRadius: "12px",
              borderBottomRightRadius: "12px",
            }}
            onClick={() => props.setPage("doc")}
          >
            <span style={{ display: "inline-block", width: "30px" }}>✔</span>
            <span style={{ fontWeight: `${props.page == "doc" ? 700 : 500}` }}>
              Completed Doc
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
}
