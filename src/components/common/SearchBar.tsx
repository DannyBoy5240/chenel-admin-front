import React from "react";
import { InputGroup, Form } from "react-bootstrap";

export default function SearchBar() {
  return (
    <InputGroup className="mb-3">
      <Form.Control
        placeholder="Recipient's username"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
      />
      <InputGroup.Text id="basic-addon2">🔎</InputGroup.Text>
    </InputGroup>
  );
};
