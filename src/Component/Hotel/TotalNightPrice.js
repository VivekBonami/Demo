import React from "react";

function TotalNightPrice({savings, publicPrice, from, priceDetails, savingPrice }) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <>
      <div className="dflex publicPrice">
        <span className="lightText">Public Price:</span>
        <span className="font14">{formatter.format(publicPrice)}</span>
      </div>
      <div>
        <div className="dflex btmSpace fromPrice">
          <span className="font17 lightText">From:</span>
          <span className="font17">{formatter.format(from)}</span>
        </div>
      </div>
      <div className="priceDetailsWrap">
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
                <h5>{formatter.format(priceDetails.perNight)} per night</h5>
                <div className="total-amount">
                  <h4>
                    Total:
                    <span>{formatter.format(priceDetails.total)}</span>
                  </h4>
                </div>
                <div className="saving-box">
                  <h4>
                    Savings ({savings}%):
                    <span>{formatter.format(priceDetails.savings)}</span>
                  </h4>
                </div>
              </div>
              <div className="note">Free cancellation before Tue, April 6</div>
            </div>
          </div>
        </div>
        <p className="btmSpace lightText">(2 nights incl. taxes &amp; fees)</p>
      </div>
      <div className="dflex blueText btmSpace2 savings">
        <span>Savings ({savings}%):</span>
        <span className="font14">{formatter.format(savingPrice)}</span>
      </div>
    </>
  );
}

export default TotalNightPrice;
