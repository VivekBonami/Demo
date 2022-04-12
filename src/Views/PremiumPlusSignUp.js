import React, { useState } from "react";
import { Link } from "react-router-dom";

import HeaderNavbar from "../Component/HeaderNavbar";
import Card from "../Component/Card";
import planeImage from "../Assets/img/membership-upgrade/grid-item1.jpg";
import hotelImage from "../Assets/img/membership-upgrade/grid-item2.jpg";
import carImage from "../Assets/img/membership-upgrade/grid-item3.jpg";
import placeImage from "../Assets/img/membership-upgrade/grid-item4.jpg";
import videoBg from "../Assets/img/videoBg.png";
import playButton from "../Assets/img/network/play-button.png";
import Button from "../Component/FormComponent/Button";
import PlanInfo from "../Component/PlanInfo";
import plusIcon from "../Assets/img/membership-upgrade/plus-icon.png";
import AccordianTwo from "../Component/AccordianTwo";
import UpgradeNowWrapper from "../Component/UpgradeNowWrapper";
import FooterWithMediaIcon from "../Component/FooterWithMediaIcon";
import { faqs } from "../main/CustomConstants/Home";

function PremiumPlusSignUp() {
  // const [showAllaccordion, setshowAll] = useState(false);

  const [isExpandAccordian, setIsExpandAccoridan] = useState(false);

  const getFaqs = (faqList) => {
    let accordinNodes = [];

    // Accordian list

    faqList.forEach((faq, index) => {
      //render the whole list if true
      if (isExpandAccordian) {
        accordinNodes.push(
          <AccordianTwo
            key={faq.title + index}
            title={faq.title}
            content={faq.description}
            className={`card-content ${index === 0 ? ` show` : ``}`}
          />
        );
      } else {
        // render only limited list
        if (index < 8) {
          accordinNodes.push(
            <AccordianTwo
              key={faq.title + index}
              title={faq.title}
              content={faq.description}
              className={`card-content ${index === 0 ? ` show` : ``}`}
            />
          );
        }
      }
    });

    // Accordian list end here

    // if (faqList.length <= 5) {
    //   faqList.forEach((faq, index) => {
    //     accordinNodes.push(
    //       <AccordianTwo
    //         key={faq.title + index}
    //         title={faq.title}
    //         content={faq.description}
    //         className={`card-content ${index == 0 ? ` show` : ``}`}
    //       />
    //     );
    //   });
    // } else if (isExpandAccordian) {
    //   faqList.forEach((faq, index) => {
    //     accordinNodes.push(
    //       <AccordianTwo
    //         key={faq.title + index}
    //         title={faq.title}
    //         content={faq.description}
    //         className={`card-content ${index == 0 ? ` show` : ``}`}
    //       />
    //     );
    //   });
    // } else {
    //   for (let i = 0; i < 8; i++) {
    //     accordinNodes.push(
    //       <AccordianTwo
    //         key={faqList[i].title + i}
    //         title={faqList[i].title}
    //         content={faqList[i].description}
    //         className={`card-content ${i == 0 ? ` show` : ``}`}
    //       />
    //     );
    //   }
    // }
    return accordinNodes;
  };

  return (
    <div className="siteBg MembershipUpgradePageWrap premiumPlusSignUpPageWrap">
      {/* <div className="accordion">
        {AbortController.map((ele, index) => {
          if (index < 8 && showAllaccordion) {
            return <div className="card"></div>;
          }
        })}
        {AbortController.length >= 8 && (
          <div className="toggle-more-accordions" style>
            {AbortController.map((ele, index) => {
              if (index >= 8) {
                return <div className="card"></div>;
              }
            })}
          </div>
        )}
      </div> */}

      <div className="pageWrap pageWrapInner">
        <div className="fixedHeader">
          <HeaderNavbar />
        </div>
        <section className="mainContent">
          <div className="pageInternalScroll">
            <div className="container">
              <UpgradeNowWrapper
                heading="Welcome,"
                className="upgrade-now-wrapper"
                para1={
                  <>
                    you have been invited to join a <strong>Unique</strong> and{" "}
                    <strong>New</strong> form of <strong>Travel.</strong> The
                    first Platform to offer
                    <strong> True Wholesale Travel Prices.</strong>{" "}
                  </>
                }
                para2={
                  <>
                    No Mark-Ups, No Commissions, No Booking Fees -
                    <strong> Ever. Wholesale Rates </strong> Directly To You.{" "}
                  </>
                }
                para3={
                  <>
                    More Savings, More Freedom, More Choices,{" "}
                    <strong> Better Experiences. </strong>{" "}
                  </>
                }
              />
              <div className="grid-layout-wrap">
                <div className="section-title">
                  <h3>
                    Get <strong>Full Access</strong> to <strong>ALL</strong>{" "}
                    Savings
                  </h3>
                  <h2>Save up to 65% and more on…</h2>
                </div>
                <div className="grid-layout row">
                  <Card
                    title={
                      <h6>
                        <Link to="/home">Global Flights</Link>
                      </h6>
                    }
                    description="Big savings on Flights, especially in premium cabins, from all Global Carries and over140 low-cost carriers from around the world."
                    image={planeImage}
                    colClassName="col grid-item"
                    styleClassName="infobox"
                    imgClassName="image-box"
                    textClassName="grid-content"
                  />
                  <Card
                    title={
                      <h6>
                        <Link to="/home">Hotels & Resorts</Link>
                      </h6>
                    }
                    description="Huge savings on over 1.5 million Hotels and Resorts worldwide, Including the most popular destinations."
                    image={hotelImage}
                    colClassName="col grid-item"
                    styleClassName="infobox"
                    imgClassName="image-box"
                    textClassName="grid-content"
                  />
                  <Card
                    title={
                      <h6>
                        <Link to="/home">Rental Cars & Services</Link>
                      </h6>
                    }
                    description="Save on Rental Cars from the top brands around the world and a global Chauffeur Service with Airport Transfer (coming soon)."
                    image={carImage}
                    colClassName="col grid-item"
                    styleClassName="infobox"
                    imgClassName="image-box"
                    textClassName="grid-content"
                  />
                  <Card
                    title={
                      <h6>
                        <Link to="/home">Vacation Homes</Link>
                      </h6>
                    }
                    description="More than 1.5 Million bookable Vacation rentals incl. Condos, Cabins, Villas, Bungalows, Beach Houses and more."
                    image={placeImage}
                    colClassName="col grid-item"
                    styleClassName="infobox"
                    imgClassName="image-box"
                    textClassName="grid-content"
                  />
                </div>
              </div>
              <div className="full-video-wrapper">
                <div className="section-title">
                  <h2>How Much Can You Save?</h2>
                  <h3>Let us show you the math</h3>
                </div>
                <div className="video-box">
                  <img src={videoBg} alt="" />
                  <Button className="btn-play">
                    <img src={playButton} alt="play icon" />
                  </Button>
                </div>
              </div>
              <div className="plan-wrapper">
                <div className="section-title">
                  <h2>You Choose Which One Is Right For You</h2>
                </div>
                <div className="choose-plan">
                  <div className="row">
                    <div className="col plan-item">
                      <PlanInfo
                        planName="Premium Membership"
                        months="(6 Month)"
                        arrayList={[
                          "Credit/Debit Card Required*",
                          "Unlimited Platform Access",
                          "Savings of up to 65% and more",
                          "Access to 1.5 million Hotels and Resorts",
                          "Access to 1.5 million Vacation Homes",
                          "Access to Rental Cars and upcoming Chauffeur Service",
                          "Access to Flight Inventory of all Global Carriers and 140 Low Cost Carriers",
                        ]}
                        heading2={
                          <>
                            $32.50 <span>/ per month</span>
                          </>
                        }
                        heading3="($195.00 total at checkout*)"
                        para="*Credit/Debit Card required for Sign Up and
                            Bookings. NO auto renewal of yearly subscription."
                      />
                    </div>
                    <div className="col plan-item">
                      <PlanInfo
                        planName="Premium Plus Membership"
                        months="(12 Month)"
                        image={
                          <>
                            {" "}
                            <img src={plusIcon} alt="icon" />
                          </>
                        }
                        arrayList={[
                          "Credit/Debit Card Required*",
                          "Unlimited Platform Access",
                          "Savings of up to 65% and more",
                          "Access to 1.5 million Hotels and Resorts",
                          "Access to 1.5 million Vacation Homes",
                          "Access to Rental Cars and upcoming Chauffeur Service",
                          "Access to Flight Inventory of all Global Carriers and 140 Low Cost Carriers",
                          <>
                            Access to Member Referral Rewards Program <br />•
                            $25 for each Premium Member
                            <br />• $50 for each Premium Plus Member
                          </>,
                        ]}
                        heading2={
                          <>
                            $24.95 <span>/ per month</span>
                          </>
                        }
                        heading3="($299.40 total at checkout*)"
                        para="*Credit/Debit Card required for Sign Up and
                            Bookings. NO auto renewal of yearly subscription."
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="faq-wrapper">
                <div className="section-title">
                  <h2>Here are Some Answers to Common Questions</h2>
                </div>
                <div className="accordion">
                  <div className="toggle-more-accordions">{getFaqs(faqs)}</div>
                </div>

                {/* more and less button below accordian */}

                {faqs.length > 5 && (
                  <div className="read-more-btn-wrap">
                    {!isExpandAccordian ? (
                      <button
                        onClick={() => {
                          setIsExpandAccoridan(true);
                        }}
                        className="read-more-btn"
                        type="button"
                      >
                        more...
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          setIsExpandAccoridan(false);
                        }}
                        className="read-more-btn"
                        type="button"
                      >
                        less...
                      </button>
                    )}
                  </div>
                )}
              </div>
              <UpgradeNowWrapper
                className="upgrade-now-wrapper start-saving-wrapper"
                heading="Start Saving Today"
                para1="Become a Tripello Premium Member and enjoy unlimited access to unparalled rates on Flights, Hotels, Cars and Vacation Homes."
              />
            </div>
          </div>
        </section>
        <FooterWithMediaIcon />
      </div>
    </div>
  );
}

export default PremiumPlusSignUp;
