import React from "react";

function ImageSlider({ hotelImages, toggleShowGallery }) {
  return (
    <>
      {hotelImages &&
        hotelImages.map((ele, index) => {
            if(index < 5){
                return (
                    <div className="images col" key={index}>
                      <img src={ele} alt="hotel-detail-image" className="w-100" onClick={() =>toggleShowGallery(index)}/>
                    </div>
                  );
            }
        })}
    </>
  );
}

export default ImageSlider;
