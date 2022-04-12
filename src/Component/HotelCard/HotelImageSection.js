import React from "react";

function HotelImageSection({ savings, image }) {
  return (
    <div className="imgWrap col col-width">
      <div className="bg-image" style={{ backgroundImage: `url('${image}')` }}>
        <div className="savings">{savings}% Savings</div>
      </div>
    </div>
  );
}

export default HotelImageSection;
