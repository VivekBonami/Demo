import React from "react";
import Button from "./FormComponent/Button";
import logo from "../Assets/img/logo.png";

function PlanInfo(props) {
  const {
    arrayList,
    heading1,
    months,
    planName,
    heading2,
    heading3,
    image,
    para,
    text,
  } = props;

  return (
    <div className="infobox">
      <div className="plan-image-box">
        <div className="plan-image">
          {image && <div className="status-icon">{image}</div>}
          <img src={logo} alt="logo" />
          <h5>{planName}</h5>
          <h6>{months}</h6>
        </div>
      </div>
      {heading1 && <div className="grey-section">{heading1}</div>}

      {/* planInfo list getting iterated */}

      <div className="plan-info">
        <ul>
          {arrayList.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>

      {/* planInfo list getting iterated */}

      <div className="plan-footer-wrap">
        <div className="plan-footer">
          <div className="price-info">
            <h5>{heading2}</h5>
            <h6>{heading3}</h6>
          </div>
          <div className="button-info">
            <Button
              text={text ? text : "Upgrade Now"}
              type="button"
              className="btn"
            />
          </div>
        </div>
        {para && (
          <div className="info">
            <p>{para}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PlanInfo;
