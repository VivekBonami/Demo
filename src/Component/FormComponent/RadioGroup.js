import React from "react";

function RadioGroup(props) {
  const { text, formikProps, name, value, onChange, check, option, className } =
    props;

  return (
    <>
      <label className={className ? className : "switchBtn"}>
        <input
          name={name}
          type="radio"
          value={value}
          onChange={(e) => onChange(formikProps, name, e.target.value)}
          checked={check}
          options={option}
        />
        <span>{text}</span>
      </label>
    </>
  );
}

export default RadioGroup;
