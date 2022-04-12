import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import Password from "./ForgetPassword/Password";
import ResetPassword from "./ForgetPassword/ResetPassword";
import Login from "./Login/Login";
import Home from "./MarketingWebsite/Home";
import PremiumPlusSignUp from "./PremiumPlusSignUp";
import HotelSearchResult from "./HotelSearchResult/SearchResult";
import HotelDetail from "./HotelDetail";
import FreemiumSignUp from "./MarketingWebsite/FreemiumSignUp";
import MembershipPremiumCheckout from "./MarketingWebsite/MembershipPremiumCheckout";
import MembershipPremiumPlusCheckout from "./MarketingWebsite/MembershipPremiumPlusCheckout";
import FlightSearchResult from "./FlightSearchResult";
import CarsCheckout from "./TravelWebappCar/CarsCheckout";
import CarsBookingConfimation from "./TravelWebappCar/CarsBookingConfimation";
import AffiliateLandingPage from "./AffiliateWebsite/AffiliateLandingPage";
import AffiliatePremiumMembership from "./AffiliateWebsite/AffiliatePremiumMembership";
import AffiliateUpgradeMembership from "./AffiliateWebsite/AffiliateUpgradeMembership";
import CarsListing from "./Cars/CarsListing";

function Root() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<CreateAccount />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<Password />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/premium-plus-signup" element={<PremiumPlusSignUp />} />
        <Route path="/hotel-search-result" element={<HotelSearchResult />} />
        <Route path="/freemium-signup" element={<FreemiumSignUp />} />
        <Route
          path="/membership-premium-checkout"
          element={<MembershipPremiumCheckout />}
        />
        <Route
          path="/membership-premium-plus-checkout"
          element={<MembershipPremiumPlusCheckout />}
        />
        <Route path="/detail-hotel" element={<HotelDetail />} />
        <Route path="/flight-search-result" element={<FlightSearchResult />} />
        <Route path="/cars-checkout" element={<CarsCheckout />} />
        <Route
          path="/cars-booking-confirmation"
          element={<CarsBookingConfimation />}
        />
        <Route
          path="/affiliate-landing-page"
          element={<AffiliateLandingPage />}
        />
        <Route
          path="/affiliate-premium-membership"
          element={<AffiliatePremiumMembership />}
        />
        <Route
          path="/affiliate-upgrade-membership"
          element={<AffiliateUpgradeMembership />}
        />
        <Route path="/cars-listing" element={<CarsListing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Root;
