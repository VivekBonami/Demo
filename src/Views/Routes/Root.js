/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../LandingPage";
import Password from "../ForgetPassword/Password";
import ResetPassword from "../ForgetPassword/ResetPassword";
import Login from "../Login/Login";
import Home from "../../Views/Home";
// import PremiumPlusSignUp from "../PremiumPlusSignUp";
// import FreemiumSignUp from "../FreemiumSignUp";
// import MembershipPremiumCheckout from "../MembershipPremiumCheckout";
// import MembershipPremiumPlusCheckout from "../MembershipPremiumPlusCheckout";

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
        {/* <Route path="/premium-plus-signup" element={<PremiumPlusSignUp />} /> */}
        {/* <Route path="/freemium-signup" element={<FreemiumSignUp />} /> */}
        {/* <Route
          path="/membership-premium-checkout"
          element={<MembershipPremiumCheckout />}
        />
        {/* <Route
          path="/membership-premium-plus-checkout"
          element={<MembershipPremiumPlusCheckout />}
        /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Root;
