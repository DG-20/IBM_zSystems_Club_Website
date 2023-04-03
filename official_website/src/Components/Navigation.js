import { Container, Navbar, Button, Nav } from "react-bootstrap/";
import "./Navigation.css";
import Logo from "../Assets/Logo_Full";

function Navigation() {
  return (
    <Navbar className="navbarMain" sticky="top">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            alt="zSystems UofC Logo"
            src={Logo}
            height="100"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarLinks" />
        <Navbar.Collapse id="navbarLinks" className="justify-content-end">
          <Nav>
            <Nav.Link href="about" className="navLink">
              About Us
            </Nav.Link>
            <Nav.Link className="navLink">Team</Nav.Link>
            <Nav.Link className="navLink">Events</Nav.Link>
            <Nav.Link active className="navLink"></Nav.Link>
            <Button className="actionBtn">Get Involved</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
