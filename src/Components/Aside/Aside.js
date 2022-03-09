import React from "react";
import "./styles.css";
import Logo from "../../Assets/logo1.png";
import NavIcon from "../../Assets/nav-icon.png";
import Eye from "../../Assets/eye.png";
import Cards from "../../Assets/card.png";
import Wallet from "../../Assets/walle.png";
import Dashboard from "../../Assets/nav-icon.png";
import Whistle from "../../Assets/whistle.png";

const Aside = () => {
  return (
    <div className="aside">
      <div className=" my-4 logo">
        <img src={Logo} alt="The GenioPay logo" />
      </div>
      <div className="py-2 px-4 side-wallet">
        <div className="d-flex flex-wrap justify-content-between">
          <div className="nav-icon">
            <img src={NavIcon} alt="A navbar icon" />
          </div>

          <div>
            <p className="nav-wallet-p">Wallet Balance</p>
            <p className="nav-amount">$15,001.00</p>
          </div>

          <div>
            <img src={Eye} alt="An eye icon" />
          </div>
        </div>
        <hr className="break" />

        <div className="d-flex flex-wrap justify-content-between">
          <div className="nav-icon">
            <img src={NavIcon} alt="A navbar icon" />
          </div>

          <div>
            <p className="nav-wallet-p">Awarded Points</p>
            <p className="nav-amount">35</p>
          </div>

          <div>
            <img src={Eye} alt="An eye icon" />
          </div>
        </div>
        <hr className="break" />
        <div className="d-flex justify-content-between">
          <div>
            <button className="btn-in">Pay-In</button>
          </div>
          <div className="mx-2">
            <button className="btn-out">Pay-Out</button>
          </div>
        </div>
      </div>

      <div className="my-4 mx-4">
        <div className="dash-items">
          <div>
            <img src={Dashboard} alt="dashboard icon" />
          </div>
          <div>
            <h4>Dashboard</h4>
          </div>
        </div>

        <div className="dash-items-2">
          <div>
            <img src={Wallet} alt="dashboard icon" />
          </div>
          <div>
            <h4 className="dash">Wallet</h4>
          </div>
        </div>

        <div className="dash-items-3">
          <div>
            <img src={Cards} alt="dashboard icon" />
          </div>
          <div>
            <h4 className="dash">Cards</h4>
          </div>
        </div>

        <div className="dash-items-4">
          <div>
            <img src={Wallet} alt="dashboard icon" />
          </div>
          <div>
            <h4 className="dash">FX Center</h4>
          </div>
        </div>

        <div className="dash-items-5">
          <div>
            <img src={Cards} alt="dashboard icon" />
          </div>
          <div>
            <h4 className="dash">Beneficiaries</h4>
          </div>
        </div>

        <div className="dash-items-6">
          <div>
            <img src={Wallet} alt="dashboard icon" />
          </div>
          <div>
            <h4 className="dash">Perks</h4>
          </div>
        </div>
      </div>
      <div className="referrals">
        <div className="d-flex py-2 px-2">
          <div>
            <img src={Whistle} alt="An icon of a whistle" />
          </div>
          <div>
            <p className="text1">Refer and Earn</p>
            <p className="text2">Use the below link to invite friends</p>
          </div>
        </div>
        <div className="btn">
          <button>Invite Friends</button>
        </div>
      </div>
    </div>
  );
};

export default Aside;
