import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/img/logo.png";
import Icomoon from "./FormComponent/Icomoon";

function PlanInfoTwo(props) {
  const {
    arrayList,
    btnName,
    planNote,
    planName,
    heading,
    para,
    months,
    imgPlus,
  } = props;

  return (
    <div className="col">
      <div className="cardStyle">
        <div className="planImgBox">
          <div className="planImgInner">
            <img src={logo} alt="" />
            <div className="planName">{planName}</div>
            {months && <p>{months}</p>}
            {imgPlus && <div className="plus-img">{imgPlus}</div>}
            {}
          </div>
        </div>

        {/* planInfo list getting iterated */}

        <ul className="planDetails">
          {arrayList.map((item) => {
            return (
              <li>
                <Icomoon className="icon-tick" />
                {item}
              </li>
            );
          })}
        </ul>

        {/* planInfo list getting iterated */}

        <div className="planBtmBox">
          <p className="planNote">{planNote}</p>
          <div className="planRateBox">
            <div>
              <h4>{heading}</h4>
              <p>{para}</p>
            </div>
            <Link to={"/home"} className="btn">
              {btnName}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlanInfoTwo;
