import React from "react";
import { Link } from "react-router-dom";
import LogoWhite from "./FormComponent/LogoWhite";
import networkLogo from "../Assets/img/network/network-logo.png";

function NetworkHeader() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/home" className="logoWrap">
            <LogoWhite src={networkLogo} />
          </Link>
        </div>
        <nav className="navigation">
          <ul>
            <li className="getstarted-btn">
              <Link to="/home">Tripello Hub</Link>
            </li>
            <li>
              <Link to="/login" className="signin-btn">
                Sign In
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default NetworkHeader;
