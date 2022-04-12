import React from "react";
import { Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import HeaderNavbar from "../../Component/HeaderNavbar";
import DriverInfo from "./DriverInfo";
import YesNo from "./YesNo";
import SelectFieldOption from "../../Component/FormComponent/SelectFieldOption";
import CarInputField from "./CarInputField";
import { infoList } from "../../main/CustomConstants/CarCheckoutInfoList";
import CarDetailsInfo from "./CarDetailsInfo";
import MobileHide from "./MobileHide";
import carCompany from "../../Assets/img/carCompany.png";
import carImage from "../../Assets/img/car5.png";
import FooterWtihMediaIcon from "../../Component/FooterWithMediaIcon";
import { CarCheckoutValidaion } from "../../Component/Validation/CarCheckoutValidation";
import StartToEnd from "./StartToEnd";

function CarsCheckout() {
  //for navigation to next page on onSubmit
  let navigate = useNavigate();
  const pathChange = () => {
    let path = "/home";
    navigate(path);
  };

  //initial Values
  const initialValues = {
    title: "",
    firstName: "Walter",
    lastName: "White",
    email: "",
    phoneNumber: "",
    nationality: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    airline: "",
    flightNumber: "",
    checkBox1: "",
    checkBox2: "",
    yesNo: "",
  };

  //titleOption

  const titleOption = [
    { value: "title1", label: "Title" },
    { value: "title2", label: "Mr." },
    { value: "title3", label: "Mrs." },
    { value: "title4", label: "Ms." },
    { value: "title5", label: "Neutral" },
  ];

  //nationality option
  const nationalityOption = [
    { value: 0, label: "Nationality" },
    { value: 1, label: "country 1" },
    { value: 2, label: "country 2" },
  ];

  //countryOption
  const countryOption = [
    { value: 0, label: "Country" },
    { value: 1, label: "country 1" },
    { value: 2, label: "country 2" },
  ];

  //airline option
  const airlineOption = [
    { value: 0, label: "Airline" },
    { value: 1, label: "Airline 1" },
    { value: 2, label: "Airline 2" },
  ];

  //nubmberCustomChange
  const nubmberCustomChange = (formikProps, field, value) => {
    if (field === "phoneNumber") {
      let temp = Number(value);
      if (temp || value === "") {
        formikProps.setFieldValue(field, value);
      }
    }
  };

  //handleCustomChange
  const handleCustomChange = (formikProps, field, value) => {
    formikProps.setFieldValue(field, value);
  };

  //handlesubmit
  const handleSubmit = (value, formikProps) => {
    formikProps.resetForm();
    console.log("clicked");
    console.log(value);
  };

  //list of damage protection
  const arrayList = [
    "Pays up to $75,000 with $0 deductible",
    "Receive primary coverage without having to go through your insurance",
    "Covers damage to rental due to collision, theft, vandalism, fire or hail",
    "Cancel for free up until your requested pick-up time",
  ];

  const renderForm = (formikProps) => {
    const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
      formikProps;

    return (
      <form onSubmit={handleSubmit}>
        <DriverInfo
          formikProps={formikProps}
          handleCustomChange={handleCustomChange}
          //title
          title="title"
          titleOption={titleOption}
          //firstName
          firstName="firstName"
          //lastname
          lastName="lastName"
          //email
          email="email"
          //phoneNubmer
          phoneNumber="phoneNumber"
          nubmberCustomChange={nubmberCustomChange}
          //nationality
          nationality="nationality"
          nationalityOption={nationalityOption}
          //Address Line1
          addressLine1="addressLine1"
          //Address Line2
          addressLine2="addressLine2"
          //city
          city="city"
          //state
          state="state"
          //ZipCode
          zipCode="zipCode"
          //country
          country="country"
          countryOption={countryOption}
          //checkbox
          checkBox1="checkBox1"
          checkBox2="checkBox2"
        />

        <div className="card2 collision-card">
          <h4 className="boxTitle sheildTitle">
            <span className="icon-verified-user"></span> Add Collision Damage
            Protection
          </h4>
          <div className="listStyleBg">
            {/* getting damage protection list */}

            <ul>
              {arrayList.map((list, index) => {
                return (
                  <li key={index}>
                    <span className="icon-tick2"></span>
                    {list}
                  </li>
                );
              })}
            </ul>
          </div>
          <YesNo
            formikProps={formikProps}
            handleCustomChange={handleCustomChange}
            yesNo="yesNo"
          />
          <div className="borderTopDivider">
            <span className="icon-info"></span> COVID-19: Coverage Limitations
            And Special Accommodations
          </div>
          <div className="copyStyle copyMB">
            Recommended/offered/sold by Allianz Global Assistance. Underwriter
            by Jefferson Insurance Company. Plan incl. insurance & assistance
            services. Terms and exclusions (incl. for pre-existing conditions)
            apply. <Link to="/home">Plan & Pricing details, disclosures.</Link>
          </div>
        </div>
        <div className="card2 flight-info-card">
          <h4 className="boxTitle">Flight Information (optional)</h4>

          {/* Flight information details */}

          <div className="col3 cardDetailsBox flightInfoOption">
            <SelectFieldOption
              name="airline"
              label2="Select Airline"
              placeholder="Ariline"
              value={values.airline}
              error={errors.airline}
              touched={touched.airline}
              onChange={handleCustomChange}
              onBlur={handleBlur}
              className="col selectStyle"
              options={airlineOption}
              formikProps={formikProps}
            />
            <CarInputField
              name="flightNumber"
              type="text"
              label="Flight Number"
              placeholder="Flight Number"
              value={values.flightNumber}
              error={errors.flightNumber}
              touched={touched.flightNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              className="cardDetails"
            />
          </div>
        </div>
        <div className="card2 freeCancellationBox dflex mobileHide">
          <div className="cancellationLabel">
            <span className="icon-tick"></span> Free Cancellation
          </div>
          <button onSubmit={pathChange} className="btn" type="submit">
            Reserve Now
          </button>
        </div>
      </form>
    );
  };

  return (
    <div className="siteBg checkOutPage carcheckOutPage">
      <div className="pageWrap pageWrapIxnner">
        <div className="fixedHeader">
          <HeaderNavbar />
        </div>
        <section className="mainContent carCheckout">
          <div className="pageInternalScroll">
            <div className="container dflex pageInternalScrollTopPadding">
              <div className="mainWrap">
                <Formik
                  onSubmit={handleSubmit}
                  initialValues={initialValues}
                  validationSchema={CarCheckoutValidaion}
                >
                  {renderForm}
                </Formik>

                <div className="card2 impInfoBox mobileHide">
                  {/* getting important information list */}

                  <h4 className="boxTitle">Important Information</h4>
                  {infoList.map((list) => {
                    return (
                      <React.Fragment key={list.title}>
                        <h6>{list.title}</h6>
                        <p>{list.content}</p>
                        <p>{list.content2 && list.content2}</p>
                        <p>{list.content3 && list.content3}</p>
                        <p>{list.content4 && list.content4}</p>
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>

              {/* Right side content */}

              <div className="sideBar carCheckoutSidebar">
                <div className="card2">
                  <div className="cardImg">
                    <div className="dflex carImgInfo">
                      <img src={carCompany} alt="" />
                      <span className="imageNote">
                        Actual car may vary from the one shown
                      </span>
                    </div>
                    <div className="carImgWrap">
                      <img src={carImage} alt="" />
                    </div>
                  </div>
                  <div className="sideBarInSpace">
                    <h4 className="contentTitle">Luxury Car</h4>
                    <h5 className="contentSubTitle">
                      Mercedes C300 or similar*
                    </h5>
                    <div className="mobileHide">
                      <CarDetailsInfo
                        iconName="icon-group font12"
                        detail1="People:"
                        detail2="5 people"
                        spanClassName="mobileHide"
                      />
                      <div className="dflex mb-5">
                        <span className="font14 lightText">
                          <span className="icon-work font12">
                            <span className="path1"></span>
                          </span>{" "}
                          <span className="mobileHide">Suitcases:</span>
                        </span>
                        <span className="font14 darkText">2 suitcases</span>
                      </div>
                      <CarDetailsInfo
                        iconName="icon-transmission font12"
                        detail1="Transmission:"
                        detail2="Automatic"
                        spanClassName="mobileHide"
                      />
                      <CarDetailsInfo
                        iconName="icon-icon3 font12"
                        detail1={"Air Conditioning:"}
                        detail2={"AC Included"}
                        spanClassName="mobileHide"
                      />
                      <CarDetailsInfo
                        iconName={"icon-speedometer font12"}
                        detail1={"Mileage:"}
                        detail2={"Unlimited"}
                        spanClassName="mobileHide"
                      />
                    </div>
                    <div className="startToEnd">
                      <StartToEnd
                        className={"startLocation"}
                        dateNTime={"11/12/2021 10:00"}
                        content={
                          <>
                            {" "}
                            South Los Robles Avenue, Pasadena,
                            <br class="mobileShow" />
                            California, United States 91101,
                            <br class="mobileShow" />
                            Pasadena, US
                          </>
                        }
                      />
                      <StartToEnd
                        className={"endLocation"}
                        dateNTime={"11/16/2021 10:00"}
                        content="Same as Pick-up"
                      />
                    </div>
                    <div className="mobileCarBtmBox mobileShow">
                      <div className="dflex">
                        <div>
                          <div className="totalAmtMobile">$489.76</div>
                          <div className="cancellationLabel d-flex align-items-center">
                            <span className="icon-tick"></span>
                            <span>Free Cancellation</span>
                          </div>
                        </div>
                        <div>
                          <Link to="/car-confirmation" className="btn">
                            Reserve Now
                          </Link>
                        </div>
                      </div>
                      <p className="boxLightText">
                        This is an estimate of your rental car reservation
                        total. Prices may vary depending on special requests and
                        items purchased at the counter.
                      </p>
                    </div>
                  </div>

                  <div className="shadowBox mobileHide">
                    <MobileHide detail={"Base Fare (4 day):"} price="$440.00" />
                    <MobileHide detail={"Taxes & Fees:"} price="$49.76" />
                    <MobileHide
                      detail={"Amount Due at Pick-up:"}
                      price="$489.76"
                      className={"totalValueBox"}
                    />
                    <p className="centerAlign font12 boxLightText">
                      This is an estimate of your rental car reservation total.
                      Prices may vary depending on special requests and items
                      purchased at the counter.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right side content end here */}
            </div>
          </div>
        </section>
        <FooterWtihMediaIcon
          className={"white-icon"}
          iconClassName={"icon-white"}
        />
      </div>
    </div>
  );
}

export default CarsCheckout;
