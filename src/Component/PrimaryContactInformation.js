import React from "react";
import SelectFieldOption from "./FormComponent/SelectFieldOption";
import InputField from "./FormComponent/InputField";
import Checkbox from "./FormComponent/Checkbox";

//Primary Contact Information Section

function PrimaryContactInformation(props) {
  const {
    formikProps,
    checkedBoxValue,
    handleCheckbox,
    handleCustomChange,
    numberCustomChange,

    title,
    titleLabel,
    titleOptions,
    titlePlaceholder,

    firstName,
    firstNameLabel,
    firstNamePlaceholder,

    lastName,
    lastNameLabel,
    lastNamePlaceholder,

    email,
    emailLabel,
    emailPlaceholder,

    phoneNumber,
    phoneNumberLabel,

    nationality,
    nationalityPlaceholder,
    nationalityLabel,
    nationalityOptions,

    addressOne,
    addressOneLabel,
    addressOnePlaceholder,

    addressTwo,
    addressTwoLabel,
    addressTwoPlaceholder,

    city,
    cityLabel,
    cityPlaceholder,

    state,
    stateLabel,
    statePlaceholder,
    stateOptions,

    zipCode,
    zipCodeLabel,
    zipCodePlaceholder,

    promoCode,
    promoCodeLabel,
    promoCodePlaceholder,

    terms,
  } = props;

  const { values, errors, touched, handleChange, handleBlur } = formikProps;

  return (
    <div className="card2">
      <div className="sectionTitle">
        <h2>Primary Contact Information</h2>
      </div>
      <div className="row primaryInfo mobileViewDisplayNone">
        <SelectFieldOption
          name={title}
          label={titleLabel}
          value={values.title}
          options={titleOptions}
          placeholder={titlePlaceholder}
          onChange={handleCustomChange}
          onBlur={handleBlur}
          error={errors.title}
          touched={touched.title}
          formikProps={formikProps}
        />

        <InputField
          name={firstName}
          type="text"
          placeholder={firstNamePlaceholder}
          label={firstNameLabel}
          value={values.firstName}
          error={errors.firstName}
          touched={touched.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          className="fName"
        />

        <InputField
          name={lastName}
          label={lastNameLabel}
          type="text"
          placeholder={lastNamePlaceholder}
          value={values.lastName}
          error={errors.lastName}
          touched={touched.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          className="lName"
        />
      </div>
      <div className="primaryInfo desktopViewDisplayNone">
        <div className="row">
          <SelectFieldOption
            name={title}
            label={titleLabel}
            value={values.title}
            options={titleOptions}
            placeholder={titlePlaceholder}
            onChange={handleCustomChange}
            onBlur={handleBlur}
            error={errors.title}
            touched={touched.title}
            formikProps={formikProps}
          />

          <InputField
            name={firstName}
            type="text"
            placeholder={firstNamePlaceholder}
            label={firstNameLabel}
            value={values.firstName}
            error={errors.firstName}
            touched={touched.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            className="fName"
          />
        </div>
        <div className="row">
          <InputField
            name={lastName}
            label={lastNameLabel}
            type="text"
            placeholder={lastNamePlaceholder}
            value={values.lastName}
            error={errors.lastName}
            touched={touched.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            className="lName"
          />
        </div>
      </div>
      <div className="row">
        <InputField
          name={email}
          label={emailLabel}
          type="email"
          placeholder={emailPlaceholder}
          value={values.email}
          error={errors.email}
          touched={touched.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <InputField
          name={phoneNumber}
          label={phoneNumberLabel}
          type="text"
          value={values.phoneNumber}
          error={errors.phoneNumber}
          touched={touched.phoneNumber}
          onChange={(e) => {
            numberCustomChange(formikProps, phoneNumber, e.target.value);
          }}
          onBlur={handleBlur}
        />

        <SelectFieldOption
          name={nationality}
          label={nationalityLabel}
          value={values.nationality}
          options={nationalityOptions}
          placeholder={nationalityPlaceholder}
          error={errors.nationality}
          touched={touched.nationality}
          onChange={handleCustomChange}
          onBlur={handleBlur}
          formikProps={formikProps}
        />
      </div>
      <div className="row">
        <InputField
          name={addressOne}
          label={addressOneLabel}
          type="text"
          placeholder={addressOnePlaceholder}
          value={values.addressOne}
          error={errors.addressOne}
          touched={touched.addressOne}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <InputField
          name={addressTwo}
          label={addressTwoLabel}
          type="text"
          placeholder={addressTwoPlaceholder}
          value={values.addressTwo}
          error={errors.addressTwo}
          touched={touched.addressTwo}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
      <div className="row">
        <InputField
          name={city}
          label={cityLabel}
          type="text"
          placeholder={cityPlaceholder}
          value={values.city}
          error={errors.city}
          touched={touched.city}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <SelectFieldOption
          name={state}
          label={stateLabel}
          placeholder={statePlaceholder}
          options={stateOptions}
          value={values.state}
          error={errors.state}
          touched={touched.state}
          onChange={handleCustomChange}
          onBlur={handleBlur}
          formikProps={formikProps}
        />

        <InputField
          name={zipCode}
          type="text"
          label={zipCodeLabel}
          placeholder={zipCodePlaceholder}
          value={values.zipCode}
          error={errors.zipCode}
          touched={touched.zipCode}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
      {terms && (
        <div className="d-flex promocodeWrap">
          <div className="checkBoxContent">
            <Checkbox
              name={terms}
              value={checkedBoxValue}
              onChange={handleCheckbox}
            />
            <label className="checkbox-label" htmlFor="checkbox-id">
              Select if you have a Promo or Gift Card Code.
            </label>
          </div>
        </div>
      )}
      <div className="row gift-card-row">
        {checkedBoxValue && (
          <InputField
            name={promoCode}
            type="text"
            label={promoCodeLabel}
            placeholder={promoCodePlaceholder}
            value={values.promoCode}
            error={errors.promoCode}
            touched={touched.promoCode}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        )}
      </div>
    </div>
  );
}

export default PrimaryContactInformation;
