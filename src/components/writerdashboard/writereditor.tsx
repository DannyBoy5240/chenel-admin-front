import React from "react";
import { Card, Button, Form } from "react-bootstrap";
import "react-quill/dist/quill.snow.css";

export default function Editor(props: any) {
  return (
    <Card style={{ height: "73vh" }}>
      <Card.Header as="h5">{props.name}</Card.Header>
      <Card.Body style={{ overflowY: "auto" }}>
        <Form.Group controlId="formBanner0" className="mb-3">
          <Form.Label>
            1. What is your name? Can you spell it? Do you have a document that
            shows your name such as a passport or work permit or driver’s
            license?
          </Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group controlId="formBanner1" className="mb-3">
          <Form.Label>
            2. What is your date of birth? See if it corresponds to whatever
            document that the client has provided.
          </Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group controlId="formBanner2" className="mb-3">
          <Form.Label>
            3. Where were you born? What city were you born in? What department
            is that? Are your parents from that same city? Where else in Haiti
            do you have family members (close or extended; this question is
            important because later, the client might flee there to save her
            life)?
          </Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group controlId="formBanner3" className="mb-3">
          <Form.Label>
            4. How big was your family? How many brothers? How many sisters?
            Were your parents married? Did either have other romantic or
            extramarital relations?
          </Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group controlId="formBanner4" className="mb-3">
          <Form.Label>
            5. Have you spent your whole life where you were born? Have you
            moved to other places? Reasons for moving?
          </Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group controlId="formBanner5" className="mb-3">
          <Form.Label>
            6. What is your religion? Are you associated with a political party?
            Are you a member of an organization or club or group or movement,
            etc.? Your position in such an organization? Your responsibilities?
            Were you ever persecuted as a result? If yes, what happened? What is
            the whole story? Ask ensuing questions to frame the story. Identify
            the group who persecuted our client, more importantly, the main
            person (character).
          </Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group controlId="formBanner6" className="mb-3">
          <Form.Label>
            7. Have you ever been persecuted for any other reason? Has someone
            ever slapped you? Punched you? Give her a minute to think. Has
            someone ever told lies about you, to defame you? Have you ever
            fought someone? Have you ever been the victim of a rape (a friend
            maybe)? Have you ever had an accident? Do you hate anyone
            (psychological ploy to get the person to open up, to answer your
            questions)? Have you ever been shot at? Have you seen a dead body on
            the street? What happened? Who died? Why? Where? How? Do you have
            anything to share that might be relevant to your asylum, though it
            may not be related? What is it that you were thinking of but thought
            wasn’t important to share with us? What is it that you thought of
            but didn’t want to share with us? Is there something that you’re
            afraid of sharing with us? Have you moved to another part of the
            country to flee persecution? Where? Remember the WHO (the
            persecutor) must prevalent.
          </Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group controlId="formBanner7" className="mb-3">
          <Form.Label>
            8. Has he or she gone to see the authorities? What happened?
            Remember the US Government gives asylum to those who were persecuted
            by the government or by forces where the government was unable or
            unwilling to protect them. Therefore, we must question them about
            the effort that they made in seeking governmental protection, and we
            must clearly show that in those stories. If the client was in a
            foreign country, where he or she was persecuted because of her race
            or nationality, we must show the disregard of the government or the
            authorities of that third country to protect her.
          </Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group controlId="formBanner8" className="mb-3">
          <Form.Label>
            9. Are your parents still living? If someone died, get the whole
            story of his or her death, regardless of the date. Were they
            involved in politics, religion, or some social groups? What were
            their roles? How did their organizational involvement affect their
            lives and or our client? Ask a series of questions about them as if
            they were our client, as if the story that we’re writing is about
            them, that is if our client doesn’t have a viable story for the
            asylum.
          </Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group controlId="formBanner9" className="mb-3">
          <Form.Label>
            10. Use the same line of parents questioning for the siblings. Did
            they live in the same house, city, etc.? Was there strife between
            them? Why? What happened? Has our client lost a sibling, meaning
            through death? What happened?
          </Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group controlId="formBanner10" className="mb-3">
          <Form.Label>
            11. Question the clients also about extended family members, aunts,
            uncles, cousins, grandparents, etc. Does he or she know about any
            harm that came to any of them? What happened? What can our client
            share with us? (How can you include that information in the asylum?)
          </Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group controlId="formBanner11" className="mb-3">
          <Form.Label>
            12. We’ve had cases where it is extremely difficult to find
            information to construct a good story for the client. In similar
            cases, we need to direct our questioning toward friends, work
            colleagues, notable individuals in the community (besides close
            family ties), etc. Has any of your friends suffered harms,
            political, religious, or social (based on ethnic association,
            background, or organizational association)? How did that affect you
            or the community?
          </Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group controlId="formBanner12" className="mb-3">
          <Form.Label>
            13. When did you leave Haiti? How did you leave? Where did you go?
            How was your re-establishment in the foreign country? Did you have
            friends or family members there? Did you experience racism? How
            about discrimination? Were you or any of your family members or
            friends mistreated because they were Haitians? Have you heard tales
            of racism and discrimination against Haitians? What happened? How do
            the authorities in that or those countries generally treat Haitians?
            Draw the stories from the clients so that the story that is told is
            their story.
          </Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group controlId="formBanner13" className="mb-3">
          <Form.Label>
            14. When did you decide to leave the host country? What date? What
            route did you take?
          </Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group controlId="formBanner14" className="mb-3">
          <Form.Label>
            15. Have you already been to the US? Were you ever deported from any
            country? Why did you choose the US?
          </Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Label>
          {"("} Remember the story must be the client. She must remember the
          names, the dates, the places, etc. She must have directly or
          indirectly experienced the feats or heard about them or can readily
          relate to them. As a writer, you’re rendering her tales fluid to be
          more presentable to a judge. You’re doing coordination. {")"}
        </Form.Label>
        <Form.Group controlId="formBanner15" className="mb-3">
          <Form.Label>
            <b>Notes</b>
          </Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary">Submit</Button>
        <span style={{ marginLeft: "10px" }}></span>
        <Button variant="danger">To Draft</Button>
      </Card.Footer>
    </Card>
  );
}
