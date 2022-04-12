import React from "react";

//input field
function InputField(props) {
  const {
    className,
    colClassName,
    name,
    type,
    label,
    placeholder,
    value,
    onChange,
    onBlur,
    error,
    touched,
  } = props;
  return (
    <div
      className={
        colClassName ? colClassName : `col inputStyle inputStyle2 ${className}`
      }
    >
      {label && (
        <label className="labelStyle" htmlFor="">
          {label}
        </label>
      )}
      <input
        name={name}
        label={label}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && touched && <div className="star-red mt-8">{error}</div>}
    </div>
  );
}

export default InputField;
