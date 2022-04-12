import React, { useRef, useState } from "react";
import useOutsideHandler from "../../Stores/Utils/useOutsideHandler";
import Button from "../FormComponent/Button";

function PriceSingleRange({ label, min, max }) {
  const [showPriceRange, setshowPriceRange] = useState(false);
  const [price, setPrice] = useState(min);
  const priceRef = useRef(null);
  const toggleCloseFilter = () => {
    setshowPriceRange(false);
  };
  useOutsideHandler(priceRef, showPriceRange, toggleCloseFilter);
  return (
    <div className="filterDropdownWrap" ref={priceRef}>
      <div
        className="flterOption"
        onClick={() => setshowPriceRange(!showPriceRange)}
      >
        <span>{label}</span>
        <span
          className={`fa fa-angle-${showPriceRange ? "up" : "down"}`}
        ></span>
      </div>
      <div
        className={`filterDropdown priceFilter ${
          showPriceRange ? "d-block" : ""
        }`}
      >
        <span className="priceVal">${price}</span>
        <div className="rangeStyle">
          <input
            type="range"
            min={min}
            max={max}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="btnsCnt">
          <Button className="blueBtn">Apply</Button>
          <Button
            className="cancelBtn"
            onClick={(e) => setshowPriceRange(false)}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PriceSingleRange;
