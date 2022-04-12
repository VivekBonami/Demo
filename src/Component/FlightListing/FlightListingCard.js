import React from "react";
import FlightInfoBox from "./FlightInfoBox";
import FlightPlanBox from "./FlightPlanBox";

function FlightListingCard({ flights, flightPlans,  flightDetailModal}) {
  return (
    <div className="flightResult">
        <FlightInfoBox flights={flights} flightDetailModal={flightDetailModal}/>
      <div className="flightPlansRow">
        {flightPlans &&
          flightPlans.map((item, index) => {
            return <FlightPlanBox {...item} key={index} />;
          })}
      </div>
      <a href="javascript:void(0);" className="mobileShowMoreLink mobileShow">
        Show more <i className="fa fa-angle-down"></i>
      </a>
    </div>
  );
}

export default FlightListingCard;
