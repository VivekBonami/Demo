import React from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import { FreemiumSignUpValidation } from "../../Component/Validation/FreemiumSignUpValidation";
import LogoWhite from "../../Component/FormComponent/LogoWhite";
import Logo from "../../Assets/img/logo.png";
import Button from "../../Component/FormComponent/Button";
import FooterWithMediaIcon from "../../Component/FooterWithMediaIcon";
import IconInputField from "../../Component/FormComponent/IconInputField";
import userIcon from "../../Assets/img/signup/user-icon.svg";
import emailIcon from "../../Assets/img/signup/email.svg";
import lockIcon from "../../Assets/img/signup/lock.svg";
import Checkbox from "../../Component/FormComponent/Checkbox";

function FreemiumSignup() {
  // form inital Values
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  // handlesubmit function and reset form onSubmit
  const handleSubmit = (value, formikProps) => {
    formikProps.resetForm();
    console.log(value);
  };

  //Array list one

  const arrayListOne = [
    "Gimmicks",
    "Advertisement",
    "Buying Pressure",
    "Risk",
    "Obligations",
    "Time-Limits",
    "Up-Sales",
    "Commissions",
    "Booking Fees",
  ];

  // Array list two

  const arrayListTwo = [
    <>
      • <strong>No Time Limit</strong> - Freemium Membership
    </>,
    <>
      {" "}
      • Savings of <strong>up to 25%</strong> over other Online Travel Sites
    </>,
    <>
      • Access to <strong>1.5 Million Hotels and Resorts</strong> only
    </>,
    <>
      • Preview of Premium <strong>Member Pricing</strong> and{" "}
      <strong>Savings</strong>
    </>,
    <>
      • <strong>No Credit/Debit Card</strong> required at Sign-up
    </>,
  ];

  //form with different inputfield
  const renderForm = (formikProps) => {
    const { values, errors, touched, handleSubmit, handleBlur, handleChange } =
      formikProps;

    return (
      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <IconInputField
            name="firstName"
            type="text"
            placeholder="First Name"
            src={userIcon}
            value={values.firstName}
            touched={touched.firstName}
            errors={errors.firstName}
            onBlur={handleBlur}
            onChange={handleChange}
            inputClassName="form-control"
          />
          <IconInputField
            name="lastName"
            type="text"
            placeholder="Last Name"
            src={userIcon}
            value={values.lastName}
            touched={touched.lastName}
            errors={errors.lastName}
            onBlur={handleBlur}
            onChange={handleChange}
            inputClassName="form-control"
          />
          <IconInputField
            name="email"
            type="email"
            placeholder="Your Email"
            src={emailIcon}
            value={values.email}
            touched={touched.email}
            errors={errors.email}
            onBlur={handleBlur}
            onChange={handleChange}
            inputClassName="form-control"
          />
          <IconInputField
            name="password"
            type="password"
            placeholder="Passoword"
            src={lockIcon}
            value={values.password}
            errors={errors.password}
            touched={touched.password}
            onBlur={handleBlur}
            onChange={handleChange}
            inputClassName="form-control"
          />
          <IconInputField
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            src={lockIcon}
            value={values.confirmPassword}
            touched={touched.confirmPassword}
            errors={errors.confirmPassword}
            onBlur={handleBlur}
            onChange={handleChange}
            inputClassName="form-control"
          />

          {/* Checkbox input */}
          <div className="checkBoxContent">
            <Checkbox name="terms" value="checked" onChange={handleChange} />
            <p>
              I agree to the <Link to="/home">Terms and Conditions</Link>
            </p>
          </div>
          <div className="buttonWrap">
            <div className="content">
              <h4>Free</h4>
              <h6>(no time limit)</h6>
            </div>

            {/* Form Submit button  */}

            <div className="button">
              <Button text="I'm In" type="submit" className="btn" />

              {/* <Link to="/landing.html" className="btn">
                I’m In
              </Link> */}
            </div>
          </div>
        </form>
      </div>
    );
  };

  return (
    <div className="siteBg freemiumsignupPageWrap">
      <div className="pageWrap pageWrapInner">
        <section className="mainContent">
          <div className="pageInternalScroll">
            <div className="container">
              <div className="signupWrapper">
                <div className="page-logo">
                  <Link to="/home" className="logoWrap">
                    <LogoWhite src={Logo} />
                  </Link>
                </div>
                <div className="row">
                  <div className="col left-content">
                    <div className="left-content-wrapper">
                      <h1>Welcome,</h1>
                      <h2>
                        to a <strong>Unique</strong> and <strong>New</strong>{" "}
                        form of <strong>Travel.</strong> The First Platform to
                        offer <strong>True Wholesale Travel Prices.</strong>
                      </h2>
                      <div className="way-wrapper">
                        <h5>
                          We say <strong>NO</strong> to:
                        </h5>
                        {/* Array list one getting iterated here */}
                        <ul>
                          {arrayListOne.map((listItem) => {
                            return (
                              <li>
                                <h6>{listItem}</h6>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                      <h3>
                        See for Yourself how much Tripello can{" "}
                        <strong>save you,</strong> so you can enjoy More
                        Freedom, More Choices and{" "}
                        <strong>Better Experiences.</strong>
                      </h3>
                      <h3>
                        Sign-up <strong>today</strong> and{" "}
                        <strong>get access</strong> to:
                      </h3>
                      <div className="list-content">
                        {/* Array list two getting iterated here */}

                        <ul>
                          {arrayListTwo.map((listItem) => {
                            return <li>{listItem}</li>;
                          })}
                        </ul>
                      </div>
                      <div className="freemium-getstarted-btn">
                        <Button
                          className="btn"
                          type="button"
                          text="Get Started"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col right-content">
                    <div className="right-box-content">
                      <div className="infoBox">
                        <div className="membership-content">
                          <LogoWhite src={Logo} />
                          <div className="planName">Freemium Membership</div>
                        </div>
                      </div>
                      <Formik
                        onSubmit={handleSubmit}
                        validationSchema={FreemiumSignUpValidation}
                        initialValues={initialValues}
                      >
                        {renderForm}
                      </Formik>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="skew-background"></div>
          </div>
        </section>
        {/* Footer Section */}
        <FooterWithMediaIcon />
      </div>
    </div>
  );
}

export default FreemiumSignup;
