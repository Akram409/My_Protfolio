
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Welcome to my website and thank you for taking the time to explore my portfolio! My name is<span className="purple"> Akram Hossain </span>
            from <span className="purple"> Bangladesh.</span>
            <br /> I am a Forth year student pursuing an Integrated BSc in CSE from <span className="purple"> International Islamic University Chittagong.</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games (Esports)
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movie
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          Programming is the art of turning imagination into reality.
          </p>
          <footer className="blockquote-footer">Unknown</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
