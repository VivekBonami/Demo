import React, { useState } from "react";
import Button from "../FormComponent/Button";

function Amenities({ amenities }) {
  const [showMoreAmenities, setshowMoreAmenities] = useState(false);
  return (
    <>
      <ul>
        {amenities &&
          amenities.map((amenity, index) => {
            return (
              <li key={index}>
                <div className="images">
                  <img src={amenity.image} alt="icons" />
                </div>
                <h4>{amenity.name}</h4>
              </li>
            );
          })}
      </ul>
      <div className="showMoreLink show-all-amenities">
        <Button onClick={() => setshowMoreAmenities(!showMoreAmenities)}>
          Show All Amenities{" "}
          <i className={`fa fa-angle-${showMoreAmenities ? "up" : "down"}`}></i>
        </Button>
      </div>
    </>
  );
}

export default Amenities;
