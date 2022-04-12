import React from "react";
import Select from "react-select";

//Select option input Field

function SelectFieldOption(props) {
  const {
    label2,
    label,
    options,
    onChange,
    name,
    id,
    value,
    placeholder,
    formikProps,
    className,

    touched,
    error,
  } = props;

  const defaultValue = (options, value) => {
    return options ? options.filter((option) => option.value === value) : "";
  };

  return (
    <div className={className ? className : "col dropdown"}>
      {label && <h5>{label}</h5>}
      {label2 && (
        <label className="labelStyle" htmlFor="">
          {label2}
        </label>
      )}
      <div className="selectWrap">
        <Select
          id={id}
          name={name}
          options={options}
          onChange={(val) => {
            onChange(formikProps, name, val.value);
          }}
          value={defaultValue(options, value)}
          placeholder={placeholder}
        />
      </div>
      {error && touched && <div className="inputStyle">{error}</div>}
    </div>
  );
}

export default SelectFieldOption;
