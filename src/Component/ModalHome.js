import React from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";

import blueIcon from "../Assets/img/close-blue-icon.png";
import overviewPdfIcon from "../Assets/img/home/OverviewPdfIcon.png";
import companyPdf from "../Assets/affiliate-home/Tripello-Company-Overview.pdf";
import overviewVideoIcon from "../Assets/img/home/OverviewVideoIcon.png";
import presentationVideo from "../Assets/video/home/TripelloPresentationDesktop.mp4";

function ModalHome({ openModal, closeModal }) {
  return (
    //opening Modal onclick

    <Modal
      isOpen={openModal}
      ariaHideApp={false}
      className="popup magic-section-popup popup-open"
    >
      <div className="popup-content">
        <div className="popup-title">
          <button onClick={closeModal} className="btn close">
            <img src={blueIcon} alt="icon" />
          </button>
        </div>
        <div className="content-box">
          <div className="colCard">
            <div className="cardStyle">
              <div className="cardImg">
                <div className="cardImg-wrap">
                  <img src={overviewPdfIcon} alt="image" />
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
                  <video
                    id="magic-video-popup-player"
                    className="video-player"
                    poster={overviewVideoIcon}
                    autobuffer="true"
                  >
                    <source src={presentationVideo} type="video/mp4" />
                    Your browser does not support HTML5 video.
                  </video>
                </div>
              </div>
              <div className="cardText">
                <h5>
                  <Link
                    className="magic-popup-video-play"
                    to={presentationVideo}
                  >
                    <strong>Tripello Company Overview</strong>
                    (VIDEO)
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

export default ModalHome;
