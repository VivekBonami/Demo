import React from "react";
import { Link } from "react-router-dom";
import NoFlight from "../../Assets/img/noFlightIcon.png";
function FlightPlanBox({
  plan,
  saving,
  publicPrice,
  passangerCount,
  planPrice,
  noFlightAvailable,
}) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <div
      className={`flightPlanBox ${
        plan === "Economy"
          ? "economyPlan"
          : plan === "Premium Economy"
          ? "premiumEconomyPlan"
          : plan === "Business Class"
          ? "businessClassPlan"
          : "firstClassPlan"
      } `}
    >
      <div className="flightPlanName">{plan}</div>
      <div className="flightPlanInfo">
        <div className="flightPlanInfoInWrap">
          {noFlightAvailable ? (
            <>
              <div className="mobilePlanTitle mobileShow">{plan}</div>
              <img className="mobileHide" src={NoFlight} alt="" />
              <p>Not Available on this Flight</p>
            </>
          ) : (
            <>
              <div className="mobileLeft">
                <div className="mobilePlanTitle mobileShow">{plan}</div>
                <div className="savingText">{saving}% Savings</div>
                <p className="publicPrice">Public Price:</p>
                <p className="lineThrText">{formatter.format(publicPrice)}</p>
              </div>
              <div className="mobileRight">
                <p className="totalText">
                  Total for {passangerCount} Passenger:
                </p>
                <div className="planPrice">
                  {formatter.format(planPrice)}
                  <a href="#">
                    <span className="icon-info"></span>
                  </a>
                </div>
                <p className="taxNote">incl. taxes and fees</p>
                <Link to="/flightCheckout" className="btn btn2">
                  Book Flight
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default FlightPlanBox;
