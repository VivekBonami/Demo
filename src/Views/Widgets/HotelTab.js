/* eslint-disable consistent-return */
import React, { useState, useEffect } from "react";
import moment from "moment";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../Component/FormComponent/Button";
import SearchAutocomplete from "../../Component/Autocomplete/SearchAutocomplete";
import DateRangePickerComponent from "../../Component/DatePicker/DateRangePickerComponent";
import AddRoomForm from "../../Component/Forms/AddRoomForm";
import { commonActions } from "../../Stores/Actions/commonActions";

export default function HotelTab() {
  const dispatch = useDispatch();
  const hotelSearchAutoCompleteRes = useSelector(
    (state) => state.commonReducer.autoCompleteData
  );
  const loading = useSelector((state) => state.commonReducer.loader);
  const [showDropdown, setshowDropdown] = useState(false);
  const [showAutocomplete, setshowAutocomplete] = useState(false);
  const [isResponsive, setResponsive] = useState(false);
  const [isMobile, setMobile] = useState(false);
  const [focused2, setFocused2] = useState(null);
  const [selectedValue, setselectedValue] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isDateResponsive, setDateResponsive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [inputFields, setInputFields] = useState([{ adults: 2, children: 0 }]);
  const [roomCount, setRoomCount] = useState(1);
  let adultCount = 0;
  let childCount = 0;

  for (let i = 0; i < inputFields.length; i++) {
    adultCount += inputFields[i].adults;
    childCount += inputFields[i].children;
  }
  const roomObject = { adults: 2, children: 0, childAge: [] };
  const initialValues = {
    check_in: moment(),
    check_out: moment().add(1, "days"),
    rooms: [{ ...roomObject }],
    goingTo: "",
  };
  useEffect(() => {
    if (window.innerWidth < 768) {
      setMobile(true);
    }
    // window.addEventListener("resize", updateSize);
    // return () => window.removeEventListener("resize", updateSize);
  }, []);

  const handleOnSearch = (query) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    dispatch(commonActions.hotelSearchAutoComplete(query));
  };

  const handleOnSelect = (value, field, formikProps) => {
     // the item selected
    setselectedValue(value);
    setIsLoading(false);
    handleAutocompleteClick(false);
  };
  const handleAutocompleteClick = () => {
    setshowAutocomplete(!showAutocomplete);
  };
  const handleDateClick = () => {
    setDateResponsive(!isDateResponsive);
  };
  const setDropdown = () => {
    setshowDropdown(!showDropdown);
  };
  const handleDateChange = (value, formikProps, field) => {
    formikProps.setFieldValue(field, value);
  };
  const handleFocusChange = (field, value) => {};
  const showResponsive = () => {
    setResponsive(true);
    handleAutocompleteClick(false);
  };
  const showDateResponsive = () => {
    setDateResponsive(true);
  };
  const handleSubmit = () => {};
  // Add room functions with state handling
  // const [inputFields, setInputFields] = useState([{ adults: 2, children: 0 }]);
  const [selectedOption, setSelectedOption] = useState(null);

  const renderForm = (formikProps) => {
    const { values, errors, touched, handleSubmit, handleBlur, handleChange } =
      formikProps;
    return (
      <form onSubmit={handleSubmit}>
        <div className="tabContent activeTab" id="apartmentsTab">
          <div className="dflex flexStart mobileFullWidth">
            <div className="btnGroup">
              <div
                className={
                  !showDropdown
                    ? "dropdownWrap dropDownMobilePopup toggleClass"
                    : "dropdownWrap dropDownMobilePopup toggleClass openDropdown"
                }
              >
                {/* selecting room  for desktop view */}
                {!isMobile && (
                  <Button
                    className="btnSml toggleBtn"
                    type="button"
                    onClick={setDropdown}
                    text={`${inputFields.length} Room, ${adultCount} Adult`}
                    icon="fa fa-angle-down"
                  />
                )}

                {/* selecting room for mobile view */}
                {isMobile && (
                    <div>
                      <Button
                        className="btnSml toggleBtn"
                        type="button"
                        onClick={setDropdown}
                        text={inputFields.length + " Room"+", " + adultCount + " Adult" }
                        icon="fa fa-angle-down"
                      />
                    </div>
                )}
                {/* Mobile view of adding room */}
                <div className="dropdownInWrap mobileFullWidthPopup">
                  <div className="mobileFullWidthPopupContent">
                    <div className="mobileShow popupHeader">
                      <h4>Travelers and Rooms</h4>
                      <Link className="popupCloseBtn toggleBtn" to="#">
                        <span className="icon-close" onClick={setDropdown} />
                      </Link>
                    </div>
                    {/* Add room component */}
                    {showDropdown && (
                      <AddRoomForm
                        isOpen={showDropdown}
                        inputFields={values.rooms}
                        roomObject={roomObject}
                        formikProps={formikProps}
                        handleClose={setDropdown}
                      />
                    )}
                  </div>
                  <div className="dropdownBtnWrap mobileShow">
                    <Button
                      className="btn"
                      text="Apply"
                      type="button"
                      onClick={setDropdown}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* autocomplete component integration */}
          <div className="filterSecondRow input-for-mobile">
            {!isMobile && (
              <div
                className={
                  !showAutocomplete
                    ? "inputStyle showDropdown"
                    : "inputStyle showDropdown"
                }
              >
                {" "}
                <div className="dropdown-content">
                  <span />
                  <SearchAutocomplete
                    {...formikProps}
                    label=""
                    options={hotelSearchAutoCompleteRes}
                    name="going to"
                    onSearch={(query) => handleOnSearch(query)}
                    onChange={(selected) => {
                      handleOnSelect(selected, formikProps);
                    }}
                    value={values.goingTo}
                    onBlur={handleBlur}
                    isLoading={loading}
                    onClick={handleAutocompleteClick}
                    placeholder="Going to"
                    icon="icon-location-on"
                  />
                </div>
              </div>
            )}
            {isMobile && (
              <div className="responsive-input">
                <button
                  className="inputStyle grow1"
                  onClick={showResponsive}
                  type="button"
                >
                  {" "}
                  <i className="icon-location-on" />{" "}
                  {selectedValue ? selectedValue[0]?.name : "Going to"}
                </button>
              </div>
            )}
            {isResponsive && showAutocomplete && (
              <div className="inputStyle showDropdown">
                <div className="mobilePopup">
                  <Link to="#" className="closePopup">
                    <span
                      className="icon-close"
                      onClick={() => handleAutocompleteClick(true)}
                    />
                  </Link>
                  <h4 className="inputPopTitle">
                    {console.log("selectedValue ", selectedValue)}
                    Going to
                  </h4>
                  <div className="dropdown-content">
                    <span />
                    <SearchAutocomplete
                      {...formikProps}
                      label=""
                      options={hotelSearchAutoCompleteRes}
                      name="going to"
                      onSearch={(query) => handleOnSearch(query)}
                      onChange={(selected) => {
                        handleOnSelect(selected, formikProps);
                      }}
                      onBlur={handleBlur}
                      isLoading={isLoading}
                      value={values.goingTo}
                      onClick={handleAutocompleteClick}
                      placeholder="Going to"
                      icon="icon-location-on"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Date range picker component(desktop) */}
            {!isMobile && (
              <div className="Date-picker-range">
                <DateRangePickerComponent
                  name="dates"
                  startDate={values.check_in}
                  endDate={values.check_out}
                  startDateId="check_in"
                  endDateId="check_out"
                  focusedInput={focused2}
                  onFocusChange={(focusedInput) => {
                    setFocused2(focusedInput);
                  }}
                  isRequired
                  icon="icon-invitation"
                  orientation="horizontal"
                  openDirection="up"
                  startDatePlaceholderText="Check-in"
                  endDatePlaceholderText="Check-out"
                  onDatesChange={({ startDate, endDate }) => {
                    handleDateChange(startDate, formikProps, "check_in");
                    handleDateChange(endDate, formikProps, "check_out");
                  }}
                  isDayBlocked={(day) => {
                    if (focused2 === "endDate") {
                      return day > values.check_in.clone().add(21, "days");
                    }
                  }}
                  isOutsideRange={(day) =>
                    day.isAfter(moment().add(10, "years")) ||
                    day.isBefore(moment().subtract(1, "days"))
                  }
                />
              </div>
            )}

            {/* button for responsice check in-out fields */}
            {isMobile && (
              <div className="date-picker-type">
                <div className="check-in-date date-picker-style">
                  <i className="icon-invitation" />
                  <Button
                    className="inputStyle grow1"
                    onClick={showDateResponsive}
                    type="button"
                    text="  Check-in"
                  />
                </div>
                <div className="check-out-date date-picker-style">
                  <i className="icon-invitation" />
                  <Button
                    className="inputStyle grow1"
                    onClick={showDateResponsive}
                    type="button"
                    text=" Check-Out"
                  />
                </div>
              </div>
            )}
            {isMobile && isDateResponsive && (
              <div className="inputStyle showDropdown">
                <div className="date-picker-popup ">
                  <Link to="#" className="closePopup">
                    <span
                      className="icon-close"
                      onClick={() => handleDateClick(false)}
                    />
                  </Link>
                  <h4 className="inputPopTitle">Going to</h4>
                  <div className="Date-picker-range">
                    <DateRangePickerComponent
                      name="dates"
                      startDate={values.check_in}
                      endDate={values.check_out}
                      startDateId="check_in"
                      endDateId="check_out"
                      focusedInput={focused2}
                      onFocusChange={(focusedInput) => {
                        setFocused2(focusedInput);
                      }}
                      isRequired
                      icon="icon-invitation"
                      orientation="vertical"
                      openDirection="down"
                      startDatePlaceholderText="Check-in"
                      endDatePlaceholderText="Check-out"
                      onDatesChange={({ startDate, endDate }) => {
                        handleDateChange(startDate, formikProps, "check_in");
                        handleDateChange(endDate, formikProps, "check_out");
                      }}
                      isDayBlocked={(day) => {
                        if (focused2 === "endDate") {
                          return day > values.check_in.clone().add(21, "days");
                        }
                      }}
                      isOutsideRange={(day) =>
                        day.isAfter(moment().add(10, "years")) ||
                        day.isBefore(moment().subtract(1, "days"))
                      }
                    />
                  </div>
                </div>
              </div>
            )}

            {/* {isMobile && isDateResponsive && (
              <div className="date-picker-popup ">
                <Link to="#" className="closePopup">
                  <span
                    className="icon-close"
                    onClick={() => handleDateClick(false)}
                  ></span>
                </Link>
              </div>
            )} */}
            <div className=" searchBtnWrap">
              <Button type="button" className="btn d-block" text="Search" />
            </div>
          </div>
        </div>
        {/* </div> */}
      </form>
    );
  };
  return (
    <Formik initialValues={initialValues} handleSubmit={handleSubmit}>
      {renderForm}
    </Formik>
  );
}