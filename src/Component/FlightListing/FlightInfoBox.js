import React, { useState } from "react";
import Button from "../FormComponent/Button";
import FlightDetailsModal from "../Modals/FlightDetailsModal";
import SingleFlightDetails from "./SingleFlightDetails";

function FlightInfoBox({flights, flightDetailModal}) {
    const [showFlightModal, setshowFlightModal] = useState(false)
  return (
    <div className="flightInfoBox card2">
        {flights && flights.map((item, index) => {
            return <SingleFlightDetails {...item} key={index} />;
        })}
      <div className="flightDetailsbtn">
        <Button className="detailsLink" onClick={()=>setshowFlightModal(true)}>
          Flight Details <span className="fa fa-angle-down"></span>
        </Button>
      </div>
      {showFlightModal && <FlightDetailsModal isOpen={showFlightModal} closeModal={setshowFlightModal} {...flightDetailModal} />}
    </div>
  );
}

export default FlightInfoBox;
