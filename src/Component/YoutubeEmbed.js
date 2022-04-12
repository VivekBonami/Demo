import React from "react";
import Modal from "react-modal";
import closeIcon from "../Assets/img/lightbox-close.png";

function YoutubeEmbed({ src, openModal, closeModal }) {
  return (
    <Modal
      isOpen={openModal}
      ariaHideApp={false}
      className="popup magic-video-section-popup"
    >
      <div className="popup-content">
        <div className="popup-title">
          <button onClick={closeModal} className="btn close">
            <img src={closeIcon} alt="icon" />
          </button>
        </div>
        <div className="content-box">
          <div className="content-video-box">
            <iframe
              id="home-mobile-video-player"
              className="iframe-item"
              src="https://www.youtube.com/embed/UpUxhPCDhBM?vq=hd720&modestbranding=1&autohide=1&mute=0&showinfo=0&autoplay=1&enablejsapi=1&loop=1&rel=0&origin=http://18.188.68.205/"
              frameBorder="0"
              allow="autoplay"
            />
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default YoutubeEmbed;
