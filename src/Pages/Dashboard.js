import React, { useState } from "react";
import Aside from "../Components/Aside/Aside";
import HomePage from "./HomePage";
// import "./dashboard.css";

const Dashboard = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="d-flex dashboard">
      {/* <Aside /> */}
      {show ? <Aside /> : null}
      <button
        onClick={() => setShow(!show)}
        style={{
          // width: 35,
          height: 25,
          border: "none",
          background: "#017189",
          color: "black",
        }}
      >
        {/* Click */}
      </button>
      <HomePage />
    </div>
  );
};

export default Dashboard;
