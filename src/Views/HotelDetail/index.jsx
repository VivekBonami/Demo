import React from "react";
import { hotelDetailMockData } from "../../Data/hotelMockData";
import HotelDetailsTabs from "./HotelDetailsTabs";
import HotelDetailCard from "./HotelDetailCard/HotelDetailCard";
import Overview from "./Overview/Overview";
import Rooms from "./Rooms/Rooms";
import Amenities from "./Amenities/Amenities";
import PropertiesDetails from "./PropertyDetails/PropertiesDetails";
import Reviews from "./Reviews/Reviews";
function HotelDetail() {
  return (
    <div className="siteBg detailPageWrap">
      <div className="pageWrap pageWrapInner">
        <div className="pageInternalScroll">
          <div className="container">
            <HotelDetailCard {...hotelDetailMockData} />
            <div className="overviewTitle sectionTitle desktopViewDisplayNone">
              <h2>Overview</h2>
            </div>
            <div className="tabsWrapper mobileViewDisplayNone">
              <HotelDetailsTabs />
            </div>
            <Overview {...hotelDetailMockData.overview} />
            <Rooms rooms={hotelDetailMockData.rooms}/>
            <Amenities  amenities={hotelDetailMockData.amenities}/>
            <PropertiesDetails {...hotelDetailMockData.propertiesDetails}/>
            <Reviews {...hotelDetailMockData.reviews}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelDetail;
