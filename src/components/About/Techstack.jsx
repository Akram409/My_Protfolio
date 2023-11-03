import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";

import { AiOutlineHtml5 } from "react-icons/ai";

import { DiJavascript1, DiReact, DiNodejs, DiMongodb } from "react-icons/di";
import { SiFirebase, SiExpress, SiJsonwebtokens } from "react-icons/si";
import {
  TbBrandBootstrap,
  TbApi,
  TbBrandTailwind,
  TbBrandCss3,
  TbBrandNextjs,
} from "react-icons/tb";

function Techstack() {
  return (
    <>
      <div>
        <h1 className="project-heading">
          <strong className="purple icon-link">Expertise </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons">
            <DiReact />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiJavascript1 />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <AiOutlineHtml5 />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <TbBrandCss3 />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <TbBrandBootstrap />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <TbBrandTailwind />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiNodejs />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiMongodb />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <CgCPlusPlus />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiFirebase />
          </Col>
        </Row>
      </div>
      <div>
        <h1 className="project-heading">
          <strong className="purple icon-link">Comfortable</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons">
            <TbBrandNextjs />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <TbApi />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiExpress />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiJsonwebtokens />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Techstack;
