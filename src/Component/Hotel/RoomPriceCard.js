import React from "react";
import { Link } from "react-router-dom";
import Button from "../FormComponent/Button";
import RoomPriceInfo from "./RoomPriceInfo";

function RoomPriceCard({savings, availableRooms, publicPrice, from, priceDetails, savingPrice}) {
  return (
    <div className="card2">
      <div className="row no-gutters">
        <div className="imgWrap col mobileViewDisplayNone">
          <div className="content d-flex stretch dflexColm h-100">
            <div className="savings">
              <p>{savings}% Savings</p>
            </div>
            <div className="links">
              <div>
                <Button className="btnBorder">Refundable</Button>
              </div>
              <Link to="#">Cancellation Policy</Link>
            </div>
          </div>
        </div>
        <div className="infoBox col">
          <div className="row no-gutters">
            <RoomPriceInfo publicPrice={publicPrice} from={from} priceDetails={priceDetails} savingsPrice={savingPrice}/>
            <div className="col buttonsGroup">
              <div className="availableRoomsWrap mobileViewDisplayNone">
                <h4 className="availableRooms">{availableRooms} rooms available</h4>
              </div>
              <div className="centerAlign">
                <a href="checkout.html" className="btn">
                  Reserve Room
                </a>
              </div>
              <div className="centerAlign">
                <a href="checkout.html" className="btnBorder2">
                  <i className="icon-border-plain"></i>
                  See Member Price
                </a>
              </div>
              <div className="desktopViewDisplayNone">
                <div className="links">
                  <div>
                    <button className="btnBorder">Refundable</button>
                  </div>
                  <a href="#">Cancellation Policy</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomPriceCard;
