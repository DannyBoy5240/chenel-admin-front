import React from "react";

export default function Footer() {
  return (
    <div className="position-absolute bottom-0 vw-100 z-index-50 bg-white">
      <div className="d-flex p-4 justify-content-between w-full footer">
        <div>
          &copy; Copyright{" "}
          <strong>
            <span>Chenel</span>
          </strong>
          . All Rights Reserved
        </div>
        <div>
          <strong>Phone:</strong> +1 5589 55488 55
        </div>
        <div>
          <strong>Email:</strong> info@example.com
        </div>
        <div>www.reallygreatsite.com</div>
      </div>
    </div>
  );
}
