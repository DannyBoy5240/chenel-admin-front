import React, { useState } from "react";
import { InputGroup, Form, ListGroup } from "react-bootstrap";
import { Blog } from "../libs/interfaces";
import BlogItem from "../components/blog/BlogItem";
import FloatingButton from "../components/common/FloatingButton";
import CreateBlogModal from "../components/modals/CreateBlogModal";



const blogs: Array<Blog> = [
  {
    title: "Hello, world!",
    content: "Hello, world! This is my first blog!",
    author: "Leo Messi",
    updatedAt: "2023-06-05",
    createdAt: "2023-04-06",
    views: 10,
    votes: 15,
    category: "Greeting",
    banner_img: "http://195.201.246.182:3000/assets/img/p1.jpg",
    avatar: "http://195.201.246.182:3000/assets/img/team/team-1.jpg",
  },
  {
    title: "Hello, world!",
    content: "Hello, world! This is my first blog!",
    author: "Leo Messi",
    updatedAt: "2023-06-05",
    createdAt: "2023-04-06",
    views: 10,
    votes: 15,
    category: "Greeting",
    banner_img: "http://195.201.246.182:3000/assets/img/p1.jpg",
    avatar: "http://195.201.246.182:3000/assets/img/team/team-2.jpg",
  },
  {
    title: "Hello, world!",
    content: "Hello, world! This is my first blog!",
    author: "Leo Messi",
    updatedAt: "2023-06-05",
    createdAt: "2023-04-06",
    views: 10,
    votes: 15,
    category: "Greeting",
    banner_img: "http://195.201.246.182:3000/assets/img/p1.jpg",
    avatar: "http://195.201.246.182:3000/assets/img/team/team-3.jpg",
  },
];

export default function BlogPage() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <main id="main">
      <FloatingButton onOpen={setModalShow} />
      <section id="blog" className="blog section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 mt-5 row">
              {blogs.map((item: Blog, index: number) => (
                <BlogItem key={index} blog={item} />
              ))}
            </div>
            <div className="col-lg-4" style={{ marginLeft: "20px" }}>
              <InputGroup className="mb-3 mt-5">
                <Form.Control
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Text id="basic-addon2">🔎</InputGroup.Text>
              </InputGroup>
              <ListGroup>
                <ListGroup.Item>
                  <Form.Check // prettier-ignore
                    type="checkbox"
                    label="Greeting"
                  />
                </ListGroup.Item>
                <ListGroup.Item>
                  <Form.Check // prettier-ignore
                    type="checkbox"
                    label="Fashion"
                  />
                </ListGroup.Item>
                <ListGroup.Item>
                  <Form.Check // prettier-ignore
                    type="checkbox"
                    label="Technology"
                  />
                </ListGroup.Item>
                <ListGroup.Item>
                  <Form.Check // prettier-ignore
                    type="checkbox"
                    label="Travel"
                  />
                </ListGroup.Item>
                <ListGroup.Item>
                  <Form.Check // prettier-ignore
                    type="checkbox"
                    label="Food"
                  />
                </ListGroup.Item>
              </ListGroup>
            </div>
          </div>
        </div>
      </section>
      <CreateBlogModal show={modalShow} onHide={() => setModalShow(false)} />
    </main>
  );
}
