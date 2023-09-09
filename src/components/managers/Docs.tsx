import React from "react";
import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "react-bootstrap/Table";
import FloatingButton from "../common/FloatingButton";

export default function UserInfo() {
  const [key, setKey] = useState("home");
  return (
    <>
      

      <div>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k: string | null) => k && setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="home" title="Home">
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>email</th>
                  <th>Phone Number</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Hyon Ol</td>
                  <td>HyonOl@gmail.com</td>
                  <td>+13677781</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Hyon Ol</td>
                  <td>HyonOl@gmail.com</td>
                  <td>+13677781</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Hyon Ol</td>
                  <td>HyonOl@gmail.com</td>
                  <td>+13677781</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Hyon Ol</td>
                  <td>HyonOl@gmail.com</td>
                  <td>+13677781</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Hyon Ol</td>
                  <td>HyonOl@gmail.com</td>
                  <td>+13677781</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Hyon Ol</td>
                  <td>HyonOl@gmail.com</td>
                  <td>+13677781</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Hyon Ol</td>
                  <td>HyonOl@gmail.com</td>
                  <td>+13677781</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Hyon Ol</td>
                  <td>HyonOl@gmail.com</td>
                  <td>+13677781</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Hyon Ol</td>
                  <td>HyonOl@gmail.com</td>
                  <td>+13677781</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Hyon Ol</td>
                  <td>HyonOl@gmail.com</td>
                  <td>+13677781</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Hyon Ol</td>
                  <td>HyonOl@gmail.com</td>
                  <td>+13677781</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Hyon Ol</td>
                  <td>HyonOl@gmail.com</td>
                  <td>+13677781</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Hyon Ol</td>
                  <td>HyonOl@gmail.com</td>
                  <td>+13677781</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Hyon Ol</td>
                  <td>HyonOl@gmail.com</td>
                  <td>+13677781</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Hyon Ol</td>
                  <td>HyonOl@gmail.com</td>
                  <td>+13677781</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jin Ol</td>
                  <td>JinOl@gmail.com</td>
                  <td>+13333333</td>
                </tr>
              </tbody>
            </Table>
          </Tab>
          <Tab eventKey="profile" title="Profile">
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>email</th>
                  <th>Phone Number</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Hyon Ol</td>
                  <td>HyonOl@gmail.com</td>
                  <td>+13677781</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jin Ol</td>
                  <td>JinOl@gmail.com</td>
                  <td>+13333333</td>
                </tr>
              </tbody>
            </Table>
          </Tab>
          <Tab eventKey="contact" title="Contact">
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>email</th>
                  <th>Phone Number</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Hyon Ol</td>
                  <td>HyonOl@gmail.com</td>
                  <td>+13677781</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jin Ol</td>
                  <td>JinOl@gmail.com</td>
                  <td>+13333333</td>
                </tr>
              </tbody>
            </Table>
          </Tab>
        </Tabs>
      </div>
    </>
  );
}
