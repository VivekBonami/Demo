import React from "react";
import FlghtStartEndTime from "./FlghtStartEndTime";

function FlightSubDetails({
  flightImage,
  flightName,
  flightTime,
  flightStartDetails,
  flightEndDetails,
  flightStoppage,
  isFinalDestination,
  flightKeyDetails,
}) {
  return (
    <div className="flightSubDetails">
      <div className="flightDetailsRow">
        <div className="innerRow row1">
          <div className="colLeft flightLogo2">
            <img src={flightImage} alt="Delta" />
          </div>
          <div className="colRight leftSpace">
            <span className="flightID">{flightName}</span>
          </div>
        </div>
        <div className="innerRow row2">
          <div className="colLeft">
            <div className="flightDuration2">
              <span className="icon-timer"></span> {flightTime}
            </div>
          </div>
          <div className="colRight leftSpace">
            <div className="flightStartEndPoints">
              <FlghtStartEndTime
                className="flightStartPoint"
                {...flightStartDetails}
              />
              <FlghtStartEndTime
                className="flightEndPoint"
                {...flightEndDetails}
              />
            </div>
          </div>
        </div>
        {!isFinalDestination && (
          <div className="layOverInfo row3">
            <div className="innerRow">
              <div className="colLeft">
                <div className="flightDuration2">
                  <span className="icon-timer"></span> {flightTime}
                </div>
              </div>
              <div className="colRight">
                <span className="blueText">{flightStoppage}</span>
              </div>
            </div>
          </div>
        )}

        {Object.keys(flightKeyDetails).length && (
          <div className="flightKeyValue">
            <div className="keyValWrap">
              <span className="flightKey">Arrives:</span>
              <span className="flightVal">
                {flightKeyDetails.arrivalDateTime}
              </span>
            </div>
            <div className="keyValWrap">
              <span className="flightKey">Total Journey Duration:</span>
              <span className="flightVal">
                {flightKeyDetails.totalJourneyTime}
              </span>
            </div>
            <div className="keyValWrap">
              <span className="flightKey">Baggage info:</span>
              <span className="flightVal">
                <a href="#" className="blueText">
                  {flightKeyDetails.baggageInfo}
                </a>
              </span>
            </div>
            <div className="keyValWrap">
              <span className="flightKey">Return Policy:</span>
              <span className="flightVal">Non-refundable</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default FlightSubDetails;
