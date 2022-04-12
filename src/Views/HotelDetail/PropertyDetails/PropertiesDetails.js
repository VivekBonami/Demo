import React, { useState } from "react";
import InfoIcon from "../../../Assets/img/info.png";
import LocationIcon from "../../../Assets/img/location-gray.png";

function PropertiesDetails({ data }) {
  const [selectedTab, setselectedTab] = useState(0);
  return (
    <div id="property-details" className="propertyDetails">
      <div className="sectionTitle">
        <h2>Property Details</h2>
      </div>
      <div className="propertyDetailsTab">
        <ul className="list-unstyled d-flex">
          <li className={selectedTab === 0 ? 'active' : ''} onClick={() => setselectedTab(0)}>
            <img src={InfoIcon} alt="icon" />
            <p>About This Location</p>
          </li>
          <li className={selectedTab === 1 ? 'active' : ''} onClick={() => setselectedTab(1)}>
            <img src={LocationIcon} alt="icon" />
            <p>What’s Nearby</p>
          </li>
        </ul>
        {selectedTab === 0 && (
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: data }}
          ></div>
        )}
        {selectedTab === 1 && (
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: data }}
          ></div>
        )}
      </div>
    </div>
  );
}

export default PropertiesDetails;
