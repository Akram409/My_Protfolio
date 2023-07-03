import { Button, Container, Form, InputGroup } from "react-bootstrap";
import myImg from "../Assets/avatar.svg";
function Contact() {
  return (
    <Container className="my-5">
      <h1 className="contact-color2">Contact With Me</h1>
      <div className="card mb-3" id="contact">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={myImg} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <div className="d-flex gap-2 mb-3">
                <InputGroup className="contact-color1">
                  <Form.Control
                    aria-label="Text input with radio button"
                    placeholder="Your Name"
                  />
                </InputGroup>
                <InputGroup className="contact-color1">
                  <Form.Control
                    aria-label="Text input with radio button"
                    placeholder="Your Email"
                  />
                </InputGroup>
              </div>
              <div className="d-flex mb-3">
                <InputGroup className="contact-color1">
                  <Form.Control
                    aria-label="Text input with radio button"
                    placeholder="Subject"
                  />
                </InputGroup>
              </div>
              <div className="d-flex">
                <InputGroup>
                  <Form.Control
                    as="textarea"
                    aria-label="With textarea"
                    placeholder="Message"
                  />
                </InputGroup>
              </div>
            </div>
            <Button variant="secondary" size="lg">
              Send your Message
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Contact;
