import React from "react";
import { Link } from "react-router-dom";
import HeaderNavbar from "../../Component/HeaderNavbar";
import MessageBox from "./MessageBox";
import CarDetailsInfo from "./CarDetailsInfo";
import StartToEnd from "./StartToEnd";
import carCompanyLogo from "../../Assets/img/carCompany.png";
import carImage from "../../Assets/img/car5.png";
import Iframe from "./Iframe";
import MobileHide from "./MobileHide";
import FooterWithMediaIcon from "../../Component/FooterWithMediaIcon";

function CarsBookingConfimation() {
  return (
    <div className="siteBg confirmationPage">
      <div className="pageWrap pageWrapInner">
        <div className="fixedHeader">
          <HeaderNavbar />
        </div>
        <section className="mainContent carConfirmation">
          <div className="pageInternalScroll">
            <div className="container dflex pageInternalScrollTopPadding">
              <div className="mainWrap">
                <div className="card2">
                  <MessageBox
                    message1={
                      <>
                        Thank You! <br className="mobileShow" />
                        Your Reservation is complete.
                      </>
                    }
                    message2="Your confirmation will be emailed to you. You can also access it under your Bookings in the Menu. Enjoy Your Trip."
                  />
                  <div className="travelDetails">
                    <div className="d-flex">
                      <div className="flightInfoLeft">
                        <h4 className="sectionTitle">Luxury Car</h4>
                        <h5 className="sectionSubTitle">
                          Mercedes C300 or similar*
                        </h5>
                        <div className="flightInfoInWrap">
                          <div className="carSpecs">
                            <CarDetailsInfo
                              detail1={"People:"}
                              detail2={"5 people"}
                              iconName="icon-group font12"
                            />
                            <div className="dflex mb-5">
                              <span className="font14 lightText">
                                <span className="icon-work font12">
                                  <span className="path1"></span>
                                </span>{" "}
                                <span>Suitcases:</span>
                              </span>
                              <span className="font14 darkText">
                                2 suitcases
                              </span>
                            </div>
                            <CarDetailsInfo
                              detail1={"Transmission:"}
                              detail2={"Automatic"}
                              iconName="icon-transmission font12"
                            />
                            <CarDetailsInfo
                              detail1={"Air Conditioning:"}
                              detail2={"AC Included"}
                              iconName="icon-icon3 font12"
                            />
                            <CarDetailsInfo
                              detail1={"Mileage:"}
                              detail2={"Unlimited"}
                              iconName="icon-speedometer font12"
                            />
                          </div>
                          <div className="startToEnd">
                            <StartToEnd
                              className="startLocation"
                              dateNTime="11/12/2021 10:00"
                              content="South Los Robles Avenue, Pasadena, California, United States 91101, Pasadena, US"
                            />
                            <StartToEnd
                              className="endLocation"
                              dateNTime="23/11/2019 10:00"
                              content="South Los Robles Avenue, Pasadena, California, United States 91101, Pasadena, US"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="rightCol">
                        <div className="cardImg">
                          <div className="dflex carImgInfo">
                            <img src={carCompanyLogo} alt="" />
                            <span className="imageNote">
                              Actual car may vary from the one shown
                            </span>
                          </div>
                          <div className="carImgWrap">
                            <img src={carImage} alt="" />
                          </div>
                        </div>
                        <div className="cardImg mb-0">
                          <div className="mapouter">
                            <div className="gmap_canvas">
                              <Iframe src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sideBar">
                <div className="card2">
                  <div className="sideCardInPad">
                    <h5 className="cardTille">Summary of Charges</h5>
                    <div className="btmSpace">
                      <span className="sideLightLabel">Reserve Date:</span>
                      <span className="sideDarkValue">02/04/2020</span>
                    </div>
                  </div>
                  <div className="shadowBox">
                    <MobileHide
                      detail={"Base Fare (4 day):"}
                      price="$1,421.00"
                    />
                    <MobileHide detail={"Fees and Taxes:"} price="$365.85" />
                    <MobileHide
                      className={"totalValueBox"}
                      detail={"Amount Due at Pick-up:"}
                      price="$1,786.85"
                    />
                    <p className="boxLightText centerAlign">
                      This is an estimate of your rental car reservation total.
                      Prices may vary depending on special requests and items
                      purchased at the counter.
                    </p>
                  </div>
                </div>
                <div className="card2 helpBox">
                  <h5 className="cardTille">Need Help?</h5>
                  <Link to="/car-faq" className="faqLink">
                    <span className="icon-help"></span> See all FAQ’s
                    <i className="fa fa-angle-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FooterWithMediaIcon
          className={"white-icon"}
          iconClassName="icon-white"
        />
      </div>
    </div>
  );
}

export default CarsBookingConfimation;
