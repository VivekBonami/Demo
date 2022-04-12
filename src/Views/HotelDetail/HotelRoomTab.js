import React, { useState } from "react";
import Button from "../../Component/FormComponent/Button";

function HotelRoomTab() {
  const [showBedPref, setshowBedPref] = useState(false);
  return (
    <ul className="list-unstyled d-flex m-0">
      <li>Filter by</li>
      <li className="active">
        <Button>All Rooms</Button>
      </li>
      <li>
        <Button>Refundable</Button>
      </li>
      <li>
        <Button>Non Refundable</Button>
      </li>
      <li>
        <Button onClick={() => setshowBedPref(!showBedPref)}>
          Bed Preference{" "}
          <i className={`fa fa-angle-${showBedPref ? "up" : "down"}`}></i>
        </Button>
      </li>
    </ul>
  );
}

export default HotelRoomTab;
