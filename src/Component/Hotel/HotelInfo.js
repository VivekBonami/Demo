import React from "react";
import LocationPin from "../../Assets/img/location-gray.png";
import MapView from "../../Views/HotelSearchResult/MapView/MapView";
import CheckInCheckOut from "./CheckInCheckOut";
import HotelTheme from "./HotelTheme";
function HotelInfo({
  name,
  starImgs,
  address,
  contactNo,
  checkIn,
  checkOut,
  themes,
}) {
  return (
    <div className="row">
      <div className="col leftContent">
        <h3 className="cartTitle">{name}</h3>
        <div className="topSection dflex justifyStart">
          <div className="rating">
            {starImgs &&
              starImgs.map((ele, index) => {
                return <img src={ele} alt="yellow-star" key={index} />;
              })}
          </div>
        </div>
        <div className="contactInfo">
          <div className="location">
            <img src={LocationPin} alt="icon" /> {address}
          </div>
          <div className="phone">
            <span className="icon-phone"></span>
            {contactNo}
          </div>
        </div>
      </div>
      <div className="col rightContent">
        <div className="timeWrapper">
        <MapView
            className="customShadow mapWrap desktopViewDisplayNone"
            button={true}
          />
          <div className="row no-gutters">
            <CheckInCheckOut checkIn={checkIn} checkOut={checkOut} />
          </div>
        </div>
        <div className="themeWrapper hotelTheme">
          <HotelTheme title="Hotel Theme" themes={themes} />
        </div>
      </div>
    </div>
  );
}

export default HotelInfo;
