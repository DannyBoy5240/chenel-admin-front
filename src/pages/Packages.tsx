import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Packages() {
  const [hoveredElement, setHoveredElement] = React.useState(0);

  const handleMouseEnter = (elementId: number) => {
    setHoveredElement(elementId);
  };

  const handleMouseLeave = () => {
    setHoveredElement(0);
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 d-flex package">
            <Card
              style={{
                border:
                  hoveredElement === 1
                    ? "3px solid cadetblue"
                    : "3px solid gray",
              }}
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
            >
              <Card.Img
                variant="top"
                src="http://localhost:3000/assets/img/p1.jpg"
              />
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  <h2>Simple Asylum</h2>
                  <h4>
                    <sup>$</sup>799.00<span> / month</span>
                  </h4>
                </Card.Title>
                <Card.Text>
                  <ul>
                    <li>
                      Comprehensive asylum application, including narrative.
                    </li>
                    <li>Checks for both defensive and affirmative asylum.</li>
                    <li>Online submission capabilities if required.</li>
                    <br></br>
                  </ul>
                </Card.Text>
                <div style={{ textAlign: "center" }}>
                  <Button variant="primary">I Choose This</Button>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 d-flex package">
            <Card
              style={{
                border:
                  hoveredElement === 2
                    ? "3px solid cadetblue"
                    : "3px solid gray",
              }}
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
            >
              <Card.Img
                variant="top"
                src="http://localhost:3000/assets/img/p2.jpg"
              />
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  <h2>Advanced Asylum</h2>
                  <h4>
                    <sup>$</sup>999.00<span> / month</span>
                  </h4>
                </Card.Title>
                <Card.Text>
                  <ul>
                    <li>All features of the Simple Asylum package.</li>
                    <br></br>
                    <li>Flexible multiple payment options.</li>
                    <br></br>
                    <li>Complimentary change of address once.</li>
                    <br></br>
                  </ul>
                </Card.Text>
                <div style={{ textAlign: "center" }}>
                  <Button variant="primary">I Choose This</Button>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 d-flex package">
            <Card
              style={{
                border:
                  hoveredElement === 3
                    ? "3px solid cadetblue"
                    : "3px solid gray",
              }}
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={handleMouseLeave}
            >
              <Card.Img
                variant="top"
                src="http://localhost:3000/assets/img/p3.jpg"
              />
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  <h2>Accompanied Asylum</h2>
                  <h4>
                    <sup>$</sup>1,299.00<span> / month</span>
                  </h4>
                </Card.Title>
                <Card.Text>
                  <ul>
                    <li>
                      Includes everything from the Advanced Asylum package.
                    </li>
                    <li>
                      Legal representation through our affiliated attorneys.
                    </li>
                    <li>
                      Complimentary Change of Venue" in the Accompanied Asylum
                      package
                    </li>
                  </ul>
                </Card.Text>
                <div style={{ textAlign: "center" }}>
                  <Button variant="primary">I Choose This</Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
