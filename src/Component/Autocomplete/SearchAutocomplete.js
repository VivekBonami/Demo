import { AsyncTypeahead } from "react-bootstrap-typeahead";
import React from "react";

function SearchAutocomplete(props) {
  const {
    label,
    name,
    placeholder,
    onSearch,
    options,
    onChange,
    isLoading,
    disabled,
    isRequired,
    defaultSelected = [],
    value,
    onInputChange,
    defaultInputValue,
    icon,
  } = props;
  const errorMsg = "";
  const filterData = options.map((ele) => ({
    name: ele.label,
    id: ele.expedia_id,
    secondary_label: ele.secondary_label,
  }));
  return (
    <>
      <label htmlFor={name} className="label">
        {label}
      </label>
      {icon && <i className={icon} />}
      <AsyncTypeahead
        inputProps={{ className: "inputDropdown widget-dropdown" }}
        defaultInputValue={value}
        onInputChange={onInputChange}
        // selected={value}
        defaultSelected={defaultSelected}
        labelKey={(option) => option.name}
        isLoading={isLoading}
        minLength={3}
        onSearch={onSearch}
        options={filterData}
        placeholder={placeholder}
        // cache={false}
        onChange={onChange}
        searchText="Searching..."
        name={name}
        id={name}
        disabled={disabled}
        // className="inputDropdown"
        renderMenuItemChildren={(option) => (
          <div className="dorpdown-content">
            <span className="locationCode">
              {option.name}, {option.secondary_label}
            </span>
          </div>
        )}
      />
      <div className="invalid-feedback">{errorMsg}</div>
    </>
  );
}

export default SearchAutocomplete;