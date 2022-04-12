import React, { useState } from "react";
import Button from "../FormComponent/Button";

function CategoriesFilter({ title, filterOptions }) {
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
      <div className={`cardBody ${!showFilter ? "d-none" : ""}`}>
        {filterOptions &&
          filterOptions.map((ele, index) => {
            return (
              <label className="customCheckbox" key={index}>
                <input
                  type="checkbox"
                  name="categories"
                  checked={index === 0}
                />
                <span>
                  {ele.name} {ele.count && `(${ele.count})`}
                </span>
              </label>
            );
          })}
        <Button className="btnBorder btnTopMargin">Apply</Button>
      </div>
    </>
  );
}

export default CategoriesFilter;
