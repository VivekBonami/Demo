import React, { Fragment } from "react";
import Select, { components } from "react-select";
const SelectComponent = (props) => {
  const { required, styles, name, label, error, isComponents } = props;

  // finds dataObj from options array that matches value
  const defaultValue = (options, value) => {
    return options
      ? options.filter((option) => {
          // console.log(option);
          return option.value === value;
        })
      : "";
  };

  // JSX for Select Field
  return (
    <div styles={styles}>
      {label && (
        <label htmlFor={name}>
          {label}
          {required}
        </label>
      )}
      <SelectTag defaultValue={defaultValue} {...props} />
    </div>
  );
};
const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <i className="fa fa-angle-down" />
    </components.DropdownIndicator>
  );
};
const SelectTag = (props) => {
  const {
    options,
    defaultValue,
    value,
    className,
    placeholder,
    error,
    serverError,
    showServerError,
    touched,
    onChange,
    styles,
    menuPlacement,
  } = props;

  return (
    <Fragment>
      <Select
        components={{ DropdownIndicator }}
        className={className}
        styles={styles}
        options={options}
        value={value}
        onChange={(value) => onChange(value)}
        placeholder={placeholder}
        classNamePrefix="custom-select"
        menuPlacement={menuPlacement ? menuPlacement : "auto"}
      />
    </Fragment>
  );
};

export default SelectComponent;
