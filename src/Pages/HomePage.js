import React from "react";
import { Col, Row } from "react-bootstrap";
import "./styles.css";
import American from "../Assets/American.png";
import British from "../Assets/british.png";
import Europe from "../Assets/europe.png";
import Cam from "../Assets/cam.png";
import HeadNav from "../Components/Layout/HeadNav";
// import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homepage">
      <header>
        <HeadNav />
      </header>
      <div className="d-flex flex-wrap py-3 px-4 justify-content-between">
        <h5>Wallet (5)</h5>
        <a href="/" className="flex-end">
          View all wallets
        </a>
      </div>
      <div className="d-flex justify-content-evenly flex-wrap px-2 my-3">
        <Row>
          <Col>
            {/* <Card> */}
            <div className="personal-acc px-4 py-4">
              <Row>
                <Col>
                  <p>Personal Account</p>
                  <p>USD</p>
                </Col>
                <Col>
                  <img
                    src={American}
                    alt="A regional icon"
                    className="america"
                  />
                </Col>
              </Row>
              <Row className="my-3 px-2">
                <h4>$10,250.00</h4>
              </Row>
            </div>
            {/* </Card> */}
          </Col>
        </Row>

        <Row>
          <Col>
            <div className="euro-wallet px-4 py-4">
              <Row>
                <Col>
                  <p>Euro Wallet</p>
                  <p>EUR</p>
                </Col>
                <Col>
                  <img src={Europe} alt="A regional icon" className="america" />
                </Col>
              </Row>
              <Row className="my-3 px-2">
                <h4>
                  <span className="euro">&#8364;</span> 4000.00
                </h4>
              </Row>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className="fees px-4 py-4">
              <Row>
                <Col>
                  <p>School Fees</p>
                  <p>GBP</p>
                </Col>
                <Col>
                  <img
                    src={British}
                    alt="A regional icon"
                    className="america"
                  />
                </Col>
              </Row>
              <Row className="my-3 px-2">
                <h4>
                  <span className="pounds">&#163;</span>50.00
                </h4>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
      <div className="my-4 mx-4">
        <h5>Quick Links</h5>
        <p>Your frequently used actions for easy access</p>
        <div className="d-flex flex-wrap justify-content-between my-2 mx-2">
          <Row>
            <Col>
              <div className="one py-2 px-3">
                <div className="one-image mx-4">
                  <img src={Cam} alt="A camera icon" />
                </div>
                <p className="py-3">Add New Wallet</p>
              </div>
            </Col>
            <Col>
              <div className="one py-2 px-3">
                <div className="two-image mx-4">
                  <img src={Cam} alt="A camera icon" />
                </div>
                <p className="py-3">Add New Card</p>
              </div>
            </Col>
            <Col>
              <div className="one py-2 px-3">
                <div className="three-image mx-4">
                  <img src={Cam} alt="A camera icon" />
                </div>
                <p className="py-3">Balance Exchange</p>
              </div>
            </Col>
            <Col>
              <div className="one py-2 px-3">
                <div className="four-image mx-4">
                  <img src={Cam} alt="A camera icon" />
                </div>
                <p className="py-3">Transfer to Account</p>
              </div>
            </Col>
            <Col>
              <div className="one py-2 px-3">
                <div className="five-image mx-4">
                  <img src={Cam} alt="A camera icon" />
                </div>
                <p className="py-3">Generate Voucher</p>
              </div>
            </Col>
            <Col>
              <div className="one py-2 px-3">
                <div className="six-image mx-4">
                  <img src={Cam} alt="A camera icon" />
                </div>
                <p className="py-3">Mobile Money</p>
              </div>
            </Col>
            <Col>
              <div className="one py-2 px-3">
                <div className="seven-image mx-4">
                  <img src={Cam} alt="A camera icon" />
                </div>
                <p className="py-3">Payment Link</p>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      {/* <Transaction /> */}
    </div>
  );
};

export default HomePage;
