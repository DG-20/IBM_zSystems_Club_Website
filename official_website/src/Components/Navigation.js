import { Container, Navbar, Button, Nav } from "react-bootstrap/";
import "./Navigation.css";
import Logo from "../Assets/Logo_Full";

function Navigation() {
  return (
    <Navbar>
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={Logo}
            height="100"
            className="d-inline-block align-top"
          />{" "}
          React Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarLinks" />
        <Navbar.Collapse id="navbarLinks" className="justify-content-end">
          <Nav className="">
            <Nav.Link className="navLink">About</Nav.Link>
            <Nav.Link className="navLink">Team</Nav.Link>
            <Nav.Link className="navLink">Events</Nav.Link>
            <Nav.Link className="navLink"></Nav.Link>
            <Button className="actionBtn">Get Involved</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
