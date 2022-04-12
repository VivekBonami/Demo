import React from "react";
import IcomoonReact, { iconList } from "icomoon-react";
import Footer from "./Footer";
import iconSet from "../Assets/fonts/selection.json";

// footer list with meida Icon

function FooterWithMediaIcon({ className, iconClassName }) {
  return (
    <footer className="footer">
      <div className="container">
        <Footer />
        <div className={`snsIcons ${className}`}>
          <a href="https://www.facebook.com/HelloTripello" target="blank">
            <IcomoonReact
              className={`icomoon-icon ${iconClassName}`}
              iconSet={iconSet}
              color="#5B5B5E"
              size={12}
              icon="uniE904"
            />
          </a>
          <a href="https://twitter.com/Tripello1" target="blank">
            <IcomoonReact
              className={`icomoon-icon ${iconClassName}`}
              iconSet={iconSet}
              color="#5B5B5E"
              size={24}
              icon="uniE90A"
            />
          </a>
          <a href="https://www.instagram.com/hellotripello/" target="blank">
            <IcomoonReact
              className={`icomoon-icon ${iconClassName}`}
              iconSet={iconSet}
              color="#5B5B5E"
              size={22}
              icon="uniE906"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/tripello-inc"
            target="blank"
          >
            <IcomoonReact
              className={`icomoon-icon ${iconClassName}`}
              iconSet={iconSet}
              color="#5B5B5E"
              size={23}
              icon="uniE908"
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UC1J6sw7sT_oXQubq6Jy3Ssw"
            target="blank"
          >
            <IcomoonReact
              className="icomoon-icon icon-white"
              iconSet={iconSet}
              color="#5B5B5E"
              size={27}
              icon="uniE90C"
            />
          </a>
          <a href="https://www.pinterest.com/HelloTripello" target="blank">
            <IcomoonReact
              className={`icomoon-icon ${iconClassName}`}
              iconSet={iconSet}
              color="#5B5B5E"
              size={21}
              icon="pinterest"
            />
          </a>
          <a href="https://www.tiktok.com/@hellotripello" target="blank">
            <IcomoonReact
              className={`icomoon-icon ${iconClassName}`}
              iconSet={iconSet}
              color="#5B5B5E"
              size={21}
              icon="TikTok-_1"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default FooterWithMediaIcon;
