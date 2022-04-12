import React, { useState } from "react";
import Button from "../../../Component/FormComponent/Button";
import SingleAmenities from "../../../Component/Hotel/SingleAmenities";

function Amenities({ amenities }) {
  const [showMoreAmenities, setshowMoreAmenities] = useState(false);
  return (
    <div id="amenities" className="amenitiesWrapper">
      <div className="sectionTitle">
        <h2>Amenities</h2>
      </div>
      <div className="amenitiesMainInfo">
        <div className="amenitiesInfo">
          <div className="row">
            {amenities &&
              amenities.map((ele, index) => (
                <SingleAmenities {...ele} key={index} />
              ))}
          </div>
        </div>
        <div className="showAllLinks text-center">
          <Button onClick={() => setshowMoreAmenities(!showMoreAmenities)}>
            Show All Amenities
            <i
              className={`fa fa-angle-${showMoreAmenities ? "up" : "down"}`}
            ></i>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Amenities;
