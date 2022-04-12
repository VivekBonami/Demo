import React from "react";
import CarFeature from "./CarFeature";
import SingleCarPriceDetails from "./SingleCarPriceDetails";

function CardTootipDetails({
  carNameModal,
  features,
  startAdd,
  endAdd,
  similar,
  carPriceDetails,
}) {
  return (
    <>
      <div className="toolTipArro" />
      <div className="cardInfoToolTip">
        <div className="card2">
          <div className="BSrow">
            <div className="col-9">
              <div className="cardInSpace">
                <h3 className="cardTitle">{carNameModal}</h3>
                <div className="similarVehicle mobileHide">
                  Or similar
                  <div className="grayTag">{similar}</div>
                </div>
                <div className="cardFeatures">
                  {features &&
                    features.map((ele, index) => (
                      <CarFeature {...ele} key={index} />
                    ))}
                </div>
                <div className="tickNote mobileHide">
                  <span className="icon-creditCard" /> No Credit Card Required
                </div>
                <div className="startToEnd">
                  <div className="startLocation">
                    <i className="icon-location" />
                    {startAdd}
                  </div>
                  <div className="endLocation">
                    <i className="icon-location" />
                    {endAdd}
                  </div>
                </div>
              </div>
            </div>
            <SingleCarPriceDetails {...carPriceDetails} />
          </div>
        </div>
      </div>
    </>
  );
}

export default CardTootipDetails;
