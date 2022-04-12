/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { Formik } from "formik";
import PrimaryContactInformation from "../../Component/PrimaryContactInformation";
import BillingDetails from "../../Component/BillingDetails";
import HeaderNavbar from "../../Component/HeaderNavbar";
import creaditCardImage from "../../Assets/img/credit-card.png";
import logo from "../../Assets/img/logo.png";
import plusImg from "../../Assets/img/plus-img.png";
import FooterWithMediaIcon from "../../Component/FooterWithMediaIcon";
import lockImage from "../../Assets/img/lock.svg";
import TermsCheckbox from "../../Component/TermsCheckbox";
import { PremiumCheckoutValidation } from "../../Component/Validation/PremiumCheckoiutValidaion";

function MembershipPremiumPlusCheckout() {
  // settting state for chcekbox to get promo code input
  const [checkedBox, setCheckedbox] = useState(false);
  // features open and hide in planInfo
  const [featureDropdown, setFeatureDropdown] = useState(false);

  // handling state onChange function to get promo code input
  const handleCheckbox = () => {
    setCheckedbox(!checkedBox);
  };

  // function for handling dropdown feature
  const handleDropdown = () => {
    setFeatureDropdown(!featureDropdown);
  };

  // form intialValues
  const initialValues = {
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
    terms: false,
  };

  // Title options list
  const optionsTitle = [
    { value: "Title2", label: "Title2" },
    { value: "Title3", label: "Title3" },
  ];

  // Nationality options list
  const optionsNationality = [
    { value: "country2", label: "Country2" },
    { value: "country3", label: "Country3" },
  ];

  // State/Province/Region options list
  const optionsState = [
    { value: "state2", label: "State2" },
    { value: "state3", label: "State3" },
  ];

  // Plan Info arrayList
  const planInfoList = [
    "Credit/Debit Card Required*",
    "Unlimited Platform Access",
    "Savings of up to 65% and more",
    "Access to 1.5 million Hotels and Resorts",
    "Access to 1.5 million Vacation Homes",
    "Access to Rental Cars and upcoming Chauffeur Service.",
    "Access to Flight Inventory of all Global Carriers and 140 Low Cost Carriers",
    <>
      Access to Member Referral Rewards Program
      <br /> • $25 for each Premium Member
      <br /> • $50 for each Premium Plus Member
    </>,
  ];

  // handleCustomChange to restrict aplphabet enter
  const numberCustomChange = (formikProps, field, value) => {
    if (field === "phoneNumber" || field === "cardNumber" || field === "cvv") {
      const temp = Number(value);
      if (temp || value === "") {
        formikProps.setFieldValue(field, value);
      }
    }
  };

  // hadndleCustomChange function for select option
  const handleCustomChange = (formikProps, field, value) => {
    formikProps.setFieldValue(field, value);
  };

  // handleSubmit function
  const handleSubmit = (value, formikProps) => {
    formikProps.resetForm();
    console.log(value);
  };

  const renderForm = (formikProps) => {
    const { values, errors, touched, handleSubmit, handleBlur, handleChange } =
      formikProps;

    return (
      <form onSubmit={handleSubmit}>
        {/* Primary Contact Information */}
        <PrimaryContactInformation
          // onchange and onblur for common

          formikProps={formikProps}
          handleCustomChange={handleCustomChange}
          numberCustomChange={numberCustomChange}
          // Title
          title="title"
          titleLabel="Title"
          titleOptions={optionsTitle}
          titlePlaceholder="Title"
          // First Name
          firstName="firstName"
          firstNameLabel="First Name"
          firstNamePlaceholder="Walter"
          // Last Name
          lastName="lastName"
          lastNameLabel="Last Name"
          lastNamePlaceholder="White"
          // Email
          email="email"
          emailLabel="Email"
          emailPlaceholder="Email"
          // Phone Number
          phoneNumber="phoneNumber"
          phoneNumberLabel="Phone Number"
          // Nationality
          nationality="nationality"
          nationalityLabel="Nationality"
          nationalityPlaceholder="Select Country"
          nationalityOptions={optionsNationality}
          // Addressone
          addressOne="addressOne"
          addressOneLabel="Address Line 1"
          addressOnePlaceholder="Address Line 1"
          // AddressTwo
          addressTwo="addressTwo"
          addressTwoLabel="Address Line 2"
          addressTwoPlaceholder="Address Line 2"
          // city
          city="city"
          cityLabel="City"
          cityPlaceholder="City"
          // state
          state="state"
          stateLabel="State/Province/Region"
          statePlaceholder="Select State"
          stateOptions={optionsState}
          // zipcode
          zipCode="zipCode"
          zipCodeLabel="ZIP/Postal Code"
          zipCodePlaceholder="ZIP/Postal"
          // checkbox
          terms="terms"
          checkedBoxValue={checkedBox}
          handleCheckbox={handleCheckbox}
          // promoCode
          promoCode="promoCode"
          promoCodeLabel="Promo / Giftcard Code"
          promoCodePlaceholder="Enter Code"
        />
        <div className="card2 billingInfo">
          {/* Billing Details */}
          <BillingDetails
            formikProps={formikProps}
            numberCustomChange={numberCustomChange}
            billingDetails={
              <div className="sectionTitle">
                <h2>Billing Details</h2>
              </div>
            }
            // Card Holder Name
            cardHolderName="cardHolderName"
            cardHolderNameLabel="Card Holder Name"
            cardHolderNamePlaceholder="Card Holder Name"
            // Card Number
            cardHeadingLabel="Enter Card Details"
            cardNumber="cardNumber"
            cardImage={creaditCardImage}
            cardNumberPlaceholder="Card Number"
            // mmyy
            mmyy="mmyy"
            mmyyPlaceholder="MM/YY"
            // cvv
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
                  <strong>$24.95</strong>/ per month
                </h4>
                <h4>($299.40 total at checkout)</h4>
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
    <div className="siteBg checkoutPageWrap MembershipCheckoutPageWrap">
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
                      initialValues={initialValues}
                      onSubmit={handleSubmit}
                      validationSchema={PremiumCheckoutValidation}
                    >
                      {renderForm}
                    </Formik>
                  </div>
                  <div className="col rightContent">
                    <div className="infoBox">
                      <div className="membership-content">
                        <img src={logo} alt="" />
                        <div className="planName">Premium Plus Membership</div>
                        <p>(12 Month)</p>
                        <div className="plus-img">
                          <img src={plusImg} alt="plus" />
                        </div>
                      </div>
                    </div>
                    <div
                      className={
                        !featureDropdown ? "features" : "features open"
                      }
                    >
                      <ul>
                        {planInfoList.map((list) => {
                          return <li key={list}>{list}</li>;
                        })}
                      </ul>
                      <p className="mobileViewDisplayNone">
                        * Required for Sign Up and Bookings
                      </p>
                      <div className="priceInfo">
                        <h6>
                          <strong>$24.95</strong>/ per month
                        </h6>
                        <h6>($299.40 total at checkout)</h6>
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
                      <i className="fa fa-angle-down" />
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

export default MembershipPremiumPlusCheckout;
