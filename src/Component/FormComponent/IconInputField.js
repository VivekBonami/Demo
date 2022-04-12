import React from "react";
import Icon from "./Icon";

function IconInputField(props) {
  const {
    type,
    placeholder,
    name,
    onChange,
    value,
    label,
    iconName,
    onFocus,
    onBlur,
    className,
    serverErrors,
    successMessage,
    errors,
    touched,
    src,
    inputClassName,
    autoComplete,
  } = props;

  return (
    //Input field with Icon
    <>
      <div className="inputWrap form-group">
        {iconName ? (
          <Icon iconName={iconName} className={className} />
        ) : (
          <div className="icon">
            <img src={src} alt="icon" />
          </div>
        )}
        {label && <label>{label}:</label>}
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          onChange={onChange}
          onFocus={() => {}}
          onBlur={onBlur}
          value={value}
          className={inputClassName}
          autoComplete={autoComplete}
        />
      </div>
      {errors && touched && <div className="star-red mt-8">{errors}</div>}
      {name === "email" && serverErrors && !errors && touched && (
        <div className="star-red mt-8">{serverErrors?.errors?.email}</div>
      )}
      {name === "password" && serverErrors && !errors && touched && (
        <div className="star-red mt-8">
          {serverErrors?.errors?.password
            ? serverErrors.errors?.password
            : serverErrors.errors?.email}
        </div>
      )}
      {successMessage && !serverErrors && !errors && (
        <div>{successMessage.data?.message}</div>
      )}
    </>
  );
}

export default IconInputField;
