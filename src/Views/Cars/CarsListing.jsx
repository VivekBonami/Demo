import React from "react";
import Pagination from "../../Component/Pagiantion/Pagination";
import { carsData } from "../../Data/CarsData";
import CarsListingFilters from "./CarsListingFilters";
import CarsResult from "./CarsResult";

function CarsListing() {
  return (
    <div className="siteBg listingPage listingCars">
      <div className="pageInternalScroll">
        <div className="container listing-margin-top">
          <div className="listingNote mobileHide">
            423 cars found in Los Angeles (and vicinity), CA, USA
          </div>
          <CarsListingFilters />
          <div className="carResult">
            <CarsResult carsData={carsData} />
          </div>
          <div className="paginationWrapper">
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarsListing;
