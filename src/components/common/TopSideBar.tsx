import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export default function TopSideBar() {
  return (
    <div>
      <Dropdown as={ButtonGroup}>
        <Button variant="success">✔</Button>

        <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Select All</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Newest</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Oldest</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
