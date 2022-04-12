import React from "react";
import { Link } from "react-router-dom";
import LogoWhite from "./FormComponent/LogoWhite";
import logo from "../Assets/img/logo.png";
import Button from "./FormComponent/Button";

//container in premium sign up page below accordian

function UpgradeNowWrapper(props) {
  const { className, heading, para1, para3, para2 } = props;
  return (
    <div className={className}>
      <div className="row no-gutters">
        <div className="col left-content">
          <div className="left-content-wrapper">
            <h2>{heading}</h2>
            <p>{para1}</p>
            <p>{para2}</p>
            <p>{para3}</p>
          </div>
        </div>
        <div className="col right-content">
          <div className="right-content-wrap">
            <div className="page-logo">
              <Link to={"/home"} className="logoWrap">
                <LogoWhite src={logo} />
              </Link>
            </div>
            <h1>Premium Membership</h1>
            <div className="button-wrap">
              <Button
                type="button"
                className="btn orange-btn"
                text="Sign-Up Now"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpgradeNowWrapper;
