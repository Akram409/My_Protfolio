import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const location = useLocation();

  return (
    <Navbar className="bottom-navbar justify-content-center">
      <Nav className="justify-content-around ">
        <Nav.Item className="icon icon1">
          <Nav.Link
            as={Link}
            to="/"
            className={location.pathname === "/" ? "active" : ""}
          >
            <AiOutlineHome size="2rem"/>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="icon">
          <Nav.Link
            as={Link}
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
          >
            <AiOutlineUser size="2rem" />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="icon">
          <Nav.Link
            as={Link}
            to="/project"
            className={location.pathname === "/project" ? "active" : ""}
          >
            <AiOutlineFundProjectionScreen size="2rem"/>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="icon">
          <Nav.Link
            as={Link}
            to="/resume"
            className={location.pathname === "/resume" ? "active" : ""}
          >
            <CgFileDocument size="2rem"/>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
