import { Nav, Navbar, Container, Form, NavItem } from "react-bootstrap";
import "../Layout/styles.css";
import Plant from "../../Assets/plant.png";
import Huss from "../../Assets/huss.png";
const HeadNav = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand>
            <h6 className="welcome text-dark">Welcome, Huss Smith</h6>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <div className="form">
                <Form className="d-flex form-input">
                  <i className="fa-solid fa-magnifying-glass search"></i>
                  <input type="search" placeholder="Search" className="input" />
                </Form>
              </div>
              <NavItem id="collasible-nav-item d-flex"></NavItem>
            </Nav>
            <Nav>
              <Nav.Link>
                <div className="d-flex planted">
                  <div>
                    <img src={Plant} alt="An icon of a plant" />
                  </div>
                  <p className="text-dark">0 planted</p>
                  <div className="px-3">
                    <i className="fa-solid fa-bell"></i>
                  </div>
                </div>
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <div className="d-flex">
                  <div className="image">
                    <img src={Huss} alt="An icon of Smith" />
                  </div>
                  <div className="verified">
                    <p>verified</p>
                    <h6 className="huss-smith">Huss Smith</h6>
                  </div>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default HeadNav;
