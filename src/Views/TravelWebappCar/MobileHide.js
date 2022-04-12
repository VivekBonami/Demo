import React from "react";

//mobie hide details

function MobileHide({ price, detail, className }) {
  return (
    <div className={`dflex ${className}`}>
      <label className="labelStyle">{detail}</label>
      <span className="rightValue">{price}</span>
    </div>
  );
}

export default MobileHide;
