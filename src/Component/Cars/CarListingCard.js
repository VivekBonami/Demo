import React, { useRef, useState } from "react";
import useOutsideHandler from "../../Stores/Utils/useOutsideHandler";
import CardTootipDetails from "./CardTootipDetails";

function CarListingCard({
  image,
  name,
  similar,
  isUnlimitedMiles,
  perDayPrice,
  totalPrice,
  moreDetails,
}) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const detailRef = useRef(null);
  const [showTooltip, setshowTooltip] = useState(false);
  const toggleCloseTooltip = () => {
    setshowTooltip(false);
  };
  useOutsideHandler(detailRef, showTooltip, toggleCloseTooltip);
  return (
    <div
      className={`col-3 ${showTooltip ? "showToolTip" : ""}`}
      onClick={() => setshowTooltip(true)}
      ref={detailRef}
    >
      <div className="card2">
        <div className="cardImg">
          <img src={image} alt="" />
        </div>
        <div className="cardCnt">
          <div>
            <h3 className="cardTitle">{name}</h3>
            <div className="similarVehicle">
              Or similar
              <div className="grayTag">{similar}</div>
            </div>

            {isUnlimitedMiles && (
              <div className="tickNote">
                <span className="icon-tick" />
                Including Unlimited Miles
              </div>
            )}
          </div>
          <div className="cardBtmBox dflex">
            <div className="perDay">
              {formatter.format(perDayPrice)}
              <span>/day</span>
            </div>
            <div className="totalAmt">
              {formatter.format(totalPrice)}
              <span> total</span>
            </div>
          </div>
        </div>
        {showTooltip && <CardTootipDetails {...moreDetails} />}
      </div>
    </div>
  );
}

export default CarListingCard;
