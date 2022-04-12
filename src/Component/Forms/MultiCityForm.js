/* eslint-disable no-unsafe-optional-chaining */
import React, { useState, useEffect, useCallback, Fragment } from "react";
import { FieldArray } from "formik";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import DateInput from "../DatePicker/DateInput";
import IconButton from "../FormComponent/IconButton";
import Button from "../FormComponent/Button";
import { items } from "../../Stores/Constants/siteConstants/autocompleteConstants";
import DateRangePickerComponent from "../DatePicker/DateRangePickerComponent";
import AddPassengerForm from "./AddPassengerForm";
import SelectComponent from "../Select/SelectComponent";
import { commonActions } from "../../Stores/Actions/commonActions";
import SearchAutocomplete from "../Autocomplete/SearchAutocomplete";
// import { SingleDatePicker } from "react-dates";

const MultiCityForm = React.memo((props) => {
  const { isOpen, handleClose, handleAddFlight, handleRemoveFlight } = props;
  const dispatch = useDispatch();
  const flightSearchFromRes = useSelector(
    (state) => state.commonReducer.autoCompleteFlightFromData
  );
  const flightSearchToRes = useSelector(
    (state) => state.commonReducer.autoCompleteFlightToData
  );
  const loading = useSelector((state) => state.commonReducer.loader);

  const formikProps = props;
  const [multicityDateFocus, setMulticityDateFocus] = useState({});
  const [onewayDateFocus, setOnewayDateFocus] = useState(false);
  const [isDateResponsive, setDateResponsive] = useState(false);
  const [isResponsive, setResponsive] = useState(false);
  const [isMobile, setMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 768) {
      setMobile(true);
    }
  }, []);
  // const exportRef = useRef(null);
  // useOutsideHandler(exportRef, isOpen, handleClose);
  const [showFlyingFrom, setFlyingFrom] = useState(false);
  const [showFlyingTo, setFlyingTo] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const flightClasses = [
    { value: "economy", label: "Economy" },
    { value: "premium economy", label: "Premium Economy" },
    { value: "business class", label: "Business Class" },
    { value: "first class", label: "First Class" },
  ];
  const handleOnSearch = (query, type) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    if (type === "from") {
      dispatch(commonActions.flightFromSearchAutoComplete(query));
    } else {
      dispatch(commonActions.flightToSearchAutoComplete(query));
    }
    setIsLoading(true);
  };
  const showResponsive = () => {
    setResponsive(true);
    setFlyingFrom(true);
  };
  const handleOnSelect = (value, fieldName, formikProps) => {
    // the item selected
    formikProps.setFieldValue(fieldName, value);
    setIsLoading(false);
    setFlyingFrom(false);
    setFlyingTo(false);
  };
  const handleDateChange = useCallback(
    (value, formikProps, field, fieldIndex) => {
      if (formikProps.values.isRoundTrip && value) {
        if (field.includes("departing")) {
          formikProps.setFieldValue(field, value);
          formikProps.setFieldValue(`${field.split(".")[0]}.returning`, "");
        } else {
          formikProps.setFieldValue(field, value);
          formikProps.setFieldValue(
            "returning",
            moment(value._d).add(1, "days")
          );
        }
      } else if (field === "returning") {
        if (document.querySelector(".boxStyle").style.zIndex === "9999") {
          document.querySelector(".boxStyle").style.zIndex = "9";
        }
      } else if (formikProps.values.isMultiCity) {
        formikProps.values.multiCity.map((ele, index) => {
          if (index > fieldIndex) {
            const newDate = moment(value).add(1, "days");
            formikProps.setFieldValue(`multiCity[${index}].departing`, newDate);
          }
        });
        formikProps.setFieldValue(field, value);
      } else if (formikProps.values.isOneWay && value) {
        formikProps.setFieldValue(field, value);
      }
    },
    []
  );
  const handleSelectChange = (value, fieldName, formikProps) => {
    formikProps.setFieldValue(fieldName, value);
  };
  const handleFocusChange = (field, value) => {
    setMulticityDateFocus({ [field]: value });
  };
  const swappingFields = (formikProps) => {
    handleOnSelect(
      formikProps.values.multiCity[0].flyingIn,
      "multiCity[0].flyingOut",
      formikProps
    );
    handleOnSelect(
      formikProps.values.multiCity[0].flyingOut,
      "multiCity[0].flyingIn",
      formikProps
    );
  };

  const handleSearchButtton = () => {};
  // for repeated fields
  return (
    <>
      <FieldArray
        name={!formikProps.values.isMultiCity ? "otherTrip" : "multiCity"}
        render={(arrayHelpers) => (
          <>
            {formikProps.values.multiCity.map((city, index) => (
              <Fragment key={index}>
                {" "}
                {!formikProps.values.isMultiCity && index > 0 ? (
                  ""
                ) : (
                  <div className="startEndLocation filterSecondRow">
                    <h5 className="mobileShow flightHeading">
                      Flight {index + 1}
                    </h5>
                    <div className="locationAndDateWrap">
                      <div className="startNendWrap">
                        <div className="inputStyle showDropdown">
                          {/* Desktop view of flying form field */}
                          {!isMobile && (
                            <SearchAutocomplete
                              {...formikProps}
                              options={flightSearchFromRes}
                              name={`multiCity[${index}].flyingIn`}
                              onSearch={(query) =>
                                handleOnSearch(query, "from")
                              }
                              // onInputChange={(value) => {
                              //   handleOnSelect(
                              //     value,
                              //     `multiCity[${index}].flyingIn`,
                              //     formikProps
                              //   );
                              // }}
                              defaultInputValue={
                                formikProps.values.isMultiCity &&
                                formikProps.values.multiCity.length > 1 &&
                                formikProps.values.multiCity[index - 1]
                                  ?.flyingOut
                                  ? formikProps.values.multiCity[index - 1]
                                      ?.flyingOut
                                  : formikProps.values.multiCity[index]
                                      ?.flyingIn
                              }
                              isLoading={loading}
                              placeholder="Flying from"
                              icon="icon-location-on"
                            />
                          )}

                          {/* Mobile view of flying form field */}
                          {isMobile && (
                            <div className="responsive-input">
                              <IconButton
                                className="inputStyle grow1"
                                onClick={() => setFlyingFrom(true)}
                                type="button"
                                icon="icon-location-on"
                                text={
                                  formikProps.values.isMultiCity &&
                                  formikProps.values.multiCity.length > 1 &&
                                  formikProps.values.multiCity[index - 1]
                                    ?.flyingOut[0]?.name
                                    ? formikProps.values.multiCity[index - 1]
                                        ?.flyingOut[0]?.name
                                    : index === 0 &&
                                      formikProps.values.multiCity[index]
                                        ?.flyingIn[0]?.name
                                    ? formikProps.values.multiCity[index]
                                        ?.flyingIn[0]?.name
                                    : "Flying From"
                                }
                              />
                            </div>
                          )}
                          {isMobile && showFlyingFrom && (
                            <div className="mobilePopup">
                              <Button
                                type="button"
                                className="closePopup"
                                icon="icon-close"
                                onClick={() => setFlyingFrom(false)}
                              />
                              <h4 className="inputPopTitle">
                                Where are you leaving from?
                              </h4>
                              <div className="inputInWrap">
                                <SearchAutocomplete
                                  {...formikProps}
                                  label=""
                                  options={flightSearchFromRes}
                                  name={`multiCity[${index}].flyingIn`}
                                  onSearch={(query) =>
                                    handleOnSearch(query, "from")
                                  }
                                  onChange={(value) => {
                                    handleOnSelect(
                                      value,
                                      `multiCity[${index}].flyingIn`,
                                      formikProps
                                    );
                                  }}
                                  value={
                                    formikProps.values.isMultiCity &&
                                    formikProps.values.multiCity.length > 1 &&
                                    formikProps.values.multiCity[index - 1]
                                      ?.flyingOut
                                      ? formikProps.values.multiCity[index - 1]
                                          ?.flyingOut
                                      : formikProps.values.multiCity[index]
                                          .flyingIn
                                  }
                                  isLoading={loading}
                                  placeholder="Flying from"
                                  icon="icon-location-on"
                                />
                              </div>
                            </div>
                          )}
                        </div>
                        {!formikProps.values.isMultiCity && (
                          <Button
                            icon="icon-swap-horiz"
                            className="changeBtn"
                            onClick={() => swappingFields(formikProps)}
                          />
                        )}
                        {/* Desktop view of flying to field */}
                        <div className="inputStyle showDropdown">
                          {!isMobile && (
                            <SearchAutocomplete
                              {...formikProps}
                              label=""
                              options={flightSearchToRes}
                              name={`multiCity[${index}].flyingOut`}
                              onSearch={(query) => handleOnSearch(query, "to")}
                              onChange={(value) => {
                                handleOnSelect(
                                  value,
                                  `multiCity[${index}].flyingOut`,
                                  formikProps
                                );
                              }}
                              value={formikProps.values.multiCity[0].flyingOut}
                              defaultInputValue={
                                formikProps.values.multiCity[0].flyingOut
                              }
                              isLoading={loading}
                              placeholder="Flying to"
                              icon="icon-location-on"
                            />
                          )}

                          {/* Mobile view of flying to field */}
                          {isMobile && (
                            <div className="responsive-input">
                              <IconButton
                                className="inputStyle grow1"
                                onClick={() => setFlyingTo(true)}
                                type="button"
                                icon="icon-location-on"
                                text={
                                  formikProps.values.isMultiCity &&
                                  formikProps.values.multiCity.length > 1 &&
                                  formikProps.values.multiCity[index - 1]
                                    ?.flyingOut[0]?.name
                                    ? formikProps.values.multiCity[index - 1]
                                        .flyingOut[0]?.name
                                    : index === 0 &&
                                      formikProps.values.multiCity[index]
                                        ?.flyingOut[0]?.name
                                    ? formikProps.values.multiCity[index]
                                        .flyingOut[0]?.name
                                    : "Flying to"
                                }
                              />
                            </div>
                          )}
                          {isMobile && showFlyingTo && (
                            <div className="mobilePopup">
                              <Button
                                type="button"
                                className="closePopup"
                                icon="icon-close"
                                onClick={() => setFlyingTo(!showFlyingTo)}
                              />
                              <h4 className="inputPopTitle">
                                Where are you leaving from?
                              </h4>
                              <div className="inputInWrap">
                                <SearchAutocomplete
                                  // sclassName="autoCompleteInput"
                                  {...formikProps}
                                  label=""
                                  options={flightSearchToRes}
                                  name={`multiCity[${index}].flyingOut`}
                                  onSearch={(query) =>
                                    handleOnSearch(query, "to")
                                  }
                                  onChange={(value) => {
                                    handleOnSelect(
                                      value,
                                      `multiCity[${index}].flyingOut`,
                                      formikProps
                                    );
                                  }}
                                  value={
                                    formikProps.values.isMultiCity
                                      ? formikProps.values.multiCity[index]
                                          .flyingOut
                                      : formikProps.values.multiCity[index]
                                          .flyingOut
                                  }
                                  isLoading={loading}
                                  placeholder="Flying to"
                                  icon="icon-location-on"
                                />
                              </div>
                            </div>
                          )}
                        </div>
                        {/* Desktop view of multicity date input */}
                        {!isMobile &&
                          formikProps.values.isMultiCity &&
                          !formikProps.values.isOneWay && (
                            <div className="startEndDate">
                              <DateInput
                                {...formikProps}
                                numberOfMonths={1}
                                placeholder="Departing"
                                value={
                                  formikProps.values.multiCity[index].departing
                                }
                                icon="icon-invitation"
                                name={`multiCity[${index}].departing`}
                                onDateChange={(e) =>
                                  handleDateChange(
                                    e,
                                    formikProps,
                                    `multiCity[${index}].departing`,
                                    index
                                  )
                                }
                                focused={
                                  multicityDateFocus[`departing_${index}`]
                                } // PropTypes.bool
                                onFocusChange={({ focused }) =>
                                  handleFocusChange(
                                    `departing_${index}`,
                                    focused
                                  )
                                }
                                isDayBlocked={(day) =>
                                  formikProps.values.multiCity.length > 1 &&
                                  index > 0
                                    ? day.isBefore(
                                        moment(
                                          formikProps.values.multiCity[
                                            index - 1
                                          ].departing
                                        )
                                      )
                                    : day <= moment()
                                }
                                isRequired
                              />
                            </div>
                          )}

                        {/* Mobile view of multicity date input */}
                        {isMobile && formikProps.values.isMultiCity && (
                          <div className="date-picker-type">
                            <div className="check-in-date date-picker-style">
                              <i className="icon-invitation" />
                              <Button
                                className="inputStyle grow1"
                                onClick={() => setDateResponsive(true)}
                                type="button"
                                text={
                                  formikProps.values.multiCity[index].departing
                                    ? moment(
                                        formikProps.values.multiCity[index]
                                          .departing
                                      ).format("MM/DD/YYYY")
                                    : "Departing"
                                }
                              />
                            </div>
                          </div>
                        )}
                        {isMobile &&
                          isDateResponsive &&
                          formikProps.values.isMultiCity &&
                          !formikProps.values.isOneWay && (
                            <div className="inputStyle showDropdown">
                              <div className="date-picker-popup ">
                                <IconButton
                                  className="closePopup"
                                  type="button"
                                  icon="icon-close"
                                  onClick={() =>
                                    setDateResponsive(!isDateResponsive)
                                  }
                                />

                                <h4 className="inputPopTitle">Departing</h4>
                                {/* <div className="startEndDate"> */}
                                <DateInput
                                  numberOfMonths={1}
                                  placeholder="Departing"
                                  value={
                                    formikProps.values.multiCity[index]
                                      .departing
                                  }
                                  icon="icon-invitation"
                                  name={`multiCity[${index}].departing`}
                                  onDateChange={(e) =>
                                    handleDateChange(
                                      e,
                                      formikProps,
                                      `multiCity[${index}].departing`,
                                      index
                                    )
                                  }
                                  focused={
                                    multicityDateFocus[`departing_${index}`]
                                  } // PropTypes.bool
                                  onFocusChange={({ focused }) =>
                                    handleFocusChange(
                                      `departing_${index}`,
                                      focused
                                    )
                                  }
                                  isDayBlocked={(day) =>
                                    formikProps.values.multiCity.length > 1 &&
                                    index > 0
                                      ? day.isBefore(
                                          moment(
                                            formikProps.values.multiCity[
                                              index - 1
                                            ].departing
                                          )
                                        )
                                      : day <= moment()
                                  }
                                  isRequired
                                />
                              </div>
                            </div>
                          )}
                      </div>

                      <div>
                        {/* Desktop view of oneway date input */}
                        {!isMobile && formikProps.values.isOneWay && (
                          <div className="startEndDate">
                            <DateInput
                              {...formikProps}
                              numberOfMonths={1}
                              placeholder="Departing"
                              value={formikProps.values.multiCity[0].departing}
                              icon="icon-invitation"
                              name="multiCity[0].departing"
                              onDateChange={(e) =>
                                handleDateChange(
                                  e,
                                  formikProps,
                                  `multiCity[0].departing`
                                )
                              }
                              focused={onewayDateFocus} // PropTypes.bool
                              onFocusChange={(focused) =>
                                setOnewayDateFocus(focused)
                              }
                              isDayBlocked={(day) =>
                                formikProps.values.multiCity[0].departing
                                  ? day.isBefore(
                                      moment(
                                        formikProps.values.multiCity[0]
                                          .departing
                                      )
                                    )
                                  : day <= moment()
                              }
                              isRequired
                            />
                          </div>
                        )}
                        {/* Mobile view of oneway date input */}
                        {isMobile && formikProps.values.isOneWay && (
                          <div className="date-picker-type">
                            <div className="check-in-date date-picker-style">
                              <i className="icon-invitation" />
                              <Button
                                className="inputStyle grow1"
                                onClick={() => setDateResponsive(true)}
                                type="button"
                                text={
                                  formikProps.values.multiCity[0].departing
                                    ? moment(
                                        formikProps.values.multiCity[0]
                                          .departing
                                      ).format("MM/DD/YYYY")
                                    : "Departing"
                                }
                              />
                            </div>
                          </div>
                        )}
                        {isMobile &&
                          isDateResponsive &&
                          formikProps.values.isOneWay && (
                            <div className="inputStyle showDropdown">
                              <div className="date-picker-popup ">
                                <IconButton
                                  className="closePopup"
                                  type="button"
                                  icon="icon-close"
                                  onClick={() =>
                                    setDateResponsive(!isDateResponsive)
                                  }
                                />

                                <h4 className="inputPopTitle">Departing</h4>
                                <DateInput
                                  numberOfMonths={1}
                                  placeholder="Departing"
                                  value={
                                    formikProps.values.multiCity[0].departing
                                  }
                                  icon="icon-invitation"
                                  name="multiCity[0].departing"
                                  onDateChange={(e) =>
                                    handleDateChange(
                                      e,
                                      formikProps,
                                      `multiCity[0].departing`
                                    )
                                  }
                                  focused={onewayDateFocus} // PropTypes.bool
                                  onFocusChange={(focused) =>
                                    setOnewayDateFocus(focused)
                                  }
                                  isDayBlocked={(day) =>
                                    formikProps.values.multiCity[0].departing
                                      ? day.isBefore(
                                          moment(
                                            formikProps.values.multiCity[0]
                                              .departing
                                          )
                                        )
                                      : day <= moment()
                                  }
                                  isRequired
                                />
                              </div>
                            </div>
                          )}
                        {/* Desktop view of roundtrip date range picker */}
                        {!isMobile && formikProps.values.isRoundTrip && (
                          <div className="Date-picker-range">
                            <DateRangePickerComponent
                              startDate={
                                formikProps.values.multiCity[0].departing
                              }
                              endDate={
                                formikProps.values.multiCity[0].returning
                              }
                              startDateId="departing"
                              endDateId="returning"
                              // focusedInput={roundTripFocused}
                              // onFocusChange={(focusedInput) => {
                              //   setRoundTripFocused(focusedInput);
                              // }}
                              isRequired
                              icon="icon-invitation"
                              orientation="horizontal"
                              openDirection="up"
                              startDatePlaceholderText="Departing"
                              endDatePlaceholderText="Returning"
                              onDatesChange={({ startDate, endDate }) => {
                                handleDateChange(
                                  startDate,
                                  formikProps,
                                  `multiCity[0].departing`
                                );
                                handleDateChange(
                                  endDate,
                                  formikProps,
                                  `multiCity[0].returning`
                                );
                              }}
                              // isDayBlocked={(day) => {
                              //   if (roundTripFocused === "endDate") {
                              //     return (
                              //       day > formikProps.values.departing.clone().add(21, "days")
                              //     );
                              //   }
                              // }}
                              isOutsideRange={(day) =>
                                day.isAfter(moment().add(1, "years")) ||
                                day.isBefore(moment().subtract(1, "days"))
                              }
                            />
                          </div>
                        )}

                        {/* Mobile view of date range picker */}
                        {isMobile && formikProps.values.isRoundTrip && (
                          <div className="date-picker-type">
                            <div className="check-in-date date-picker-style">
                              <IconButton
                                className="inputStyle grow1"
                                onClick={() => setDateResponsive(true)}
                                type="button"
                                text={
                                  <div className="datepicker-types">
                                    <div className="date-types-1">
                                      <i className="icon-invitation" />
                                      <span>Departing</span>
                                    </div>
                                    <div className="date-types-2">
                                      <i className="icon-arrow" />
                                    </div>
                                    <div className="date-types-3">
                                      <i className="icon-invitation" />
                                      <span>Returning</span>
                                    </div>
                                  </div>
                                }
                              />
                            </div>
                          </div>
                        )}
                        {isMobile &&
                          isDateResponsive &&
                          formikProps.values.isRoundTrip && (
                            <div className="inputStyle showDropdown">
                              <div className="date-picker-popup ">
                                <IconButton
                                  className="closePopup"
                                  type="button"
                                  icon="icon-close"
                                  onClick={() =>
                                    setDateResponsive(!isDateResponsive)
                                  }
                                />

                                <div className="Date-picker-range">
                                  <DateRangePickerComponent
                                    startDate={
                                      formikProps.values.multiCity[0].departing
                                    }
                                    endDate={
                                      formikProps.values.multiCity[0].returning
                                    }
                                    startDateId="departing"
                                    endDateId="returning"
                                    // focusedInput={roundTripFocused}
                                    // onFocusChange={(focusedInput) => {
                                    //   setRoundTripFocused(focusedInput);
                                    // }}
                                    isRequired
                                    icon="icon-invitation"
                                    orientation="vertical"
                                    openDirection="down"
                                    startDatePlaceholderText="Departing"
                                    endDatePlaceholderText="Returning"
                                    onDatesChange={({ startDate, endDate }) => {
                                      handleDateChange(
                                        startDate,
                                        formikProps,
                                        `multiCity[0].departing`
                                      );
                                      handleDateChange(
                                        endDate,
                                        formikProps,
                                        `multiCity[0].returning`
                                      );
                                    }}
                                    // isDayBlocked={(day) => {
                                    //   if (roundTripFocused === "endDate") {
                                    //     return (
                                    //       day >
                                    //       formikProps.values.departing.clone().add(21, "days")
                                    //     );
                                    //   }
                                    // }}
                                    isOutsideRange={(day) =>
                                      day.isAfter(moment().add(1, "years")) ||
                                      day.isBefore(moment().subtract(1, "days"))
                                    }
                                  />
                                </div>
                              </div>
                            </div>
                          )}
                      </div>
                    </div>
                    {/* Search Button */}
                    {index + 1 === formikProps.values.multiCity.length &&
                      !isMobile && (
                        <div className="searchBtnWrap">
                          <Button
                            className="btn"
                            text="Search"
                            onClick={handleSearchButtton}
                            type="button"
                          />
                        </div>
                      )}
                  </div>
                )}
              </Fragment>
            ))}
          </>
        )}
      />
      {/* Add or remove row fields */}
      {formikProps.values.isMultiCity && (
        <div className="addremoveBtn">
          <IconButton
            className="addFlight"
            icon="icon-add"
            type="button"
            onClick={() => handleAddFlight(formikProps)}
            text="Add Another Flight"
          />
          <IconButton
            className="removeFlight"
            icon="icon-minus"
            type="button"
            onClick={() => handleRemoveFlight(formikProps)}
            text="Remove Flight"
          />
        </div>
      )}
      {/* Mobile view of add passenger data component */}
      {isMobile && (
        <div className="roomNpersonWrap mobileShow">
          <div
            className={
              formikProps.values.isPersonRecord
                ? "dropdownWrap flatDropdown toggleClass openDropdown"
                : "dropdownWrap flatDropdown toggleClass"
            }
          >
            <Button
              className="btnSml width180 toggleBtn"
              text={
                formikProps.values?.persons?.passengers
                  ? `${
                      formikProps.values?.persons?.passengers +
                      formikProps.values?.persons?.children
                    } Person`
                  : "2 Person "
              }
              icon="fa fa-angle-down"
              onClick={() =>
                formikProps.setFieldValue(
                  "isPersonRecord",
                  !formikProps.values.isPersonRecord
                )
              }
            />
            <Button
              className="btnSml width180 toggleBtn"
              text={
                formikProps.values?.flightClass?.label
                  ? formikProps.values?.flightClass?.label
                  : "Economy "
              }
              icon="fa fa-angle-down"
              onClick={() =>
                formikProps.setFieldValue(
                  "isPersonRecord",
                  !formikProps.values.isPersonRecord
                )
              }
            />
            {isMobile && (
              // <div className="dropdownInWrap mobileHide">
              <div className="dropdownInWrap mobileFullWidthPopup cabinClassPopup">
                <div className="mobileFullWidthPopupContent">
                  <div className="dropdownInMain">
                    <div className="mobileShow popupHeader">
                      <h4>Cabin Class</h4>
                      <Button
                        className="popupCloseBtn toggleBtn"
                        type="button"
                        icon="icon-close"
                        onClick={() =>
                          formikProps.setFieldValue(
                            "isPersonRecord",
                            !formikProps.values.isPersonRecord
                          )
                        }
                      />
                    </div>
                    <div
                      className={
                        formikProps.values.isPersonRecord
                          ? "dropdownWrap flatDropdown toggleClass openDropdown"
                          : "dropdownWrap flatDropdown toggleClass"
                      }
                    >
                      {/* <Button text="Economy " onClick={flightClassClick} /> */}
                      <SelectComponent
                        isComponents={false}
                        className="btnSml width180 toggleBtn"
                        icon="fa fa-angle-down"
                        name="flightClass"
                        placeholder=""
                        options={flightClasses}
                        onChange={(value) => {
                          handleSelectChange(value, "flightClass", formikProps);
                        }}
                        value={formikProps.values.flightClass}
                      />
                    </div>
                  </div>
                  <div className="dropdownInMain">
                    <div className="mobileShow popupHeader">
                      <h4>Passengers</h4>
                    </div>
                    <AddPassengerForm
                      //   isOpen={formikProps.values.isPersonRecord}
                      //   handleClose={() =>
                      //     formikProps.setFieldValue(
                      //       "isPersonRecord",
                      //       !formikProps.values.isPersonRecord
                      //     )
                      //   }
                      formikProps={formikProps}
                    />
                  </div>
                </div>
                <div className="dropdownBtnWrap mobileShow">
                  <Button type="button" text="Apply" className="btn" />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      {/* Mobile view search button */}
      {formikProps.values.multiCity.length && isMobile && (
        <div className="searchBtnWrap">
          <Button
            className="btn"
            text="Search"
            onClick={handleSearchButtton}
            type="button"
          />
        </div>
      )}
    </>
  );
});
export default MultiCityForm;