import React from "react";
import { Button } from "react-bootstrap";

const FloatingButton = (props: any) => {
  return (
    <Button
      className="floating-button"
      variant="primary"
      size="lg"
      style={{ borderRadius: "50%", width: "50px", height: "50px" }}
      onClick={() => props.onOpen(true)}
    >
      +
    </Button>
  );
};

export default FloatingButton;
