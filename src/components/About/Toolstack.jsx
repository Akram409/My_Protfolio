
import { Col, Row } from "react-bootstrap";
import { DiGit } from "react-icons/di";
import { FiFigma } from "react-icons/fi";
import { RxVercelLogo } from "react-icons/rx";
import {
  SiNetlify,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

function Toolstack() {
  return (
    <div>
        <h1 className="project-heading">
          <strong className="purple icon-link">Tools</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons">
            <DiGit />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <TbBrandVscode />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <FiFigma />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiNetlify />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <RxVercelLogo />
          </Col>
        </Row>
      </div>
  );
}

export default Toolstack;
