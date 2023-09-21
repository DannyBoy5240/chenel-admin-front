import React, { useState } from "react";
import { ListGroup, Badge, Form } from "react-bootstrap";
import { UserListItem } from "../../libs/interfaces";

const users: Array<UserListItem> = [
  {
    name: "Hyon Ol",
    email: "HyonOl@gmail.com",
    status: "ibox",
  },
  {
    name: "Jin Ol",
    email: "jinOl@gmail.com",
    status: "drafts",
  },
  {
    name: "Jong A",
    email: "jinOl@gmail.com",
    status: "completed",
  },
  {
    name: "Tom",
    email: "jinOl@gmail.com",
    status: "drafts",
  },
  {
    name: "Jerry",
    email: "jinOl@gmail.com",
    status: "ibox",
  },
  {
    name: "Micky",
    email: "jinOl@gmail.com",
    status: "completed",
  },
];

export default function RightSideBar(props: any) {
  const [status, setStatus] = useState<string>("all");
  console.log(status);
  return (
    <React.Fragment>
      <Form.Select
        name="status"
        value={status}
        onChange={(e: any) => setStatus(e.target.value)}
        aria-label="Default select example"
        className="mb-3"
      >
        <option value="all">All</option>
        <option value="ibox">Inbox</option>
        <option value="drafts">Drafts</option>
        <option value="completed">Completed</option>
      </Form.Select>

      <ListGroup as="ol" numbered>
        {users.map((item: UserListItem, index: number) => {
          if (status == "all" || status == item.status) {
            return (
              <ListGroup.Item
                key={index}
                as="li"
                className="d-flex justify-content-between align-items-start"
                onClick={() => props.setName(item.name)}
                active={props.name == item.name}
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{item.name}</div>
                  {item.email}
                </div>
                <Badge bg="primary" pill>
                  {item.status}
                </Badge>
              </ListGroup.Item>
            );
          }
        })}
      </ListGroup>
    </React.Fragment>
  );
}
