import React, { useState } from "react";
import Button from "../FormComponent/Button";

function HotelName() {
  const [showFilter, setshowFilter] = useState(true);

  return (
    <>
      <div
        className="cardHead dflex"
        onClick={() => setshowFilter(!showFilter)}
      >
        <h6>Hotel name</h6>
        <span className={`fa fa-angle-${showFilter ? "up" : "down"}`}></span>
      </div>
      <div className={`cardBody ${!showFilter ? "d-none" : ""}`}>
        <div className="inputWrap2">
          <input type="text" placeholder="Hotel name" />
        </div>
        <Button className="btnBorder">Apply</Button>
      </div>
    </>
  );
}

export default HotelName;
