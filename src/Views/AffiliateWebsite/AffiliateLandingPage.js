import React, { useState } from "react";
import { Link } from "react-router-dom";
import NetworkHeader from "../../Component/NetworkHeader";
import Card from "../../Component/Card";
import Button from "../../Component/FormComponent/Button";
import AffiliateMobileSlider from "../../Component/AffiliateMobileSlider";
import ModalAffiliateHome from "../../Component/ModalAffiliateHome";
import PlanInfo from "../../Component/PlanInfo";
import bgImage from "../../Assets/img/network/network-banner.png";
import downArrow from "../../Assets/img/network/down-arrrow.svg";
import tripelloDiffImage from "../../Assets/img/network/tripello-diffrenece.jpg";
import flightImg from "../../Assets/img/flightImg.jpg";
import hotelImage from "../../Assets/img/cardImg2.jpg";
import carImage from "../../Assets/img/cardImg3.jpg";
import homeImgae from "../../Assets/img/cardImg4.jpg";
import personalMgmtImg from "../../Assets/img/network/personal-mgmt-bg.png";
import mobileSliderOne from "../../Assets/img/network/mobile-slider1.png";
import mobileSliderTwo from "../../Assets/img/network/mobile-slider2.png";
import mobileSliderThree from "../../Assets/img/network/mobile-slider3.png";
import mobileSliderFour from "../../Assets/img/network/mobile-slider4.png";
import playButton from "../../Assets/img/network/play-button.png";
import mobilePlayButton from "../../Assets/img/network/mobile-play-button.png";
import YoutubeEmbed from "../../Component/YoutubeEmbed";
import logo from "../../Assets/img/logo.png";
import { accordianList } from "../../main/CustomConstants/AffiliateHome";
import AccordianTwo from "../../Component/AccordianTwo";
import FooterWithMediaIcon from "../../Component/FooterWithMediaIcon";

function AffiliateLandingPage() {
  //state for youtube embed
  const [play, setPlay] = useState(false);

  // state for modal open and close
  const [modalOpen, setModalOpen] = useState(false);

  // state for expanding accordian
  const [isExpandAccordian, setIsExpandAccoridan] = useState(false);

  // state for open and close accordian list
  const [openedAccordian, setOpenedAccordian] = useState(0);

  //open play and close youtube embed
  const youtubeEmbedOpen = () => {
    setPlay(true);
  };

  const youtubeEmbedClose = () => {
    setPlay(false);
  };

  //open and close modal for pdf and video
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  //open and close accoridan list
  const handleOpenClose = (id) => {
    if (id === openedAccordian) {
      setOpenedAccordian(null);
    } else {
      setOpenedAccordian(id);
    }
  };

  //image for network banner
  const sectionStyleOne = {
    backgroundImage: `url(${bgImage})`,
  };

  //image for network difference
  const sectionStyleTwo = {
    backgroundImage: `url(${tripelloDiffImage})`,
  };

  //scroll down to scroll section
  const scrollView = (e) => {
    let scrollSection = document.getElementById("scroll-section");
    e.preventDefault();
    scrollSection &&
      scrollSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  //Accordion List
  const getFaqs = (faqList) => {
    let accordinNodes = [];

    faqList.forEach((faq, index) => {
      //render the whole list if true
      if (isExpandAccordian) {
        accordinNodes.push(
          <AccordianTwo
            handleOpenClose={handleOpenClose}
            openedAccordian={openedAccordian}
            handleOpenModal={handleOpenModal}
            id={index}
            key={faq.title + index}
            title={faq.title}
            content={faq.description}
            button={faq.button}
            className={`card-content ${index === 0 ? `` : ``}`}
          />
        );
      } else {
        // render only limited list
        if (index < 5) {
          accordinNodes.push(
            <AccordianTwo
              handleOpenClose={handleOpenClose}
              openedAccordian={openedAccordian}
              handleOpenModal={handleOpenModal}
              id={index}
              key={faq.title + index}
              title={faq.title}
              content={faq.description}
              button={faq.button}
              className={`card-content ${index === 0 ? ` ` : ``}`}
            />
          );
        }
      }
    });
    return accordinNodes;
  };

  //Tripello Difference List
  const tripelloDifferenceList = [
    <>
      At <strong>Tripello</strong> we do Travel in a new and different way.
    </>,
    <>
      With our <strong>New Platform</strong> we enable our{" "}
      <strong>Members</strong> to book from thousands of{" "}
      <strong>Wholsale Travel Providers</strong> on one platform. There are{" "}
      <strong>No Mark-Ups, No Commissions</strong> and{" "}
      <strong>No Booking Fees</strong> - Ever.
    </>,
    <>
      Tripello is the
      <strong>first subscription based Travel Service</strong> that offers{" "}
      <strong>Wholesale Travel Prices</strong> directly to its members, with
      savings of <strong>up to 65%</strong> and sometimes even more.
    </>,
  ];

  //Tripello Network List
  const tripelloNetworkList = [
    <>
      We have developed a <strong>Unique Affiliate Program</strong> around our{" "}
      <strong>New Platform</strong> that can offer{" "}
      <strong>substantial earnings</strong> for its Affiliate Members.
    </>,
    <>
      If you <strong>love Travel</strong> as much as we do and you love{" "}
      <strong>sharing incredible savings,</strong> then the Tripello Network is
      the <strong>right opportunity</strong> For you.
    </>,
    <>
      The <strong>Unique Compensation Structure</strong> and the available tools
      make the Tripello Network the <strong>first of its kind</strong> in the{" "}
      <strong>Travel Industry.</strong>
    </>,
  ];

  // Tripello QR Code List
  const qrCodeList = [
    <>
      Our Affiliates have the opportunity to promote our program using their
      individual <strong>Invitation Link or QR Code</strong> via Social Media,
      in person or through any chosen marketing campaign.
    </>,
    <>
      <strong>Your invitation</strong> will direct your prospect to your own{" "}
      <strong>Registration Pages.</strong> All Sign Ups and Conversions to
      Premium Members are <strong>automatically tracked and accredited</strong>{" "}
      to your affiliate account.
    </>,
    "You have the option to invite Freemium, Premium and Affiliate Members.",
  ];

  const boxContentList = [
    <>
      Affiliates receive <strong>earnings on a percentage</strong> of what
      Freemium Members{" "}
      <strong>
        {" "}
        save on their Travel.
        <br /> Flat Fees{" "}
      </strong>{" "}
      on every Premium and Affiliate <strong>Membership sold</strong> as well as
      Member to Member <strong>referrals.</strong>
    </>,
    <>
      Overall the Tripello Network <strong>pays a minimum of 50%</strong>{" "}
      commissions to its Affiliates.
    </>,
    <>
      You can <strong>find out more</strong> about <strong>Tripello</strong> and
      the <strong>Tripello Network Affiliate Program</strong> by clicking{" "}
      <Button
        className="tripello-magic-link"
        text="here.."
        onClick={handleOpenModal}
      />
    </>,
  ];

  return (
    <div className="networkPageWrap">
      <NetworkHeader />
      <section className="network-banner" style={sectionStyleOne}>
        <div className="container">
          <div className="banner-content">
            <h1>The Tripello Network</h1>
            <h2>
              {" "}
              A New And Unique Affiliate Program <br />
              For The Travel Industry
            </h2>
          </div>
          <div className="scrollBtn">
            <Link
              to="#scroll-section"
              onClick={scrollView}
              className="scroll-down"
            >
              <img src={downArrow} alt="icon" />
            </Link>
          </div>
        </div>
      </section>
      {/* banner end */}

      <section
        id="scroll-section"
        className="tripello-difference-wrapper"
        style={sectionStyleTwo}
      >
        <div className="container">
          <h3 className="sctionTitle">The Tripello Difference</h3>
          <div className="content-wrapper">
            {tripelloDifferenceList.map((list, index) => {
              return <p key={index}>{list}</p>;
            })}
          </div>
        </div>
      </section>
      {/* the tripello difference end */}

      <div className="tripello-inventory-wrapper">
        <div className="container">
          <div className="section-title">
            <h2>The Tripello Inventory</h2>
          </div>
          <div className="row col-layout">
            <Card
              colClassName="col grid-item"
              styleClassName="cardStyle"
              imgClassName="cardImg"
              image={flightImg}
              textClassName="cardText"
              title={
                <h5>
                  <Link to="/home">Global Flights</Link>
                </h5>
              }
              description=" Big savings on Flights, especially in premium cabins, from all Global Carries and over 140 low-cost carriers from around the world."
            />
            <Card
              colClassName="col grid-item"
              styleClassName="cardStyle"
              imgClassName="cardImg"
              image={hotelImage}
              textClassName="cardText"
              title={
                <h5>
                  <Link to="/home">Hotels & Resorts</Link>
                </h5>
              }
              description="Huge savings on over 1.5 million Hotels and Resorts worldwide, Including the most popular destinations."
            />
            <Card
              colClassName="col grid-item"
              styleClassName="cardStyle"
              imgClassName="cardImg"
              image={carImage}
              textClassName="cardText"
              title={
                <h5>
                  <Link to="/home">Rental Cars & Services</Link>
                </h5>
              }
              description="Save on Rental Cars from the top brands around the world and a global Chauffeur Service with Airport Transfer (coming soon)."
            />
            <Card
              colClassName="col grid-item"
              styleClassName="cardStyle"
              imgClassName="cardImg"
              image={homeImgae}
              textClassName="cardText"
              title={
                <h5>
                  <Link to="/home">Vacation Homes</Link>
                </h5>
              }
              description="More than 1.5 Million bookable Vacation rentals incl. Condos,Cabins, Villas, Bungalows, Beach Houses and more."
            />
          </div>
        </div>
      </div>
      <div className="tripello-way-wrapper">
        <div className="container">
          <div className="section-title">
            <h2>The Tripello Network</h2>
          </div>
          <div className="cardStyle">
            <div className="cardBox">
              {tripelloNetworkList.map((list, index) => {
                return <p key={index}>{list}</p>;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="qr-code-section">
        <div className="qr-code-section-wrap">
          <div className="container">
            <div className="left-content">
              <div className="left-content-wrapper">
                <h2>Your Personal Links and QR Codes</h2>
                {qrCodeList.map((list, index) => {
                  return <p key={index}>{list}</p>;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* QR Codes section end */}

      <div className="personal-mgmt-dashboard">
        <div className="container">
          <div className="section-title">
            <h2>Your Personal Management Dashboard</h2>
          </div>
          <div className="content">
            <p>
              As an Affiliate you will have your own{" "}
              <strong>Personal Management Dashboard</strong> giving you access
              to your <strong>Earning Details</strong>, Invitation Links For
              Members and Affiliates, <strong>Marketing Materials</strong> and
              your own <strong>Wallet</strong>. Everything you need,{" "}
              <strong>all conveniently in one location.</strong>
            </p>
          </div>
          <div className="img-section">
            <img src={personalMgmtImg} alt="image" />
          </div>
          <div className="moboile-slider">
            <AffiliateMobileSlider heading="Dashboard" src={mobileSliderOne} />
            <AffiliateMobileSlider
              heading="Member Invites"
              src={mobileSliderTwo}
            />
            <AffiliateMobileSlider
              heading="Marketing Materials"
              src={mobileSliderThree}
            />
            <AffiliateMobileSlider heading="Wallet" src={mobileSliderFour} />
          </div>
        </div>
      </div>
      {/* Personal mgmt dashboard section end */}

      <div className="box-content-section">
        <div className="container">
          <div className="box-layout-wrap">
            <div className="box-layout">
              {boxContentList.map((list, index) => {
                return <p key={index}>{list}</p>;
              })}
            </div>
          </div>
        </div>
      </div>
      {/* Box Content End here */}

      <div className="full-video-wrapper">
        <div className="container">
          <div className="section-title">
            <h2>A Quick Overview</h2>
          </div>
          <div className="video-box">
            <div className="desktop-video video-box-wrap">
              <button
                type="button"
                className="video-play-btn"
                data-target="#home-desktop-video-player"
                onClick={youtubeEmbedOpen}
              >
                <img src={playButton} alt="play-button" />
              </button>
            </div>
            <div className="mobile-video video-box-wrap">
              <div className="mobile-video-wrap">
                {/* <YoutubeEmbed src={url} /> */}
                <button
                  type="button"
                  className="video-play-btn"
                  data-target="#home-desktop-video-player"
                  onClick={youtubeEmbedOpen}
                >
                  <img src={mobilePlayButton} alt="play-button" />
                </button>
              </div>
            </div>
          </div>
          <div className="video-section-content">
            <div className="video-section-content-wrap">
              <h6>
                For a detailed <strong>Tripello Company </strong>and{" "}
                <strong>Tripello Network Affilate Program Overview,</strong>{" "}
                including <strong>Compensation Plan</strong> please
                <Button
                  class="tripello-magic-link"
                  text="CLICK HERE."
                  onClick={handleOpenModal}
                />
              </h6>
            </div>
          </div>
        </div>
      </div>
      {/* full video section end */}

      <div className="plan-wrapper">
        <div className="container">
          <div className="section-title">
            <h2>Sign Up or Upgrade Today</h2>
          </div>
          <div className="choose-plan">
            <div className="row">
              <div className="col plan-item plan-item1">
                <PlanInfo
                  logo={logo}
                  planName="Affiliate Membership"
                  months="(12 Month)"
                  heading1={
                    <h6>
                      Choose this option if <strong>YOU DO NOT</strong> have a
                      Premium Plus Tripello Membership
                    </h6>
                  }
                  arrayList={[
                    "Full Annual Tripello Premium Plus Membership",
                    "Access to Tripello Affilate Program with Unique and Comprehensive Compensation Plan",
                    "Access to Personal Management Dashboard",
                    "Access to Personal Invitation Links and QR Codes for Member and Affiliate Invites",
                    "Access to Marketing Center with Social Media optimized Collateral and Tips and Tricks for Campaigns",
                    "Access to Personal Wallet for tracking of Earnings and Payouts",
                  ]}
                  heading2={
                    <>
                      $499 <span>/ annually</span>
                    </>
                  }
                  heading3="(Annual Auto Renewal)"
                  text="Sign Me Up"
                />
              </div>
              <div className="col plan-item plan-item2">
                <PlanInfo
                  logo={logo}
                  planName="Upgrade To Affiliate Membership"
                  months="(12 Month)"
                  heading1={
                    <h6>
                      Choose this option if <strong>YOU ALREADY</strong> have a
                      Premium Plus Tripello Membership
                    </h6>
                  }
                  arrayList={[
                    "Access to Tripello Affilate Program with Unique and Comprehensive Compensation Plan",
                    "Access to Personal Management Dashboard",
                    "Access to Personal Invitation Links and QR Codes for Member and Affiliate Invites",
                    "Access to Marketing Center with Social Media optimized Collateral and Tips and Tricks for Campaigns",
                    "Access to Personal Wallet for tracking of Earnings and Payouts",
                  ]}
                  heading2={
                    <>
                      $199.00<span>/ First Year</span>
                    </>
                  }
                  heading3="(Renews As Affiliate Membership)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="faq-wrapper">
        <div className="container">
          <div className="section-title">
            <h2>Here are Some Answers to Common Questions</h2>
          </div>
          <div className="accordion">
            <div className="toggle-more-accordions">
              {getFaqs(accordianList)}
            </div>
          </div>
          {accordianList.length > 5 && (
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
      </div>
      <FooterWithMediaIcon />

      {play && <YoutubeEmbed openModal={play} closeModal={youtubeEmbedClose} />}
      {modalOpen && (
        <ModalAffiliateHome
          openModal={modalOpen}
          closeModal={handleCloseModal}
        />
      )}
    </div>
  );
}

export default AffiliateLandingPage;
