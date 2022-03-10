import React, { useState } from "react";
import { Col, Dropdown, Row } from "react-bootstrap";
import "./styles.css";
import American from "../Assets/American.png";
import British from "../Assets/british.png";
import Europe from "../Assets/europe.png";
import Cam from "../Assets/cam.png";
import HeadNav from "../Components/Layout/HeadNav";
import LineChart from "../Components/LineChart";
import { UserData } from "../Data";

const HomePage = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Activity",
        data: UserData.map((data) => data.activity),
        backgroundColor: ["rgba(75,192,192,1)"],
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 2,
      },
    ],
  });
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
            <div className="personal-acc px-3 py-3">
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
                <h4>
                  <span>&#36;</span> 10,250.00
                </h4>
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
        <div className="links">
          <h5>Quick Links</h5>
          <p>Your frequently used actions for easy access</p>
        </div>
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
                <a href="/" className="py-3 anchor">
                  Add New Card
                </a>
              </div>
            </Col>
            <Col>
              <div className="one py-2 px-3">
                <div className="three-image mx-4">
                  <img src={Cam} alt="A camera icon" />
                </div>
                <a href="/" className="py-3 anchor">
                  Balance Exchange
                </a>
              </div>
            </Col>
            <Col>
              <div className="one py-2 px-3">
                <div className="four-image mx-4">
                  <img src={Cam} alt="A camera icon" />
                </div>
                <a href="/" className="py-3 anchor">
                  Transfer to Account
                </a>
              </div>
            </Col>
            <Col>
              <div className="one py-2 px-3">
                <div className="five-image mx-4">
                  <img src={Cam} alt="A camera icon" />
                </div>
                <a href="/" className="py-3 anchor">
                  Generate Voucher
                </a>
              </div>
            </Col>
            <Col>
              <div className="one py-2 px-3">
                <div className="six-image mx-4">
                  <img src={Cam} alt="A camera icon" />
                </div>
                <a href="/" className="py-3 anchor">
                  Mobile Money
                </a>
              </div>
            </Col>
            <Col>
              <div className="one py-2 px-3">
                <div className="seven-image mx-4">
                  <img src={Cam} alt="A camera icon" />
                </div>
                <a href="/" className="py-3 anchor">
                  Payment Link
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="d-flex flex-wrap py-4 px-3 justify-content-between">
        <div className="d-flex">
          <h5>Activity</h5>
          <div className="dropdown px-3 text-secondary">
            <Dropdown>Month</Dropdown>
          </div>
        </div>
        <a href="/" className="flex-end">
          View Transaction History
        </a>
      </div>
      <div className="line-chart">
        <LineChart chartData={userData} />
      </div>
    </div>
  );
};

export default HomePage;
