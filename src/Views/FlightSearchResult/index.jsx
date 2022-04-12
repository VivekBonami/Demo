import React from "react";
import FlightListingCard from "../../Component/FlightListing/FlightListingCard";
import Pagination from "../../Component/Pagiantion/Pagination";
import { flightsMockData } from "../../Data/flightMockData";
import FlightListingFilters from "./FlightListingFilters";

function FlightSearchResult() {
  return (
    <div className="siteBg listingPage listingFlight">
      <div className="pageInternalScroll">
        <div className="container">
          <div className="listingNote mobileHide">
            25 flights found from Los Angeles Intl Airport (LAX) to Moscow
            Sheremetyevo (SVO)
          </div>
          <FlightListingFilters />
          {flightsMockData &&
            flightsMockData.map((item, index) => (
              <FlightListingCard {...item} key={index} />
            ))}
          <div className="paginationWrapper">
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlightSearchResult;
