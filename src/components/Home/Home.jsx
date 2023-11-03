import { Container, Row, Col, Button } from "react-bootstrap";
import pdf from "../../Assets/../Assets/AkramHossainResume.pdf";
import Lottie from "lottie-react";
import working from "/public/computer.json";
import Home2 from "./Home2";
import Type from "./Type";
import About from "../About/About";
import Projects from "../Projects/Projects";
import { AiOutlineDownload } from "react-icons/ai";
import Contact from "../Contact";

function Home() {
  return (
    <section>
      <Container fluid className="home-section">
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
              <Button
                variant="primary"
                href={pdf}
                target="_blank"
                style={{ maxWidth: "250px", marginLeft: 45,marginBottom: 10}}
              >
                <AiOutlineDownload />
                &nbsp;Download Resume
              </Button>
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
              <Lottie
                animationData={working}
                loop={true}
                style={{ background: "transparent" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <About />
      <Projects />
      <Home2 />
      <Contact />
    </section>
  );
}

export default Home;
