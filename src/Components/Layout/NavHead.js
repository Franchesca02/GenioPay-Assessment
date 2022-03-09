import React from "react";
import { Row, Col, Form } from "reactstrap";
import "./styles.css";
import Plant from "../../Assets/plant.png";
import Huss from "../../Assets/huss.png";

const NavHead = () => {
  return (
    <div className="d-flex flex-wrap justify-content-between py-2 px-4 nav">
      <Row>
        <Col className="first">
          <h6 className="welcome">Welcome, Huss Smith</h6>
        </Col>
        <Col className="second">
          <div className="form">
            <Form className="d-flex form-input">
              <i className="fa-solid fa-magnifying-glass search"></i>
              <input type="search" placeholder="Search" className="input" />
            </Form>
          </div>
        </Col>

        <Col className="d-flex third">
          <div className="d-flex planted">
            <div>
              <img src={Plant} alt="An icon of a plant" />
            </div>
            <p>0 planted</p>
            <div className="px-3">
              <i className="fa-solid fa-bell bells"></i>
            </div>
          </div>
          <div className="d-flex">
            <div className="image">
              <img src={Huss} alt="An icon of Smith" />
            </div>
            <div className="verified">
              <p>verified</p>
              <h6 className="huss-smith">Huss Smith</h6>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default NavHead;
