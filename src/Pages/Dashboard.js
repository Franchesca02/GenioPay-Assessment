import React from "react";
import Aside from "../Components/Aside/Aside";
import HomePage from "./HomePage";

const Dashboard = () => {
  return (
    <div className="d-flex flex-wrap">
      <Aside />
      <HomePage />
    </div>
  );
};

export default Dashboard;
