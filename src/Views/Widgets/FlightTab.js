import React,{useState,useEffect} from "react";
import { Formik } from "formik";
import moment from "moment";
import Button from "../../Component/FormComponent/Button";
import SelectComponent from "../../Component/Select/SelectComponent";
import AddPassengerForm from "../../Component/Forms/AddPassengerForm";
import MultiCityForm from "../../Component/Forms/MultiCityForm";

export default function FlightTab() {
  const [isMobile, setMobile] = useState(false);
   useEffect(() => {
    if (window.innerWidth < 768) {
      setMobile(true);
    }
  }, []);

  const multiCityObj = {
    flyingIn: "",
    flyingOut: "",
    departing: moment(),
    returning: moment().add(1, "days"),
  };
  const initialValues = {
    persons: { passengers: 1, children: 0, infants: 0 },
    flightClass: { value: "economy", label: "Economy" },
    isRoundTrip: true,
    isMultiCity: false,
    isOneWay: false,
    isPersonRecord: false,
    isFlightClass: false,
    showPassengerForm: false,
    multiCity: [{ ...multiCityObj }],
  };
  const roundtripClick = (formikProps) => {
    formikProps.setFieldValue("isRoundTrip", true);
    formikProps.setFieldValue("isMultiCity", false);
    formikProps.setFieldValue("isOneWay", false);
  };
  const oneWayClick = (formikProps) => {
    formikProps.setFieldValue("isOneWay", true);
    formikProps.setFieldValue("isMultiCity", false);
    formikProps.setFieldValue("isRoundTrip", false);
  };
  const multiCityClick = (formikProps) => {
    formikProps.setFieldValue("isMultiCity", true);
    formikProps.setFieldValue("isRoundTrip", false);
    formikProps.setFieldValue("isOneWay", false);
  };
  const setDropdown = (formikProps) => {
    formikProps.setFieldValue("showDropdown", !formikProps.values.showDropdown);
  };
  const showPassengerRecord = (formikProps) => {
    formikProps.setFieldValue(
      "isPersonRecord",
      !formikProps.values.isPersonRecord
    );
  };

  const handleSelectChange = (value, fieldName, formikProps) => {
    formikProps.setFieldValue(fieldName, value);
  };
  const handleAddFlight = (formikProps) => {
    formikProps.setFieldValue("multiCity", [
      ...formikProps.values.multiCity,
      { ...multiCityObj },
    ]);
  };
  const handleRemoveFlight = (formikProps) => {
    if (formikProps.values.multiCity.length !== 1) {
      formikProps.setFieldValue(
        "multiCity",
        formikProps.values.multiCity.filter(
          (element, index) => index < formikProps.values.multiCity.length - 1
        )
      );
    }
  };

  const handleSubmit = () => {};
  const flightClasses = [
    { value: "economy", label: "Economy" },
    { value: "premium economy", label: "Premium Economy" },
    { value: "business class", label: "Business Class" },
    { value: "first class", label: "First Class" },
  ];
  const renderForm = (formikProps) => {
    const { values, errors, touched, handleSubmit, handleBlur, handleChange } =
      formikProps;
    let flightId;
    if (values.isMultiCity) {
      flightId = "multiCity";
    } else if (values.isOneWay) {
      flightId = "oneWay";
    } else {
      flightId = "rounttripBox";
    }

    return (
      <form onSubmit={handleSubmit}>
        <div className="tabContent flight-tabs activeTab" id="flightsTab">
          <div className="dflex flexStart">
            <div className="btnGroup flightType">
              <Button
                text="Roundtrip"
                className={values.isRoundTrip ? "btnSml active" : "btnSml"}
                type="button"
                onClick={() => roundtripClick(formikProps)}
              />
              <Button
                text="One-way"
                className={values.isOneWay ? "btnSml active" : "btnSml"}
                type="button"
                onClick={() => oneWayClick(formikProps)}
              />
              <Button
                text="Multi-City"
                className={values.isMultiCity ? "btnSml active" : "btnSml"}
                type="button"
                onClick={() => multiCityClick(formikProps)}
              />
            </div>
            {!isMobile && (
              <div className="roomNpersonWrap mobileHide">
                <div
                  className={
                    values.isPersonRecord
                      ? "dropdownWrap flatDropdown toggleClass openDropdown"
                      : "dropdownWrap flatDropdown toggleClass"
                  }
                >
                  <Button
                    className="btnSml width180 toggleBtn"
                    text="2 Person "
                    icon="fa fa-angle-down"
                    onClick={() =>
                      formikProps.setFieldValue(
                        "isPersonRecord",
                        !values.isPersonRecord
                      )
                    }
                  />
                  <div className="dropdownInWrap">
                    <AddPassengerForm
                      isOpen={values.isPersonRecord}
                      handleClose={() => showPassengerRecord(formikProps)}
                      formikProps={formikProps}
                    />
                  </div>
                </div>
              </div>
            )}
            {!isMobile && (
              <div
                className={
                  values.isFlightClass
                    ? "dropdownWrap flatDropdown toggleClass  openDropdown"
                    : "dropdownWrap flatDropdown toggleClass flight-class"
                }
              >
                {/* <Button text="Economy " onClick={flightClassClick} /> */}
                <SelectComponent
                  isComponents
                  className="btnSml width180 toggleBtn"
                  icon="fa fa-angle-down"
                  name="flightClass"
                  placeholder=""
                  options={flightClasses}
                  onChange={(value) => {
                    handleSelectChange(value, "flightClass", formikProps);
                  }}
                  value={values.flightClass}
                />
              </div>
            )}
          </div>
          <div className="flightTypeCnt">
            <div className="flightCnt show" id={flightId}>
              <MultiCityForm
                {...formikProps}
                isOpen={values.showDropdown}
                handleClose={setDropdown}
                // formikProps={formikProps.values}
                // multiCityObj={multiCityObj}
                handleAddFlight={handleAddFlight}
                handleRemoveFlight={handleRemoveFlight}
              />
            </div>
          </div>
        </div>
      </form>
    );
  };
  return (
    <Formik
      // enableReinitialize
      initialValues={initialValues}
      handleSubmit={handleSubmit}
    >
      {renderForm}
    </Formik>
  );
}