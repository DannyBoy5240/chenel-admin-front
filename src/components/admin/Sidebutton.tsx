import React from "react";

import employeeIcon from "../../assets/icons/inbox-solid.svg";
import customerIcon from "../../assets/icons/to-writers.svg";

export default function SideButton(props: any) {
  return (
    <div className="px-3" role="button">
      <div className="py-3"></div>
      <ul className="nav nav-pills flex-column">
        {/* Employee Management */}
        <li className="nav-item" role="button">
          <a
            className="nav-link text-center text-lg-start"
            style={{
              background: `${
                props.page == "employee" ? "#c2e7ff" : "transparent"
              }`,
              borderTopRightRadius: "12px",
              borderBottomRightRadius: "12px",
            }}
            onClick={() => props.setPage("employee")}
          >
            <span style={{ display: "inline-block", width: "30px" }}>
              <img src={employeeIcon} className="icon-default-sz" />
            </span>
            <span
              style={{
                fontWeight: `${props.page == "employee" ? 700 : 500}`,
                color: "black",
              }}
            >
              Employees
            </span>
          </a>
        </li>
        {/* Customer Management */}
        <li className="nav-item" role="button">
          <a
            className="nav-link text-center text-lg-start"
            style={{
              background: `${
                props.page == "customer" ? "#c2e7ff" : "transparent"
              }`,
              borderTopRightRadius: "12px",
              borderBottomRightRadius: "12px",
            }}
            onClick={() => props.setPage("customer")}
          >
            <span style={{ display: "inline-block", width: "30px" }}>
              <img src={customerIcon} className="icon-default-sz" />
            </span>
            <span
              style={{
                fontWeight: `${props.page == "customer" ? 700 : 500}`,
                color: "black",
              }}
            >
              Customers
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
}
