import React from "react";
import HotelDetails from "../../../Component/HotelCard/HotelDetails";
import HotelImageSection from "../../../Component/HotelCard/HotelImageSection";
import HotelPriceSection from "../../../Component/HotelCard/HotelPriceSection";

function SingleHotelCard({
  savings,
  image,
  name,
  rating,
  utilities,
  address,
  comparePrice,
  starImgs,
  utilitiesImg,
  totalPrice,
  nightPrice,
  priceDetails,
  savingPrice,
  isMember,
}) {
  return (
    <div className="card2">
      <div className="row no-gutters">
        <HotelImageSection savings={savings} image={image} />
        <div className="cardContent col">
          <HotelDetails
            name={name}
            rating={rating}
            utilities={utilities}
            address={address}
            starImgs={starImgs}
            utilitiesImg={utilitiesImg}
            comparePrice={comparePrice}
          />
        </div>
        <div className="infoBox col col-width">
          <HotelPriceSection
            totalPrice={totalPrice}
            nightPrice={nightPrice}
            priceDetails={priceDetails}
            savingPrice={savingPrice}
            isMember={isMember}
          />
        </div>
      </div>
    </div>
  );
}

export default SingleHotelCard;
