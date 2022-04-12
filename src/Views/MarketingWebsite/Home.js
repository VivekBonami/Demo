import React, { useRef, useState } from "react";
import Header from "../../Component/Header";
import Card from "../../Component/Card";
import downArrow from "../../Assets/img/network/down-arrrow.svg";
import Background from "../../Assets/img/tripello-difference.webp";
import flightImage from "../../Assets/img/flightImg.jpg";
import hotelImg from "../../Assets/img/cardImg2.jpg";
import carImg from "../../Assets/img/cardImg3.jpg";
import cardImage from "../../Assets/img/cardImg4.jpg";
import Video from "../../Component/Video";
import videoSectionBg from "../../Assets/img/network/video-section-bg.png";
import desktopVideo from "../../Assets/video/home/tripello-desktop-video.mp4";
import mobileVideo from "../../Assets/video/home/tripello-mobile-video.mp4";
import plusImg from "../../Assets/img/plus-img.png";
import FooterWithMediaIcon from "../../Component/FooterWithMediaIcon";
import mobileBg from "../../Assets/img/mobileBg.png";
import homeVideoDesktop from "../../Assets/video/home/homeVideo-desktop.mp4";
import homeVideoMobile from "../../Assets/video/home/homeVideo-mobile.mp4";
import playButton from "../../Assets/img/network/play-button.png";
import Button from "../../Component/FormComponent/Button";
import AccordianOne from "../../Component/AccordianOne";
import { faqs } from "../../main/CustomConstants/Home";
import ModalHome from "../../Component/ModalHome";
import PlanInfoTwo from "../../Component/PlanInfoTwo";

function Home() {
  const [isFaqExpanded, setIsFaqExpanded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // for video play and pause button
  const [buttonPlay, setButtonPlay] = useState(false);
  const desktopVideoRef = useRef(null);
  const mobileVideoRef = useRef(null);

  const playAndPauseButton = () => {
    setButtonPlay(!buttonPlay);
    desktopVideoRef.current.play();
  };

  const playAndPauseMobileButton = () => {
    setButtonPlay(!buttonPlay);
    mobileVideoRef.current.play();
  };

  var sectionStyle = {
    backgroundImage: `url(${Background})`,
  };

  //Modal open and close
  const clickOpenModal = () => {
    console.log(setModalOpen(true));
  };

  const closeOpenModal = () => {
    setModalOpen(false);
  };

  // scroll view function

  const scrollView = (e) => {
    let triptekDifference = document.querySelector("#triptek-difference");
    e.preventDefault();
    triptekDifference &&
      triptekDifference.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  // scroll view function end

  // Accordian list
  const getFaqs = (faqList) => {
    let faqListNodes = [];

    // render the whole list
    faqList.forEach((faq, index) => {
      if (isFaqExpanded) {
        faqListNodes.push(
          <AccordianOne
            key={faq.title + index}
            divClassName={`accordBody ${index === 0 ? ` opened` : ``}`}
            headingClassName="accordHead active-btn"
            heading={faq.title}
            content={faq.description}
          />
        );
      } else {
        // render list with limit of 5 items
        if (index < 5) {
          faqListNodes.push(
            <AccordianOne
              key={faq.title + index}
              divClassName={`accordBody ${index === 0 ? ` opened` : ``}`}
              headingClassName="accordHead active-btn"
              heading={faq.title}
              content={faq.description}
            />
          );
        }
      }
    });
    // Accordian list end

    // } else {
    //   // render list limiting to length 5
    //   faqList.forEach((faq, index) => {
    //     if (index < 5) {
    //       faqListNodes.push(
    //         <AccordianOne
    //           key={faq.title + index}
    //           divClassName={`accordBody ${index == 0 ? ` opened` : ``}`}
    //           headingClassName="accordHead active-btn"
    //           heading={faq.title}
    //           content={faq.description}
    //         />
    //       );
    //     }
    //   });
    // }

    // if (faqList.length <= 6) {

    // } else if (isFaqExpanded) {

    // } else {
    //   for (let i = 0; i < 5; i++) {
    //     faqListNodes.push(
    //       <AccordianOne
    //         key={faqList[i].title + i}
    //         divClassName={`accordBody ${i == 0 ? ` opened` : ``}`}
    //         headingClassName="accordHead active-btn"
    //         heading={faqList[i].title}
    //         content={faqList[i].description}
    //       />
    //     );
    //   }
    // }
    return faqListNodes;
  };

  return (
    <>
      <div className="grayBg indexPageWrap">
        <section className="bannerSec home-banner">
          <Video
            playsinline
            autoplay
            muted
            loop
            clName="bannerImg desktop-video"
            posterImg={mobileBg}
            srcVideo={homeVideoDesktop}
          />
          <Video
            playsinline
            autoplay
            muted
            loop
            clName="bannerImg mobile-video"
            posterImg={mobileBg}
            srcVideo={homeVideoMobile}
          />
          <Header />
          <div className="bannerCont centerAlign">
            <div className="container">
              <h3>
                We Are <strong>Here</strong> To Get You <strong>There</strong>
              </h3>
              <p>Wholesale Travel Prices For Everyone</p>
            </div>
            <div className="scrollBtm">
              <a
                to="#triptek-difference"
                className="scroll-down"
                onClick={scrollView}
              >
                <img src={downArrow} alt="icon" />
              </a>
            </div>
          </div>
        </section>
        <section
          id="triptek-difference"
          className="triptek-difference-wrapper"
          style={sectionStyle}
        >
          <div className="container sectionSpace sideSpace centerAlign">
            <h3 className="sctionTitle">The Tripello Difference</h3>
            <div className="content-wrapper">
              <p>
                Tripello does Travel in{" "}
                <strong>a new and different way.</strong>
              </p>

              <p>
                Our <strong>new technology</strong> enables you to search and
                book thousands of <strong>Wholesale Travel Providers</strong> on
                one platform. <br /> No Mark-Ups, No Commissions, No Booking
                Fees —
                <strong>
                  {" "}
                  EVER. <br /> Wholesale / Net Rates
                </strong>{" "}
                directly to <strong>YOU.</strong>
              </p>

              <p>
                More Savings, More Freedom, More Choices,{" "}
                <strong>Better Experiences.</strong>
              </p>
            </div>
          </div>
        </section>
        <div className="container sectionSpace2 sideSpace triptek-inventory-wrapper">
          <h3 className="sctionTitle centerAlign">The Tripello Inventory</h3>
          <div className="colCard">
            <Card
              title={<h5>Golbal Flights</h5>}
              description="Big savings on Flights, especially in premium cabins, from all Global Carries and over 140 low-cost carriers from around the world."
              image={flightImage}
              colClassName="col"
              styleClassName="cardStyle"
              imgClassName="cardImg"
              textClassName="cardText"
            />

            <Card
              title={<h5>Hotels & Resorts</h5>}
              description="Huge savings on over 1.5 million Hotels and Resorts worldwide, Including the most popular destinations."
              image={hotelImg}
              colClassName="col"
              styleClassName="cardStyle"
              imgClassName="cardImg"
              textClassName="cardText"
            />
            <Card
              title={<h5>Rental Cars & Services</h5>}
              description="Save on Rental Cars from the top brands around the world and a global Chauffeur Service with Airport Transfer (coming soon)."
              image={carImg}
              colClassName="col"
              styleClassName="cardStyle"
              imgClassName="cardImg"
              textClassName="cardText"
            />
            <Card
              title={<h5>Vacation Homes</h5>}
              description=" More than 1.5 Million bookable Vacation rentals incl. Condos, Cabins, Villas, Bungalows, Beach Houses and more."
              image={cardImage}
              colClassName="col"
              styleClassName="cardStyle"
              imgClassName="cardImg"
              textClassName="cardText"
            />
          </div>
        </div>
        <div className="container sectionSpace2 sideSpace centerAlign tripello-way-wrapper">
          <h3 className="sctionTitle">The Tripello Way</h3>
          <div className="cardStyle cardBox">
            <p>
              <strong>Five Star Experiences at Three Star Prices.</strong>
            </p>
            <p>
              The <strong> first true </strong> subscription based
              <strong> Wholesale Travel Service </strong> offering our Members{" "}
              <strong>Savings</strong> of <strong>Up To 65%</strong> and
              sometimes even more. <strong>Join</strong> for{" "}
              <strong>Free</strong> through our{" "}
              <strong>FREEMIUM Membership</strong> and explore our platform and
              book Hotels only, at <strong>Savings of Up To 25%</strong> over
              other Online Travel Sites.
            </p>
            <p>
              No Obligation, No Risk, <strong>No Credit Card required</strong>{" "}
              at Sign Up. <strong>Upgrade</strong> when you are{" "}
              <strong>ready</strong>
              to enjoy <strong> all Member Savings.</strong>
            </p>
            <p>
              <strong>No time limit</strong> on our FREEMIUM Membership.
            </p>
          </div>
        </div>
        <div className="gradiantBg videoSpace sideSpace centerAlign tripello-magic-wrapper">
          <div className="sctionTitle">The Tripello Magic</div>
          <p>Give us a minute to show you how</p>
          <div className="cardStyle">
            <div className="videoBox">
              <div className="videoInBox">
                <div className="desktop-video">
                  <Button
                    type="button"
                    className="video-play-btn"
                    imageSrc={buttonPlay ? "" : playButton}
                    onClick={playAndPauseButton}
                  />
                  <Video
                    videoRef={desktopVideoRef}
                    id="home-desktop-video-player"
                    preload="none"
                    playsinline=""
                    controls
                    autobuffer="true"
                    clName="bannerImg"
                    posterImg={videoSectionBg}
                    srcVideo={desktopVideo}
                  />
                </div>
                <div className="mobile-video">
                  <Button
                    type="button"
                    className="video-play-btn"
                    imageSrc={buttonPlay ? "" : playButton}
                    onClick={playAndPauseMobileButton}
                  />
                  <Video
                    videoRef={mobileVideoRef}
                    id="home-mobile-video-player"
                    preload="“none”"
                    playsinline=""
                    controls
                    autobuffer="true"
                    clName="bannerImg"
                    poster={videoSectionBg}
                    srcVideo={mobileVideo}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="tripello-magic-content">
            <div className="video-section-content-wrap">
              <h6>
                If you like to <strong>find out more</strong> about{" "}
                <strong>WHAT</strong>, <strong>HOW</strong>, and{" "}
                <strong>WHY</strong> we do what <strong>WE</strong> do,
                <strong>
                  <button
                    onClick={clickOpenModal}
                    className="tripello-magic-link"
                  >
                    CLICK HERE.
                  </button>
                </strong>
              </h6>
            </div>
          </div>
        </div>
        <div className="planCont">
          <div className="container sideSpace centerAlign">
            <h3 className="sctionTitle">
              You Choose Which One Is Right For You
            </h3>
            <div className="container">
              <div className="choosePlan">
                <PlanInfoTwo
                  planName="Freemium Membership"
                  arrayList={[
                    "No Credit/Debit Card Required*",
                    "Limited Platform Access – Hotels and Resorts Only",
                    "Savings of up to 25%",
                    "Access to 1.5 million Hotels and Resorts",
                  ]}
                  planNote="* Not required for Sign Up but will be required for Hotel
                    Bookings"
                  heading="Free"
                  para="(no time limit)"
                  btnName="I'm In"
                />
                <PlanInfoTwo
                  planeName="Premium Membership"
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
                  planNote="* Required for Sign Up and Bookings"
                  // heading={}
                  para="($195.00 total at checkout)"
                  btnName="Sign Me Up"
                />
                <PlanInfoTwo
                  planName="Premium Membership"
                  months="(12 Month)"
                  imgPlus={
                    <>
                      <img src={plusImg} alt="image" />
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
                      Access to Member Referral Rewards Program <br />
                      • $25 for each Premium Member <br />• $50 for each Premium
                      Plus Member{" "}
                    </>,
                  ]}
                  planNote="* Required for Sign Up and Bookings"
                  heading={
                    <>
                      $24<sub>.95</sub>
                      <span>/ per month</span>
                    </>
                  }
                  para="($299.40 total at checkout)"
                  btnName="Sign Me Up"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container sectionSpace2 sideSpace faqCnt home-faq">
          <h3 className="centerAlign sctionTitle">
            Here are Some Answers to Common Questions
          </h3>
          <div className="accordion">
            <div className="cardStyle accordWrap">
              <div className="toggle-more-accordions">{getFaqs(faqs)}</div>
            </div>

            {/* more and less button below accordian */}

            {faqs.length > 5 && (
              <div className="read-more-btn-wrap">
                {!isFaqExpanded ? (
                  <button
                    onClick={() => setIsFaqExpanded(true)}
                    className="read-more-btn"
                    type="button"
                  >
                    more...
                  </button>
                ) : (
                  <button
                    onClick={() => setIsFaqExpanded(false)}
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
      </div>

      {/* Modal open and close  */}

      {modalOpen && (
        <ModalHome openModal={modalOpen} closeModal={closeOpenModal} />
      )}
    </>
  );
}

export default Home;
