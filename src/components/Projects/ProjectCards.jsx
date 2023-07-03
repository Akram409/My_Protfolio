import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import ProjectImg from "./ProjectImg";
import ProjectImg2 from "./ProjectImg2";
import ProjectImg3 from "./ProjectImg3";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {
        props.one && <ProjectImg/>
      }
      {
        props.two && <ProjectImg2/>
      }
      {
        props.three && <ProjectImg3/>
      }
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.clientLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "Client"}
        </Button>
        
        
        {
          props?.serverLink && <Button variant="primary" href={props.serverLink} target="_blank"
          style={{ marginLeft: "10px" }}>
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "Server"}
          </Button>
        }
      

        {!props.isBlog && props.liveLink && (
          <Button
            variant="primary"
            href={props.liveLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Live"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
