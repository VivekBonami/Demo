import React, { useState } from "react";
import PriceDetailType from "./PriceDetailType";

function SingleCarPriceDetails({ total, priceDetails }) {
  const [showPrice, setshowPrice] = useState(false);
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <div className="col-3">
      <div className="shadowBox">
        <div className="boxTopSec">
          <div className="tickNote mobileShow">
            <span className="icon-creditCard" /> No Credit Card Required
          </div>
          <div className="centerAlign">
            <div className="greenBdrTag">
              <i className="icon-tick" />
              Free Cancellation
            </div>
          </div>
          <div className="centerAlign">
            <div className="greenBdrTag">
              <i className="icon-tick" />
              Pay Later
            </div>
          </div>
        </div>
        <div className="sideSpace">
          <div className="dflex totalAmout">
            <div className="leftText">Total:</div>
            <div className="rightText">{formatter.format(total)}</div>
          </div>
          <div className="dflex taxNPrice">
            <div className=" priceDetails dropDownTooltip toggleClass">
              <div
                className="dropdownBtn toggleBtn"
                onClick={() => setshowPrice(!showPrice)}
              >
                Price Details
                <i className={`fa fa-angle-${showPrice ? "up" : "down"}`} />
              </div>
              <div className={`dropdownInWrap ${showPrice ? "d-block" : ""}`}>
                <h4>Price Details</h4>
                {priceDetails &&
                  priceDetails.map((item, index) => (
                    <PriceDetailType
                      {...item}
                      key={index}
                      lastEle={priceDetails.length - 1 === index}
                    />
                  ))}
                <div className="rightAlign smlText">Tax Included</div>
              </div>
            </div>
            <span className="smlText">Tax Included</span>
          </div>
          <div className="centerAlign">
            <a href="carCheckout.html" className="btn">
              Reserve Car
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleCarPriceDetails;
