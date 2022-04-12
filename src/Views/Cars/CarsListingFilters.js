import React, { useState } from "react";
import CheckBoxFilter from "../../Component/Filters/CheckBoxFilter";
import SortBy from "../../Component/Filters/SortBy";
import Button from "../../Component/FormComponent/Button";
import {
  carCompaniesOptions,
  carFeaturesOptions,
  flightSortOptions,
  vehicleTypeOptions,
} from "../../Data/filterMockData";

function CarsListingFilters() {
  const [showMobileFilter, setshowMobileFilter] = useState(false);

  return (
    <>
      <Button
        onClick={() => setshowMobileFilter(true)}
        className="mobileFilterBtn mobileShow"
      >
        <i className="fa fa-sliders" /> Filter &amp; Srting
      </Button>
      <div
        className={`mobileSortFilter mobilePopup ${
          showMobileFilter ? "d-block" : ""
        }`}
      >
        <div className="mobileShow">
          <Button className={`clearFilter ${showMobileFilter ? "d-none" : ""}`}>
            Clear
          </Button>
          <Button
            className="closePopup closePopup2"
            onClick={() => setshowMobileFilter(false)}
          >
            <span className="icon-close" />
          </Button>
          <h4 className="mobilePopTitle">Sort by</h4>
          <div className="applyBtnMobile">
            <Button className="btn">Apply</Button>
          </div>
        </div>
        <div className="sortFilter">
          <h4 className="mobilePopTitle filterTitle mobileShow">Filter by</h4>

          {/* Vehicle Types filter dropdown */}
          <CheckBoxFilter
            label="Vehicle Type"
            filterOptions={vehicleTypeOptions}
          />

          {/* Car Companies filter dropdown */}
          <CheckBoxFilter
            label="Car Companies"
            filterOptions={carCompaniesOptions}
          />

          {/* Car features filter dropdown */}
          <CheckBoxFilter
            label="Car Features"
            filterOptions={carFeaturesOptions}
          />

          {/* Short By filter */}
          <SortBy label="Sort by" sortOptions={flightSortOptions} />
        </div>
      </div>
    </>
  );
}

export default CarsListingFilters;
