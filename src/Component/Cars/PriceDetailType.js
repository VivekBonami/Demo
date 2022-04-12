import React from "react";

function PriceDetailType({ right, left, lastEle }) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <div className={`dropdownRow ${lastEle ? "lastRow" : ""}`}>
      <div className="leftLabel">{left}</div>
      <div className="rightValue">{formatter.format(right)}</div>
    </div>
  );
}

export default PriceDetailType;
