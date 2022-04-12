import React from "react";

function FlightTime({ className, date, time, location }) {
  return (
    <div className={className}>
      {/* <div class="supText">+1</div> */}
      <div className="flgithDate">{date}</div>
      <div className="flightTime">{time}</div>
      <div className="flightLocation">{location}</div>
    </div>
  );
}

export default FlightTime;
