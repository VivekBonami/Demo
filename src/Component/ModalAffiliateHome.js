import React from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import Button from "./FormComponent/Button";
import blueIcon from "../Assets/img/close-blue-icon.png";
import overViewPdfIcon from "../Assets/img/home/OverviewPdfIcon.png";
import companyPdf from "../Assets/affiliate-home/Tripello-Company-Overview-V1.0-2022.pdf";
import overViewVideoIcon from "../Assets/img/home/OverviewVideoIcon.png";
import tripelloNetworkPdfIcon from "../Assets/img/network/Tripello-Network-Program-Pdf-Icon.png";
import tripelloNetworkPdf from "../Assets/affiliate-home/Tripello-Affiliate-Plan-V1.0-2022.pdf";

function ModalAffiliateHome({ openModal, closeModal }) {
  //for opening video in modal on youtube
  const youtubeVideoPlay = () => {
    window.open(
      "https://www.youtube.com/embed/h4zHT2-Y7OU?start=68?rel=0&modestbranding=1&autohide=1&showinfo=0&autoplay=1&loop=1&rel=0&origin=http://18.188.68.205/",
      "_blank"
    );
  };

  return (
    <Modal
      isOpen={openModal}
      ariaHideApp={false}
      className="popup magic-section-popup popup-open"
    >
      <div className="popup-content">
        <div className="popup-title">
          <Button
            onClick={closeModal}
            className="btn close"
            imageSrc={blueIcon}
          />
        </div>
        <div className="content-box">
          <div className="colCard">
            <div className="cardStyle">
              <div className="cardImg">
                <div className="cardImg-wrap">
                  <img src={overViewPdfIcon} alt="image" />
                </div>
              </div>
              <div className="cardText">
                <h5>
                  <Link target="_blank" to={companyPdf}>
                    <strong>Tripello Company Overview</strong> (PDF)
                  </Link>
                </h5>
              </div>
            </div>
            <div className="cardStyle">
              <div className="cardImg">
                <div className="cardImg-wrap">
                  <img src={overViewVideoIcon} alt="image" />
                </div>
              </div>
              <div className="cardText">
                <h5>
                  <button
                    className="magic-popup-video-play"
                    onClick={youtubeVideoPlay}
                  >
                    <strong>Tripello Company Overview</strong> (VIDEO)
                  </button>
                </h5>
              </div>
            </div>
            <div className="cardStyle">
              <div className="cardImg">
                <div className="cardImg-wrap">
                  <img src={tripelloNetworkPdfIcon} alt="image" />
                </div>
              </div>
              <div className="cardText">
                <h5>
                  <Link target="_blank" to={tripelloNetworkPdf}>
                    <strong>Tripello Network Program</strong> (PDF)
                  </Link>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ModalAffiliateHome;
