import React from "react";
import Modal from "react-modal";
import FlightSubDetails from "../FlightListing/FlightSubDetails";
import SingleFlightDetails from "../FlightListing/SingleFlightDetails";
import Button from "../FormComponent/Button";
function FlightDetailsModal({
  isOpen,
  closeModal,
  onwardFlightSubDetails,
  returnFlightSubDetails,
  onwardFlightDetails,
  returningFlightDetails,
}) {
  return (
    <Modal isOpen={isOpen} id="flightDetailPopup" className="popupStyle">
      <div className="popUpBox">
        <Button onClick={() => closeModal(false)} className="popupCloseBtn">
          <span className="icon-close"></span>
        </Button>
        <h3 className="popupTitle">Flight Details</h3>
        <div className="popupScrollBox">
          <div className="mobileSectionTitle">Departure — Sat, 17 Nov 2021</div>
          <div className="popupFlightBox">
            <SingleFlightDetails {...onwardFlightDetails} />
            {onwardFlightSubDetails &&
              onwardFlightSubDetails.map((item, index) => {
                return <FlightSubDetails key={index} {...item} />;
              })}
          </div>
          {Object.keys(returningFlightDetails).length && (
            <>
              <div className="mobileSectionTitle">
                Returning — Sat, 17 Nov 2021
              </div>
              <div className="popupFlightBox">
                <SingleFlightDetails {...returningFlightDetails} />
                {returnFlightSubDetails &&
                  returnFlightSubDetails.map((item, index) => {
                    return <FlightSubDetails key={index} {...item} />;
                  })}
              </div>
            </>
          )}
        </div>
      </div>
    </Modal>
  );
}

export default FlightDetailsModal;
