/* eslint-disable consistent-return */

import React, { useEffect, useRef, useState } from "react";
import Button from "../FormComponent/Button";
import useOutsideHandler from "../../Stores/Utils/useOutsideHandler";

function CheckBoxFilter({ label, filterOptions }) {
  const [showOption, setshowOption] = useState(false);
  const [showMore, setshowMore] = useState(false);
  const [isMobile, setisMobile] = useState(false);
  const filterRef = useRef(null);
  useEffect(() => {
    if (window.innerWidth <= 767) {
      setisMobile(true);
    } else {
      setisMobile(false);
    }
  }, [window.innerWidth]);

  const toggleCloseFilter = () => {
    setshowOption(false);
  };
  useOutsideHandler(filterRef, showOption, toggleCloseFilter);

  return (
    <div className="filterDropdownWrap" ref={filterRef}>
      <div className="flterOption" onClick={() => setshowOption(!showOption)}>
        <span>{label}</span>
        <span className={`fa fa-angle-${showOption ? "up" : "down"}`} />
      </div>
      <div className={`filterDropdown ${showOption ? "d-block" : ""}`}>
        {filterOptions && !isMobile
          ? filterOptions.map((item, index) => (
              <label className="customCheckbox" key={index} htmlFor={item.name}>
                <input type="checkbox" name={item.name} />
                <span>{item.label}</span>
              </label>
            ))
          : null}

        {filterOptions && filterOptions.length >= 5 && isMobile ? (
          <div className="showMoreWrap">
            <div className="showMoreInWrap">
              {showMore
                ? filterOptions.map((item, index) => (
                    <label
                      className="customCheckbox"
                      key={index}
                      htmlFor={item.name}
                    >
                      <input type="checkbox" name={item.name} />
                      <span>{item.label}</span>
                    </label>
                  ))
                : filterOptions.map((item, index) => {
                    if (index < 4) {
                      return (
                        <label
                          className="customCheckbox"
                          key={index}
                          htmlFor={item.name}
                        >
                          <input type="checkbox" name={item.name} />
                          <span>{item.label}</span>
                        </label>
                      );
                    }
                  })}
            </div>
            <Button
              className="mobileShow showMore"
              onClick={() => setshowMore(!showMore)}
            >
              Show {showMore ? "less" : "more"}{" "}
              <i className={`fa fa-angle-${showMore ? "up" : "down"}`} />
            </Button>
          </div>
        ) : null}
        <div className="btnsCnt">
          <Button className="borderBtn">Apply</Button>
        </div>
      </div>
    </div>
  );
}

export default CheckBoxFilter;
