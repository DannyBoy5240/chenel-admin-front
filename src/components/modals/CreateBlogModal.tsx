import React from "react";
import {
  Modal,
  Form,
  Button,
  InputGroup,
  FloatingLabel,
} from "react-bootstrap";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";

export default function CreateBBlogModal(props: any) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create a Blog
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formTitle" className="mb-3">
            <Form.Control type="text" name="title" placeholder="Title" />
          </Form.Group>

          <Form.Group controlId="formCategory" className="mb-3">
            <Form.Select name="category">
              <option>Category</option>
              <option>Greeting</option>
              <option>Technology</option>
              <option>Fashion</option>
              <option>Food</option>
              <option>Travel</option>
            </Form.Select>
          </Form.Group>

          <Form.Group controlId="formBanner" className="mb-3">
            <Form.Label>Banner Image</Form.Label>
            <Form.Control name="banner_img" type="file" />
          </Form.Group>

          <Form.Group controlId="formContent" className="mb-5">
            <ReactQuill placeholder="Content" style={{ height: "200px" }} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.onHide}>
          Close
        </Button>
        <Button variant="primary">Submit</Button>
      </Modal.Footer>
    </Modal>
  );
}
