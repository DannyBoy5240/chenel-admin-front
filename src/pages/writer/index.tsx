import React from "react";
import { ListGroup, Badge } from "react-bootstrap";
import { InputGroup, Form, Card, Button } from "react-bootstrap";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";

export default function WriterDashboard(props: any) {
  return (
    <main id="main">
      <section className="section-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Text id="basic-addon2">🔎</InputGroup.Text>
              </InputGroup>

              <Form.Select aria-label="Default select example" className="mb-3">
                <option value="0">Inbox</option>
                <option value="1">Drafts</option>
                <option value="2">Completed</option>
              </Form.Select>

              <ListGroup as="ol" numbered>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Subheading</div>
                    Cras justo odio
                  </div>
                  <Badge bg="primary" pill>
                    14
                  </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Subheading</div>
                    Cras justo odio
                  </div>
                  <Badge bg="primary" pill>
                    14
                  </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Subheading</div>
                    Cras justo odio
                  </div>
                  <Badge bg="primary" pill>
                    14
                  </Badge>
                </ListGroup.Item>
              </ListGroup>
            </div>
            <div className="col-lg-8">
              <Card style={{ height: "73vh" }}>
                <Card.Header as="h5">Ryan Williams</Card.Header>
                <Card.Body>
                  <ReactQuill
                    placeholder="Content"
                    style={{ height: "520px" }}
                    className="mb-5"
                  />
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
