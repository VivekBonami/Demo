import React, { useState } from "react";
import Button from "../FormComponent/Button";

function PriceRange({ title, from, to }) {
  const [showFilter, setshowFilter] = useState(true);

  return (
    <>
      <div
        className="cardHead dflex"
        onClick={() => setshowFilter(!showFilter)}
      >
        <h6>{title}</h6>
        <span className={`fa fa-angle-${showFilter ? "up" : "down"}`}></span>
      </div>
      <div className={`priceRange ${!showFilter ? "d-none" : ""}`}>
        <h4>${from}</h4>
        <h4>${to}</h4>
      </div>
      <div className={`cardBody ${!showFilter ? "d-none" : ""}`}>
        <div className="inputRange">
          <input type="range" />
        </div>
        <div className="priceBtn">
          <Button className="blueBtn">Apply</Button>
          <Button className="linkColor font14 cancelBtn">Cancel</Button>
        </div>
      </div>
    </>
  );
}

export default PriceRange;
