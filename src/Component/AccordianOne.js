/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import helpIcon from "../Assets/img/membership-upgrade/help-icon.png";

function AccordianOne(props) {
  const { heading, headingClassName, content, divClassName } = props;
  const [headingClassNameOne, setheadingClassNameOne] = useState(divClassName);
  return (
    <div className={headingClassNameOne}>
      <button
        // First accordian list open when page get render

        onClick={() => {
          if (headingClassNameOne.includes("opened")) {
            setheadingClassNameOne(headingClassNameOne.replace("opened", ""));
          } else {
            setheadingClassNameOne(`${headingClassNameOne} opened`);
          }
        }}
        className={headingClassName}
      >
        <img src={helpIcon} />
        {heading}
      </button>
      <div className="accordCnt">
        <div className="accordCntSpace">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}

export default AccordianOne;
