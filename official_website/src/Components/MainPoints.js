import { Container, Button } from "react-bootstrap/";
import "./MainPoints.css";

function MainPoints() {
  return (
    <Container fluid className="mainPointsContainer">
      <br />
      <br />
      <br />
      <h1 className="">IBM zSystems UCalgary Chapter</h1>
      <br />
      <div className="landingAbout">
        <p>
          A club dedicated to empowering students with cutting-edge skills
          needed to excel in the world of software and mainframe technology.
        </p>
        <p>
          Join our dynamic community to collaborate with passionate students,
          network with industry professionals, and discover the endless
          possibilities of IBM zSystems in various industries!
        </p>
      </div>
      <Button className="actionBtn">Read More</Button>
      <br />
      <br />
      <Button className="actionBtn">IBM zXplore Platform</Button>
    </Container>
  );
}

export default MainPoints;
