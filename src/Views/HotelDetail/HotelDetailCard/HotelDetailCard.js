import React, { useState } from "react";
import HotelPriceSection from "../../../Component/HotelCard/HotelPriceSection";
import MapView from "../../HotelSearchResult/MapView/MapView";
import HotelInfo from "../../../Component/Hotel/HotelInfo";
import ImageSlider from "../../../Component/ImageSlider/ImageSlider";
import ThumbCount from "../../../Component/ImageSlider/ThumbCount";
import Lightbox from 'react-image-lightbox';
function HotelDetailCard({
  totalPrice,
  nightPrice,
  priceDetails,
  savingPrice,
  isDetailPage,
  name,
  starImgs,
  address,
  contactNo,
  checkIn,
  checkOut,
  themes,
  hotelImages,
}) {
  const [showGallery, setshowGallery] = useState(false);
  const [photoIndex, setphotoIndex] = useState(0);

  const toggleShowGallery = (index) => {
    if(index) setphotoIndex(index);
    setshowGallery(true);
  }
  return (
    <div className="bannerSlider">
      <div className="row no-gutters">
        <div className="fullImages col">
          <div
            className="imagesGroup customShadow"
            style={{
              backgroundImage: `url(${hotelImages[hotelImages.length - 1]})`,
            }}
            onClick={()=>toggleShowGallery(hotelImages.length - 1)}
          ></div>
        </div>
        <div className="thumbnail row no-gutters desktopViewDisplayNone">
          <ImageSlider hotelImages={hotelImages} toggleShowGallery={toggleShowGallery}/>
        </div>
        <div className="content col">
          <MapView
            className="customShadow mapWrap mobileViewDisplayNone"
            button={true}
          />
          <div className="infoBox">
            <HotelPriceSection
              totalPrice={totalPrice}
              nightPrice={nightPrice}
              priceDetails={priceDetails}
              savingPrice={savingPrice}
              isDetailPage={isDetailPage}
            />
          </div>
        </div>
      </div>
      <div className="thumbnail row no-gutters mobileViewDisplayNone">
        <ImageSlider hotelImages={hotelImages} toggleShowGallery={toggleShowGallery}/>
        {hotelImages.length > 5 && (
          <ThumbCount count={hotelImages.length - 5} toggleShowGallery={toggleShowGallery}/>
        )}
      </div>
      <div className="SliderContent">
        <HotelInfo
          name={name}
          starImgs={starImgs}
          contactNo={contactNo}
          address={address}
          checkOut={checkOut}
          checkIn={checkIn}
          themes={themes}
        />
      </div>
      {showGallery && (
          <Lightbox
            mainSrc={hotelImages[photoIndex]}
            nextSrc={hotelImages[(photoIndex + 1) % hotelImages.length]}
            prevSrc={hotelImages[(photoIndex + hotelImages.length - 1) % hotelImages.length]}
            onCloseRequest={() => setshowGallery(false)}
            onMovePrevRequest={() =>setphotoIndex((photoIndex + hotelImages.length - 1) % hotelImages.length)}
            onMoveNextRequest={() => setphotoIndex((photoIndex + 1) % hotelImages.length)}
          />
        )}
    </div>
  );
}

export default HotelDetailCard;
