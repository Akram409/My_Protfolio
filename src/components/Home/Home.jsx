import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";

import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import About from "../About/About";
import Projects from "../Projects/Projects";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> AKRAM HOSSAIN</strong>
              </h1>
              <p className="pg-name">
                Passionate and introverted junior Web developer with a deep love
                for technology and coding. Exceptional team player, adept at
                leveraging collaborative skills to deliver innovative solutions.
                Seeking to utilize my expertise in a dynamic role and contribute
                to impactful website development.
              </p>
              <div
                style={{
                  paddingLeft: 45,
                  paddingBottom: 20,
                  textAlign: "left",
                }}
              >
                <Type />
              </div>
            </Col>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <About />
      <Projects />
      <Home2 />
    </section>
  );
}

export default Home;
