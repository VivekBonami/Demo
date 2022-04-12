import React from "react";
import helpIcon from "../Assets/img/membership-upgrade/help-icon.png";
import Button from "./FormComponent/Button";

function AccordianTwo({
  className,
  content,
  button,
  title,
  openedAccordian,
  id,
  handleOpenClose,
  handleOpenModal,
}) {
  return (
    <div className="card">
      <div className="card-title">
        <button
          // First accordian list open when page get render

          onClick={() => {
            handleOpenClose(id);
          }}
        >
          <img src={helpIcon} />
          {title}
        </button>
      </div>
      <div
        className={id === openedAccordian ? `${className} show` : className}
        style={id === openedAccordian ? null : { display: "none" }}
      >
        <p>
          {content}{" "}
          {button ? (
            <Button
              onClick={handleOpenModal}
              className="tripello-magic-link"
              text="HERE"
            />
          ) : (
            ""
          )}
        </p>
      </div>
    </div>
  );
}

export default AccordianTwo;
