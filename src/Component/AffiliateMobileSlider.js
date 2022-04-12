import React from "react";

function AffiliateMobileSlider({ heading, src }) {
  return (
    <div className="slider-images">
      <div className="slider-content">
        <h6>{heading}</h6>
        <span className="line" />
      </div>
      <img src={src} alt="slider-images" />
    </div>
  );
}

export default AffiliateMobileSlider;
