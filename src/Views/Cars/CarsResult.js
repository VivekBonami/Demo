import React from "react";
import CarListingCard from "../../Component/Cars/CarListingCard";

function CarsResult({ carsData }) {
  return (
    <div className="BSrow">
      {carsData &&
        carsData.map((item, index) => <CarListingCard {...item} key={index} />)}
    </div>
  );
}

export default CarsResult;
