import React from "react";

function CarFeature({ feature, icon }) {
  return (
    <a href="#" className="lightGrayTag">
      <i className={icon} /> {feature}
    </a>
  );
}

export default CarFeature;
