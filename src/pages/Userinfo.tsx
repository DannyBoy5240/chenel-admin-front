import React, { useState, ChangeEvent } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Userinfo() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedImage(file ? URL.createObjectURL(file) : null);
  };

  return (
    <main id="main">
      <section className="section-bg">
        <div className="container">
          <div className="mt-5">
            <Form>
              <Form.Group className="mb-3" controlId="1">
                <Form.Label>1. What is your full legal name?</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group className="mb-3" controlId="2">
                <Form.Label>
                  2. Do you have any other names or aliases you have used?
                </Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group className="mb-3" controlId="3">
                <Form.Label>3. When were you born?</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group className="mb-3" controlId="4">
                <Form.Label>
                  4. Where were you born (city and country)?
                </Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group className="mb-3" controlId="5">
                <Form.Label>5. Are you male or female?</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group className="mb-3" controlId="6">
                <Form.Label>6. What is your Social Security Number?</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group className="mb-3" controlId="7">
                <Form.Label>
                  7. What is your Alien Registration Number (A-Number)?
                </Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group className="mb-3" controlId="8">
                <Form.Label>
                  8. What is your current mailing and physical address, those
                  for the last five years?
                </Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group className="mb-3" controlId="9">
                <Form.Label>9. What is your phone number?</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group className="mb-3" controlId="10">
                <Form.Label>10. What is your email address?</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group className="mb-3" controlId="11">
                <Form.Label>
                  11. What is your current immigration status?
                </Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group className="mb-3" controlId="12">
                <Form.Label>
                  12. When did you enter the United States?
                </Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group className="mb-3" controlId="13">
                <Form.Label>
                  13. Where did you enter the United States?
                </Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group className="mb-3" controlId="14">
                <Form.Label>14. What was your port of entry?</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group className="mb-3" controlId="15">
                <Form.Label>
                  15. What type of visa did you use to enter the United States?
                </Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group className="mb-3" controlId="16">
                <Form.Label>
                  16. What is your I-94 Arrival/Departure Record number?
                </Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group className="mb-3" controlId="17">
                <Form.Label>
                  17. Have you ever had a previous visa denied or revoked?
                </Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group className="mb-3" controlId="18">
                <Form.Label>
                  18. Have you previously applied for any immigration benefits?
                </Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group className="mb-3" controlId="19">
                <Form.Label>
                  19. Have you ever been out of status in the United States?
                </Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group className="mb-3" controlId="20">
                <Form.Label>20. What is your marital status?</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group className="mb-3" controlId="21">
                <Form.Label>21. What is your spouse's full name?</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group className="mb-3" controlId="22">
                <Form.Label>22. When was your spouse born?</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group className="mb-3" controlId="23">
                <Form.Label>
                  23. What is your spouse's immigration status?
                </Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group className="mb-3" controlId="24">
                <Form.Label>
                  24. Do you have any children? If yes, provide their names and
                  dates of birth.
                </Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group className="mb-3" controlId="25">
                <Form.Label>25. Where are you currently employed?</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group className="mb-3" controlId="26">
                <Form.Label>26. What is your job title?</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group className="mb-3" controlId="27">
                <Form.Label>27. What are your job responsibilities?</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group className="mb-3" controlId="28">
                <Form.Label>
                  28. When did you start your current job?
                </Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="29"
              >
                <Form.Label>
                  29. Have you worked for any other employers for the past five
                  years? If yes, provide details.
                </Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="30">
                <Form.Label>
                  30. List the countries you have visited outside the United
                  States.
                </Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group className="mb-3" controlId="31">
                <Form.Label>
                  31. Provide the purpose and dates of your last international
                  trip.
                </Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="32"
              >
                <Form.Label>
                  32. Have you ever been arrested or convicted of a crime? If
                  yes, provide details.
                </Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="33">
                <Form.Label>
                  33. Do you have any health conditions that might affect your
                  application?
                </Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group className="mb-3" controlId="34">
                <Form.Label>
                  34. Have you ever been diagnosed with a communicable disease
                  of public health significance?
                </Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group className="mb-3" controlId="35">
                <Form.Label>
                  35. Have you ever been a member of or associated with any
                  terrorist organizations?
                </Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group className="mb-3" controlId="36">
                <Form.Label>
                  36. Have you ever engaged in espionage or sabotage?
                </Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group controlId="formBanner" className="mb-3">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  name="banner_img"
                  type="file"
                  onChange={handleImageChange}
                />
              </Form.Group>

              {selectedImage && (
                <img
                  src={selectedImage}
                  alt="Selected"
                  style={{ marginTop: "5px", maxWidth: "50%" }}
                />
              )}
            </Form>
            <div className="mt-3">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// import React from "react";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
// import { useState } from 'react';

// export default function Application() {
//   return (
//     <main id="main">
//       <section className="section-bg">
//         <div className="container">
//           <div className="mt-5">
//             <Form>
//               <Row className="mb-3">
//                 <Form.Group as={Col} controlId="formGridEmail">
//                   <Form.Label>Name</Form.Label>
//                   <Form.Control type="email" placeholder="Enter name" />
//                 </Form.Group>

//                 <Form.Group as={Col} controlId="formGridPassword">
//                   <Form.Label>email</Form.Label>
//                   <Form.Control type="password" placeholder="example@gmail.com" />
//                 </Form.Group>
//               </Row>

//               <Form.Group className="mb-3" controlId="formGridAddress1">
//                 <Form.Label>Address</Form.Label>
//                 <Form.Control />
//               </Form.Group>

//               <Form.Group className="mb-3" controlId="formGridAddress2">
//                 <Form.Label>Address 2</Form.Label>
//                 <Form.Control placeholder="Apartment, studio, or floor" />
//               </Form.Group>

//               <Row className="mb-3">
//                 <Form.Group as={Col} controlId="formGridCity">
//                   <Form.Label>City</Form.Label>
//                   <Form.Control />
//                 </Form.Group>

//                 <Form.Group as={Col} controlId="formGridState">
//                   <Form.Label>State</Form.Label>
//                   <Form.Select defaultValue="Choose...">
//                     <option>Choose...</option>
//                     <option>...</option>
//                   </Form.Select>
//                 </Form.Group>

//                 <Form.Group as={Col} controlId="formGridZip">
//                   <Form.Label>Zip</Form.Label>
//                   <Form.Control />
//                 </Form.Group>
//               </Row>

//               <Form.Group className="mb-3" id="formGridCheckbox">
//                 <Form.Check type="checkbox" label="Check me out" />
//               </Form.Group>
//             </Form>
//             <Form.Group controlId="formBanner" className="mb-3">
//               <Form.Label>Banner Image</Form.Label>
//               <Form.Control name="banner_img" type="file" />
//             </Form.Group>
//             <Button variant="primary" type="submit">
//               Submit
//             </Button>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }
