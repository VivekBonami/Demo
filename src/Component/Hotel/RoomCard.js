import React from "react";
import { Link } from "react-router-dom";
import PersonLogo from "../../Assets/img/person.png";

function RoomCard({ roomType, roomImage, roomSize, roomFacilities, occupies }) {
  return (
    <div className="col leftContent">
      <div className="imageContent">
        <div className="row no-gutters">
          <div className="col image">
            <div className="customShadow">
              <img src={roomImage} alt="detail-page-image" />
            </div>
          </div>
          <div className="col content">
            <div className="heading desktopViewDisplayNone">
              <h3>{roomType}</h3>
              <Link className="room-details-show-popup" to="#">
                Room Details and Photos
              </Link>
            </div>
            <div className="mobileViewDisplayNone">
              <h3 className="font17">{roomSize} sq ft</h3>
              {roomFacilities &&
                roomFacilities.map((ele, index) => {
                  return (
                    <h4 key={index}>
                      <img src={ele.image} alt="icons" />
                      <span>{ele.label}</span>
                    </h4>
                  );
                })}
                <h5>Occupies</h5>
                  <h4>
                    <img src={PersonLogo} alt="icons" />
                    <span>{occupies} Adults</span>
                  </h4>
            </div>
            <div className="hotelFacilities desktopViewDisplayNone">
              <div className="row no-gutters">
                <div className="col">
                  {roomFacilities &&
                    roomFacilities.map((ele, index) => {
                      return (
                        <h4 key={index}>
                          <img src={ele.image} alt="icons" />
                          <span>{ele.label}</span>
                        </h4>
                      );
                    })}
                </div>
                <div className="col rightContent">
                  <h3 className="font17">{roomSize} sq ft</h3>
                  <h5>Occupies</h5>
                  <h4>
                    <img src={PersonLogo} alt="icons" />
                    <span>{occupies} Adults</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="heading mobileViewDisplayNone">
        <h3>{roomType}</h3>
        <Link to="#" className="room-details-show-popup">
          Room Details and Photos
        </Link>
      </div>
    </div>
  );
}

export default RoomCard;
