import React from "react";

function HotelDetailsTabs({}) {
  return (
    <ul className="list-unstyled d-flex m-0">
      <li className="active">
        <a href="#overview" className="scroll-section">
          Overview
        </a>
      </li>
      <li>
        <a href="#rooms" className="scroll-section">
          Rooms
        </a>
      </li>
      <li>
        <a href="#amenities" className="scroll-section">
          Amenities
        </a>
      </li>
      <li>
        <a href="#property-details" className="scroll-section">
          Property Details
        </a>
      </li>
      <li>
        <a href="#reviews" className="scroll-section">
          Reviews
        </a>
      </li>
    </ul>
  );
}

export default HotelDetailsTabs;
