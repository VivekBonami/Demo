import React, { useState } from "react";
import { Formik } from "formik";
import HeaderNavbar from "../../Component/HeaderNavbar";
import PrimaryContactInformation from "../../Component/PrimaryContactInformation";
import LoginInput from "../../Component/LoginInput";
import EmailInput from "../../Component/EmailInput";
import BillingDetails from "../../Component/BillingDetails";
import creaditCardImage from "../../Assets/img/credit-card.png";
import TermsCheckbox from "../../Component/TermsCheckbox";
import lockImage from "../../Assets/img/lock.svg";
import logo from "../../Assets/img/logo.png";
import FooterWithMediaIcon from "../../Component/FooterWithMediaIcon";
import { AffiliateMembershipValidation } from "../../Component/Validation/AffiliateMembershipValidation";

function AffiliateUpgradeMembership() {
  //features open and hide in planInfo
  const [featureDropdown, setFeatureDropdown] = useState(false);

  //function for handling dropdown feature
  const handleDropdown = () => {
    setFeatureDropdown(!featureDropdown);
  };

  //Initial Vlaues for input fields
  const intialValues = {
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    nationality: "",
    addressOne: "",
    addressTwo: "",
    city: "",
    state: "",
    zipCode: "",
    promoCode: "",
    cardHolderName: "",
    cardNumber: "",
    mmyy: "",
    cvv: "",
    password: "",
    confirmPassword: "",
    confirmEmail: "",
    memberNumber: "",
    terms: false,
  };

  //Title options list
  const optionsTitle = [
    { value: "Title2", label: "Title2" },
    { value: "Title3", label: "Title3" },
  ];

  // Nationality options list
  const optionsNationality = [
    { value: "country2", label: "USA" },
    { value: "country3", label: "India" },
  ];

  // State/Province/Region options list
  const optionsState = [
    { value: "state2", label: "state2" },
    { value: "state3", label: "state3" },
  ];

  //handle numberCustomChange function
  const numberCustomChange = (formikProps, field, value) => {
    if (
      field === "phoneNumber" ||
      field === "cardNumber" ||
      field === "mmyy" ||
      field === "cvv"
    ) {
      const temp = Number(value);
      if (temp || value === "") {
        formikProps.setFieldValue(field, value);
      }
    }
  };

  //handleCustomChagne funciton
  const handleCustomChange = (formikProps, field, value) => {
    formikProps.setFieldValue(field, value);
  };

  //handleSubmit furnciton
  const handleSubmit = (value, formikProps) => {
    formikProps.resetForm();
    console.log(value);
  };

  //info List
  const infoList = [
    "Access to Tripello Affilate Program with Unique and Comprehensive Compensation Plan",
    "Access to Personal Management Dashboard",
    "Access to Personal Invitation Links and QR Codes for Member and Affiliate Invites",
    "Access to Marketing Center with Social Media optimized Collateral and Tips and Tricks for Campaigns",
    "Access to Personal Wallet for tracking of Earnings and Payouts",
  ];

  //form being rendered here
  const renderForm = (formikProps) => {
    const { values, errors, touched, handleSubmit, handleBlur } = formikProps;

    return (
      <form onSubmit={handleSubmit}>
        {/* primary contact information */}
        <PrimaryContactInformation
          formikProps={formikProps}
          handleCustomChange={handleCustomChange}
          numberCustomChange={numberCustomChange}
          //Title
          title="title"
          titleLabel="Title"
          titleOptions={optionsTitle}
          titlePlaceholder="Title"
          // First Name
          firstName="firstName"
          firstNameLabel="First Name"
          firstNamePlaceholder="Walter"
          //Last Name
          lastName="lastName"
          lastNameLabel="Last Name"
          lastNamePlaceholder="White"
          //Email
          email="email"
          emailLabel="Email"
          emailPlaceholder="Email"
          //Phone Number
          phoneNumber="phoneNumber"
          phoneNumberLabel="Phone Number"
          //Nationality
          nationality="nationality"
          nationalityLabel="Nationality"
          nationalityPlaceholder="Select Country"
          nationalityOptions={optionsNationality}
          //Addressone
          addressOne="addressOne"
          addressOneLabel="Address Line 1"
          addressOnePlaceholder="Address Line 1"
          //AddressTwo
          addressTwo="addressTwo"
          addressTwoLabel="Address Line 2"
          addressTwoPlaceholder="Address Line 2"
          //city
          city="city"
          cityLabel="City"
          cityPlaceholder="City"
          //state
          state="state"
          stateLabel="State/Province/Region"
          statePlaceholder="Select State"
          stateOptions={optionsState}
          //zipcode
          zipCode="zipCode"
          zipCodeLabel="ZIP/Postal Code"
          zipCodePlaceholder="ZIP/Postal Code"
        />
        {/* login input field  */}
        <LoginInput
          formikProps={formikProps}
          //password
          password="password"
          passwordPlaceholder="Password"
          label="Password"
          //Confirm Password
          confirmPassword="confirmPassword"
          confirmPasswordPlaceholder="Confirm Password"
        />
        {/* email input field */}
        <EmailInput
          formikProps={formikProps}
          //Email
          email="email"
          emailLabel="Email"
          emailPlaceholder="Email"
          //Confirm Email
          confirmEmail="confirmEmail"
          confirmEmailPlaceholder="Confirm Email"
          confirmEmailLabel="Confirm Email Address"
        />
        <div className="card2 billingInfo">
          {/* billing details input field */}
          <BillingDetails
            formikProps={formikProps}
            numberCustomChange={numberCustomChange}
            //Tripello Member Number
            memberNumber="memberNumber"
            memberNumberLabel="Your Tripello Member Number"
            // Card Holder Name
            cardHolderName="cardHolderName"
            cardHolderNameLabel="Card Holder Name"
            cardHolderNamePlaceholder="Card Holder Name"
            // Card Number
            cardHeadingLabel="Enter Card Details"
            cardNumber="cardNumber"
            cardImage={creaditCardImage}
            cardNumberPlaceholder="Card Number"
            //mmyy
            mmyy="mmyy"
            mmyyPlaceholder="MM/YY"
            //cvv
            cvv="cvv"
            cvvPlaceholder="CVV"
          />
          <div className="d-flex checkBoxWrap">
            <TermsCheckbox
              name="terms"
              id="terms"
              value={values.terms}
              onChange={(e) => {
                handleCustomChange(formikProps, "terms", e.target.checked);
              }}
              onBlur={handleBlur}
            />
            <div className="buttonWrap">
              <div className="desktopViewDisplayNone">
                <h4>
                  <strong>$199.00</strong>/ First Year
                </h4>
                <h4>(Renews As Affiliate Membership)</h4>
              </div>
              <button
                disabled={!values.terms}
                className="btn"
                type="submit"
                id="sbumit-button"
              >
                <img src={lockImage} /> Pay Now
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  };

  return (
    <div className="siteBg checkoutPageWrap MembershipCheckoutPageWrap affiliateCheckoutPageWrap affiliateupgradeCheckoutPageWrap">
      <div className="pageWrap pageWrapInner">
        <div className="fixedHeader">
          <HeaderNavbar />
        </div>
        <section className="mainContent">
          <div className="pageInternalScroll">
            <div className="container">
              <div className="checkoutWrapper">
                <div className="row">
                  <div className="col leftContent">
                    <Formik
                      onSubmit={handleSubmit}
                      initialValues={intialValues}
                      validationSchema={AffiliateMembershipValidation}
                    >
                      {renderForm}
                    </Formik>
                  </div>
                  <div className="col rightContent">
                    <div className="infoBox">
                      <div className="membership-content">
                        <img src={logo} alt="" />
                        <div className="planName">
                          Upgrade to Affiliate Membership
                        </div>
                        <p>(12 Month)</p>
                      </div>
                    </div>
                    <div
                      className={
                        !featureDropdown ? "features" : "features open"
                      }
                    >
                      {/* Plan Info list */}
                      <ul>
                        {infoList.map((list) => {
                          return <li key={list}>{list}</li>;
                        })}
                      </ul>
                      <div className="priceInfo">
                        <h6>
                          <strong>$199.00</strong>/ First Year
                        </h6>
                        <h6>(Renews As Affiliate Membership)</h6>
                      </div>
                    </div>
                    <button
                      onClick={handleDropdown}
                      className={
                        !featureDropdown
                          ? "desktopViewDisplayNone toggleButtons"
                          : "desktopViewDisplayNone toggleButtons open"
                      }
                    >
                      <span className="show-features">Show Features</span>
                      <span className="hide-features">Hide Features</span>
                      <i className="fa fa-angle-down"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FooterWithMediaIcon
          className="white-icon"
          iconClassName="icon-white"
        />
      </div>
    </div>
  );
}

export default AffiliateUpgradeMembership;
