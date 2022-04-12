import React from "react";

function SimpleInputField(props) {
  const {
    type,
    onChange,
    onBlur,
    value,
    error,
    touched,
    placeholder,
    name,
    label,
    className,
  } = props;

  //Input field

  return (
    <>
      {label && <h5>label</h5>}
      <input
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        error={error}
        touched="true"
        placeholder={placeholder}
        name={name}
        className={`formControl ${className}`}
      />
      {error && touched && <div className="star-red mt-8">{error}</div>}
    </>
  );
}

export default SimpleInputField;
