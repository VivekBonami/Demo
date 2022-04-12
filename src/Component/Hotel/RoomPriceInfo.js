import React, { useState } from "react";
import Button from "../FormComponent/Button";
import TotalNightPrice from "./TotalNightPrice";

function RoomPriceInfo({savings, availableRooms, publicPrice, from, priceDetails, savingPrice}) {
  const [selectedTab, setselectedTab] = useState(0);
  return (
    <div className="col info">
      <div className="title d-flex">
      <Button
          className={`totalPriceTab ${selectedTab === 0 ? "active" : ""}`}
          onClick={() => setselectedTab(0)}
        >
          Total Price
        </Button>
        <Button
          className={`nightlyPriceTab ${selectedTab === 1 ? "active" : ""}`}
          onClick={() => setselectedTab(1)}
        >
          Nightly Price
        </Button>
      </div>
      <div className="infoBoxWrapper">
        <div className="content d-flex desktopViewDisplayNone">
          <div className="savings">
            <p>{savings}% Savings</p>
          </div>
          <div className="availableRoomsWrap">
            <h4 className="availableRooms">{availableRooms} rooms available</h4>
          </div>
        </div>
        {selectedTab === 0 && <TotalNightPrice savings={savings} publicPrice={publicPrice} from={from} priceDetails={priceDetails} savingPrice={savingPrice}/>}
        {selectedTab === 1 && <TotalNightPrice savings={savings} publicPrice={publicPrice} from={from} priceDetails={priceDetails} savingPrice={savingPrice}/>}
      </div>
    </div>
  );
}

export default RoomPriceInfo;
