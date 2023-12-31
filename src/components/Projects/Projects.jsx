import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { FaBold } from "react-icons/fa";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              one={true}
              style={{font:FaBold}}
              title="Dragon-s-Kitchen"
              description="Discover Dragon's Kitchen: a captivating recipe website with visually enticing banners, featuring mouthwatering dishes and brief descriptions. Explore a vast collection of tried-and-true favorites, spanning traditional classics to innovative creations. Powered by ReactJS, React-Router, JavaScript, HTML, and CSS (including Tailwind library), our seamless platform ensures a delightful culinary experience for all. Unleash your creativity and savor the flavors with Dragon's Kitchen."
              clientLink="https://github.com/Akram409/ToyGalaxy-Client"
              serverLink="https://github.com/Akram409/Dragon-s-Kitchen-Server"
              liveLink="https://dragon-s-kitchen.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              two={true}
              style={{font:FaBold}}
              title="ED_Nexus"
              description="Ed_Nexus revolutionizes the learning experience by merging the best of Google Classroom with innovative features.Our platform fosters engagement through dynamic course discussions,interactive blog posts and timely notifications.With seamless video integration and an intuitive chat system,learning becomes more immersive and collaborative.The robust admin dashboard empowers efficient management, offering valuable insights into user activity,courses, messages, and blog posts."
              clientLink="https://github.com/akil-tajwar/Ed_Nexus"
              serverLink="https://github.com/akil-tajwar/Ed_Nexus"
              liveLink="https://ed-nexus.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              three={true}
              style={{font:FaBold}}
              title="jobHunter"
              description="Introducing JobHunter: the ultimate job search platform. Easily navigate through various job categories, explore featured listings, and access comprehensive job details. With a powerful tech stack including ReactJS, ExpressJS, HTML, CSS (including Tailwind library), and MongoDB, JobHunter streamlines your career journey. Find your dream job with ease and take the next step in your professional growth."
              liveLink="https://splendid-trifle-145681.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
