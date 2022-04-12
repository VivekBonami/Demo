import React from "react";
import { Link } from "react-router-dom";
import PinImg from "../../Assets/img/location-gray.png";
function HotelDetails({
  name,
  rating,
  utilities,
  address,
  comparePrice,
  starImgs,
  utilitiesImg,
}) {
  return (
    <div className="cardContentWrap h-100">
      <div className="innerCnt dflexColm">
        <div>
          <Link to="/detail-hotel"><h3 className="cartTitle">{name}</h3></Link>
          <div className="topSection dflex justifyStart">
            <div className="rating">
              {starImgs &&
                starImgs.map((ele, index) => {
                  return <img src={ele} alt="yellow-star" key={index}/>;
                })}
            </div>
            <div className="ratingComment font14">
              <span className="commentCount">{rating}</span>
              Very Good
            </div>
          </div>
        </div>
        <ul className="bulletList">
          {utilities &&
            utilities.map((ele, index) => {
              return <li key={index}>{ele}</li>;
            })}
        </ul>
        <div className="mobileViewWrapper">
          {utilitiesImg &&
            utilitiesImg.map((ele, index) => {
              return <img src={ele} alt="icons" />;
            })}
          <span>+4</span>
        </div>
        <div className="btmSection font14">
          <div className="location">
            <img src={PinImg} alt="icon" />
            {address}
          </div>
          <div className="comparePrice">
            <span className="graph"></span>
            <span className="comparePriceText">
              Compare Price <i className="fa fa-angle-down"></i>
            </span>
            <div className="comparePriceContent">
              <div className="dflex">
                <div className="col">
                  {comparePrice &&
                    comparePrice.map((ele, index) => {
                      if (index < 4)
                        return (
                          <div className="dflex">
                            <span className="key">{ele.siteName}</span>
                            <span className="value">${ele.sitePrice}</span>
                          </div>
                        );
                    })}
                </div>
                <div className="col">
                  {comparePrice &&
                    comparePrice.map((ele, index) => {
                      if (index > 3)
                        return (
                          <div className="dflex">
                            <span className="key">{ele.siteName}</span>
                            <span className="value">${ele.sitePrice}</span>
                          </div>
                        );
                    })}
                </div>
              </div>
              <p className="priceTax centerAlign font12">Prices Include Tax</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelDetails;
