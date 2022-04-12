import React from "react";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";


export default function DateInput(props) {
  const {
    label,
    name,
    placeholder,
    value,
    errors,
    touched,
    isRequired = false,
    onDateChange,
    onFocusChange,
    focused,
    disabled,
    isDayBlocked,
    customClassName,
    icon,
  } = props;

  let isValidClass = "";
  let fieldClass = "form-control rounded-0 ";
  const isTouched =
    touched !== undefined && touched[name] !== undefined && touched[name];

  let errorMsg = "";
  if (isTouched && errors[name] !== undefined && errors[name]) {
    fieldClass += " is-invalid";
    isValidClass = "datePickerInvalid";
    errorMsg = errors[name];
  } else if (isTouched && !errors[name] && value) {
    fieldClass += " is-valid";
    isValidClass = "datePickerValid";
  }

  return (
    <SingleDatePicker
      numberOfMonths={1}
      placeholder={placeholder}
      date={value}
      onDateChange={onDateChange}
      customInputIcon={<i className={icon} />}
      inputIconPosition="before"
      focused={focused}
      onFocusChange={onFocusChange}
      id={name}
      disabled={disabled}
      isDayBlocked={isDayBlocked}
    />
  );
}
