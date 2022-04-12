import React from "react";
import FlightTime from "./FlightTime";

function SingleFlightDetails({
  image,
  totalTime,
  stops,
  flightStartInfo,
  flightEndInfo,
}) {
  return (
    <div className="flightInfoRow">
      <div className="airLinesLogo">
        <img src={image} alt="Delta" />
      </div>
      <div className="flightStartEnd">
        <FlightTime className="flightStartInfo" {...flightStartInfo} />
        <div className="flightDurNstop">
          <div className="flightDuration">
            <i className="icon-timer"></i> {totalTime}
          </div>
          <div className="flightBar">
            {stops.length ? stops.map((item, index) =><i key={index} className="fa fa-circle"></i>)
             : null}
            <span className="icon-flight">
              <span className="path1"></span>
            </span>
          </div>
          <div className={`flgithStops ${stops.length ? "" : "nonStopFlight"}`}>
            {stops.length ? `${stops.length} stop (${stops.map((item, index) =>stops.length > 1 && stops.length -1 !== index ? (item + ',') : item)})` : "Nonstop"}
          </div>
        </div>
        <FlightTime className="flightEndInfo" {...flightEndInfo} />
      </div>
    </div>
  );
}

export default SingleFlightDetails;
