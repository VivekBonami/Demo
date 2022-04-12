import React from "react";

function InputField(props) {
  const {
    name,
    value,
    onChange,
    onBlur,
    placeholder,
    label,
    className,
    type,
    error,
    touched,
    memberNumberClassName,
  } = props;

  // Input field without icon

  return (
    <div
      className={
        memberNumberClassName
          ? memberNumberClassName
          : `col formGroup ${className}`
      }
    >
      {label && <h5>{label}</h5>}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className="formControl"
      />

      {error && touched && <div className="star-red mt-8">{error}</div>}
    </div>
  );
}

export default InputField;
