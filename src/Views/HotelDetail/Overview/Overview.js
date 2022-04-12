import React from "react";
import Amenities from "../../../Component/Hotel/Amenities";
import ReviewBar from "../../../Component/Hotel/ReviewBar";

function Overview({ amenities, reviews }) {
  return (
    <div id="overview" className="amenitiesBox">
      <div className="row">
        <div className="col leftContent">
          <h3>Top Amenities</h3>
          <Amenities amenities={amenities} />
        </div>
        <div className="col rightContent">
          <ReviewBar reviews={reviews}/>
        </div>
      </div>
    </div>
  );
}

export default Overview;
