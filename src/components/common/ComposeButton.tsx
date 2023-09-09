import React from "react";
import { Button } from "react-bootstrap";

const ComposeButton = (props: any) => {
  return (
    <Button
      className="floating-button"
      variant="primary"
      size="lg"
      style={{ borderRadius: "50%", width: "50px", height: "50px" }}
      onClick={() => props.onOpen("editor")}
    >
      +
    </Button>
  );
};

export default ComposeButton;
