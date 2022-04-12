import React from "react";
import { Link } from "react-router-dom";

//Chekbox Input

function Checkbox(props) {
  const {
    name,
    value,
    onChange,
    control,
    text,
    className,
    agreeMsg,
    message,
    formikProps,
  } = props;

  return (
    <label className={`customCheckbox ${className}`}>
      <input
        type="checkbox"
        name={name}
        checked={value}
        onChange={(e) => {
          onChange(formikProps, name, value);
        }}
      />

      {agreeMsg ? (
        <span className="checkboxStyle">
          {agreeMsg}
          <Link to="/home">Terms and Conditions</Link> and{" "}
          <Link to="/home">Privacy Policy</Link>
        </span>
      ) : message ? (
        <span>{message}</span>
      ) : (
        <span></span>
      )}

      {text && <small>{text}</small>}
    </label>
  );
}

export default Checkbox;
