import React from "react";
import { Card, Button } from "react-bootstrap";

export default function BlogItem(props: any) {
  return (
    <div className="col-lg-6 package">
      <Card>
        <Card.Img variant="top" src={props.blog.banner_img} />
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }}>
            <h2>{props.blog.title}</h2>
            <span>
              <i>{props.blog.category}</i>
            </span>
          </Card.Title>
          <Card.Text>{props.blog.content}</Card.Text>
          <div className="row">
            <div className="col-lg-3">
              <img
                src={props.blog.avatar}
                alt="avatar"
                style={{ width: "80%", borderRadius: "50%" }}
              />
            </div>
            <div className="col-lg-9">
              <h4>{props.blog.author}</h4> <span>{props.blog.updatedAt}</span>
            </div>
          </div>
          <br></br>
          👀{props.blog.views} 👍{props.blog.votes}
          <div style={{ textAlign: "center" }}>
            <Button variant="link">View More</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
