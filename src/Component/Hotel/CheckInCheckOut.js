import React from "react";
import CheckInImg from '../../Assets/img/timer.png';

function CheckInCheckOut({ checkIn, checkOut }) {
  return (
    <>
      <div className="col">
        <h4>Check-in</h4>
        <h3>
          <img src={CheckInImg} alt="timer" /> After {checkIn}
        </h3>
      </div>
      <div className="col">
        <h4>Check-out</h4>
        <h3>
          <img src={CheckInImg} alt="timer" /> Before {checkOut}
        </h3>
      </div>
    </>
  );
}

export default CheckInCheckOut;
