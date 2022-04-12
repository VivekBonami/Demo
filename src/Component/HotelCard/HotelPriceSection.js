import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../FormComponent/Button";

function HotelPriceSection({
  totalPrice,
  nightPrice,
  priceDetails,
  savingPrice,
  isMember,
  isDetailPage,
}) {
  const [selectedTab, setselectedTab] = useState(0);
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <>
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
      <div className="infoBoxWrapper totalPriceBox">
        {selectedTab === 0 ? (
          <>
            <div className="dflex publicPrice">
              <span className="lightText">Public Price:</span>
              <span className="font14">
                {formatter.format(totalPrice.publicPrice)}
              </span>
            </div>
            <div>
              <div className="dflex btmSpace fromPrice">
                <span className="font17 lightText">From:</span>
                <span className="font17">
                  {formatter.format(totalPrice.from)}
                </span>
              </div>
            </div>
            <div className="priceDetailsWrapper">
              <div className="priceDetails d-flex align-items-center">
                <h4>Price Details</h4>
                <i className="fa fa-angle-down"></i>
                <div className="pricedetail-dropdown">
                  <div className="dropdown-box">
                    <div className="dropdown-content">
                      <h3>Price Details</h3>
                      {priceDetails &&
                        priceDetails.subPrice.map((ele, index) => {
                          return (
                            <h4 key={index}>
                              {ele.title}
                              <span>{formatter.format(ele.price)}</span>
                            </h4>
                          );
                        })}
                      <h5>
                        {formatter.format(priceDetails.perNight)} per night
                      </h5>
                      <div className="total-amount">
                        <h4>
                          Total:
                          <span>{formatter.format(priceDetails.total)}</span>
                        </h4>
                      </div>
                      <div className="saving-box">
                        <h4>
                          Savings (25%):
                          <span>{formatter.format(priceDetails.saving)}</span>
                        </h4>
                      </div>
                    </div>
                    <div className="note">
                      Free cancellation before Tue, April 6
                    </div>
                  </div>
                </div>
              </div>
              <p className="btmSpace lightText">
                (2 nights incl. taxes & fees)
              </p>
            </div>
            <div className="buttonAndTextGroup">
              <div className="dflex blueText btmSpace2 savings">
                <span>Savings (54%):</span>
                <span className="font14">{formatter.format(savingPrice)}</span>
              </div>
              {isMember ? (
                <div className="centerAlign buttonSpace">
                  <Link to="/detail-hotel" className="btnBorder2">
                    <i className="icon-border-plain"></i>
                    See Member Price
                  </Link>
                </div>
              ) : !isDetailPage ? (
                <div className="centerAlign buttonSpace upgradeBtn">
                  <Link to="/detail-hotel" className="btn">
                    <i className="icon-border-plain"></i>
                    Upgrade
                  </Link>
                  <h4>Cancel</h4>
                </div>
              ) : (
                <div
                  className="centerAlign buttonSpace">
                  <Link to="#rooms" className="btn">
                    Select Room
                  </Link>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <div className="dflex publicPrice">
              <span className="lightText">Public Price:</span>
              <span className="font14">
                {formatter.format(nightPrice.publicPrice)}
              </span>
            </div>
            <div>
              <div className="dflex btmSpace fromPrice">
                <span className="font17 lightText">From:</span>
                <span className="font17">
                  {formatter.format(nightPrice.from)}
                </span>
              </div>
            </div>
            <div className="priceDetailsWrapper">
              <div className="priceDetails d-flex align-items-center">
                <h4>Price Details</h4>
                <i className="fa fa-angle-down"></i>
                <div className="pricedetail-dropdown">
                  <div className="dropdown-box">
                    <div className="dropdown-content">
                      <h3>Price Details</h3>
                      {priceDetails &&
                        priceDetails.subPrice.map((ele, index) => {
                          return (
                            <h4 key={index}>
                              {ele.title}
                              <span>{formatter.format(ele.price)}</span>
                            </h4>
                          );
                        })}
                      <h5>
                        {formatter.format(priceDetails.perNight)} per night
                      </h5>
                      <div className="total-amount">
                        <h4>
                          Total:
                          <span>{formatter.format(priceDetails.total)}</span>
                        </h4>
                      </div>
                      <div className="saving-box">
                        <h4>
                          Savings (25%):
                          <span>{formatter.format(priceDetails.saving)}</span>
                        </h4>
                      </div>
                    </div>
                    <div className="note">
                      Free cancellation before Tue, April 6
                    </div>
                  </div>
                </div>
              </div>
              <p className="btmSpace lightText">
                (4 nights incl. taxes & fees)
              </p>
            </div>
            <div className="buttonAndTextGroup">
              <div className="dflex blueText btmSpace2 savings">
                <span>Savings (54%):</span>
                <span className="font14">{formatter.format(savingPrice)}</span>
              </div>
              {isMember ? (
                <div className="centerAlign buttonSpace">
                  <Link to="/detail-hotel" className="btnBorder2">
                    <i className="icon-border-plain"></i>
                    See Member Price
                  </Link>
                </div>
              ) : !isDetailPage ? (
                <div className="centerAlign buttonSpace upgradeBtn">
                  <Link to="/detail-hotel" className="btn">
                    <i className="icon-border-plain"></i>
                    Upgrade
                  </Link>
                  <h4>Cancel</h4>
                </div>
              ) : (
                <div
                  className="centerAlign buttonSpace">
                  <Link to="#rooms" className="btn">
                    Select Room
                  </Link>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default HotelPriceSection;
