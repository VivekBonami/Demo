import React from "react";

function FlghtStartEndTime({ className, time, airport }) {
  return (
    <div className={className}>
      <span className="flightTime2">{time}</span>
      <span className="flight">{airport}</span>
    </div>
  );
}

export default FlghtStartEndTime;
