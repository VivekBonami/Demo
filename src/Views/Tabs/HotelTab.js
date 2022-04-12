import React, { useState, useEffect } from "react";
import moment from "moment";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import Button from "../../Component/FormComponent/Button";
import SearchAutocomplete from "../../Component/Autocomplete/SearchAutocomplete";
import DateRangePickerComponent from "../../Component/DatePicker/DateRangePickerComponent";
import AddRoomForm from "../../Component/Forms/AddRoomForm";

export default function HotelTab() {
  const [showDropdown, setshowDropdown] = useState(false);
  const [showAutocomplete, setshowAutocomplete] = useState(false);
  const [isResponsive, setResponsive] = useState(false);
  const [isMobile, setMobile] = useState(false);
  const [focused2, setFocused2] = useState(null);
  const [selectedValue, setselectedValue] = useState(null);
  const [isDateResponsive, setDateResponsive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [inputFields, setInputFields] = useState([{ adults: 2, children: 0 }]);
  const [roomCount, setRoomCount] = useState(1);

  const initialValues = {
    checkIn: moment(),
    checkOut: moment(),
    childAgeId: 0,
  };
  useEffect(() => {
    if (window.innerWidth < 768) {
      setMobile(true);
    }
  }, []);

  const handleOnSearch = () => {
    // OnSearch will have as the first callback parameter
    // the string searched and for the second the results.
    setIsLoading(true);
  };

  const handleOnSelect = (value) => {
    // The item selected
    setselectedValue(value);
    setIsLoading(false);
    handleAutocompleteClick(false);
  };

  const handleAutocompleteClick = () => {
    console.log(!showAutocomplete);
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

  const showResponsive = () => {
    setResponsive(true);
    handleAutocompleteClick(false);
  };

  const showDateResponsive = () => {
    setDateResponsive(true);
  };

  const handleSubmit = () => {};
  // Item list for autocomplete component
  const items = [
    {
      id: 0,
      name: "Cobol",
    },
    {
      id: 1,
      name: "JavaScript",
    },
    {
      id: 2,
      name: "Basic",
    },
    {
      id: 3,
      name: "PHP",
    },
    {
      id: 4,
      name: "Java",
    },
  ];
  // Add room functions with state handling
  // const [inputFields, setInputFields] = useState([{ adults: 2, children: 0 }]);
  const [selectedOption, setSelectedOption] = useState(null);
  // To add form
  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({ adults: 2, children: 0 });
    setInputFields(values);
    setRoomCount({ roomCount: roomCount + 1 });
  };

  // To remove form
  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    if (values.length > 1) {
      values.splice(index, 1);
    }

    setInputFields(values);
    setRoomCount({ roomCount: roomCount - 1 });
  };

  // To add children count
  const handleChildCount = (step, formIndex) => {
    const values = [...inputFields];
    values[formIndex].children += step;
    setInputFields(values);
  };

  // To add adult count
  const handleAdultCount = (step, formIndex) => {
    const values = [...inputFields];
    values[formIndex].adults += step;
    setInputFields(values);
  };

  // Handle select child age
  const handleSelectChange = (
    value,
    fieldName,
    index,
    formIndex,
    formikProps
  ) => {
    console.log(value, fieldName, index, formIndex, formikProps);
    setSelectedOption({
      [`${index}1${formIndex}`]: { value },
      ...selectedOption,
    });
    console.log("selectedOption", selectedOption, formikProps);
    // Const newFormObj = { ...initialValues, [fieldName]: value };
    // const newValues = formikProps.values.map((obj, index) => {
    //   if (index === formIndex) return newFormObj;
    //   return obj;
    // });
    // formikProps.setFieldValue("forms", newValues);
    // console.log("newValues", newValues);
    // formikProps.setFieldValue()
  };

  const renderForm = (formikProps) => {
    const { values, handleSubmit, handleBlur } = formikProps;

    console.log("inputFields", inputFields);

    return (
      <form onSubmit={handleSubmit}>
        <div className="tabContent activeTab" id="apartmentsTab">
          <div className="dflex flexStart mobileFullWidth">
            <div className="btnGroup">
              <div
                className={`dropdownWrap dropDownMobilePopup toggleClass ${
                  showDropdown ? "openDropdown" : ""
                }`}
              >
                {/* selecting room  for desktop view */}
                {!isMobile && (
                  <Button
                    className="btnSml toggleBtn"
                    type="button"
                    onClick={setDropdown}
                    name={(`${roomCount}Room`, "Adult")}
                    icon="fa fa-angle-down"
                  />
                )}

                {/* selecting room for mobile view */}
                {isMobile && (
                  <>
                    <div>
                      <Button
                        className="btnSml toggleBtn"
                        type="button"
                        onClick={setDropdown}
                        name={`${inputFields[roomCount].adults}Adult`}
                        icon="fa fa-angle-down"
                      />

                      <Button
                        className="btnSml toggleBtn"
                        type="button"
                        onClick={setDropdown}
                        name="0 Children"
                        icon="fa fa-angle-down"
                      />
                    </div>
                    <div>
                      <Button
                        className="btnSml toggleBtn"
                        type="button"
                        onClick={setDropdown}
                        name={roomCount}
                        icon="fa fa-angle-down"
                      />
                    </div>
                  </>
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
                        inputFields={inputFields}
                        selectedOption={selectedOption}
                        formikProps={formikProps}
                        handleClose={setDropdown}
                        handleAddFields={handleAddFields}
                        handleRemoveFields={handleRemoveFields}
                        handleChildCount={handleChildCount}
                        handleAdultCount={handleAdultCount}
                        handleSelectChange={handleSelectChange}
                      />
                    )}
                  </div>
                  <div className="dropdownBtnWrap mobileShow">
                    <Button
                      className="btn"
                      name="Apply"
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
              <div className="inputStyle showDropdown">
                {" "}
                <div className="dropdown-content">
                  <span />
                  <SearchAutocomplete
                    {...formikProps}
                    label=""
                    options={items}
                    name="going to"
                    onSearch={(query) => handleOnSearch(query)}
                    onChange={(selected) => {
                      handleOnSelect(selected, formikProps);
                    }}
                    onBlur={handleBlur}
                    isLoading={isLoading}
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
                      options={items}
                      name="going to"
                      onSearch={(query) => handleOnSearch(query)}
                      onChange={(selected) => {
                        handleOnSelect(selected, formikProps);
                      }}
                      onBlur={handleBlur}
                      isLoading={isLoading}
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
                  startDate={values.checkIn}
                  endDate={values.checkOut}
                  startDateId="checkIn"
                  endDateId="checkOut"
                  focusedInput={focused2}
                  onFocusChange={(focusedInput) =>
                    setFocused2({ focused2: focusedInput })
                  }
                  isRequired
                  icon="icon-invitation"
                  orientation="horizontal"
                  startDatePlaceholderText="Check-in"
                  endDatePlaceholderText="Check-out"
                  onDatesChange={({ startDate, endDate }) => {
                    handleDateChange(startDate, formikProps, "checkIn");
                    handleDateChange(endDate, formikProps, "checkOut");
                  }}
                  isDayBlocked={(day) => day <= 22}
                />
              </div>
            )}

            {/* button for responsice check in-out fields */}
            {isMobile && (
              <>
                <button
                  className="inputStyle grow1"
                  onClick={showDateResponsive}
                  type="button"
                >
                  Check-in
                </button>
                <button
                  className="inputStyle grow1"
                  onClick={showDateResponsive}
                  type="button"
                >
                  Check-Out
                </button>
              </>
            )}
            {isMobile && isDateResponsive && (
              <div className="inputStyle showDropdown">
                <div className="mobilePopup">
                  <Link to="#" className="closePopup">
                    <span
                      className="icon-close"
                      onClick={() => handleDateClick(false)}
                    />
                  </Link>
                  <div className="startEndDate">
                    <DateRangePickerComponent
                      name="dates"
                      startDate={values.check_in}
                      endDate={values.check_out}
                      startDateId="check_in"
                      endDateId="check_out"
                      focusedInput={focused2}
                      onFocusChange={(focusedInput) =>
                        setFocused2({ focused2: focusedInput })
                      }
                      isRequired
                      icon="icon-invitation"
                      orientation="vertical"
                      startDatePlaceholderText="Check-in"
                      endDatePlaceholderText="Check-out"
                      onDatesChange={({ startDate, endDate }) => {
                        handleDateChange(startDate, formikProps, "check_in");
                        handleDateChange(endDate, formikProps, "check_out");
                      }}
                      isDayBlocked={(day) => day <= 22}
                    />
                  </div>
                </div>
              </div>
            )}
            <div className="searchBtnWrap">
              <Button type="button" className="btn d-block" name="Search" />
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
