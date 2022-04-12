import React from "react";
import { Link } from "react-router-dom";
import LogoWhite from "./FormComponent/LogoWhite";
import logo from "../Assets/img/logo.png";

function Header() {
  // header with logo name and two button only

  return (
    <header className="header">
      <div className="container">
        <Link to={"/home"} className="logoWrap">
          <LogoWhite src={logo} />
        </Link>
        <nav className="navigation">
          <ul>
            <li>
              <Link to={"/get-started"}>Tripello Hub</Link>
            </li>
          </ul>
        </nav>
        <Link to="/login" className="btnBorder3">
          Sign In
        </Link>
      </div>
    </header>
  );
}

export default Header;
