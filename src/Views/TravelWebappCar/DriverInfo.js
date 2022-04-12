import React from "react";
import { Link } from "react-router-dom";
import SelectFieldOption from "../../Component/FormComponent/SelectFieldOption";
import CarInputField from "./CarInputField";
import Checkbox from "../../Component/FormComponent/Checkbox";

//Driver info details
function DriverInfo(props) {
  const {
    formikProps,
    handleCustomChange,
    nubmberCustomChange,

    title,
    titleOption,
    firstName,
    lastName,
    email,
    phoneNumber,
    nationality,
    nationalityOption,
    addressLine1,
    addressLine2,
    city,
    state,
    zipCode,
    country,
    countryOption,
    checkBox1,
    checkBox2,
  } = props;
  const { values, errors, touched, handleChange, handleBlur } = formikProps;

  return (
    <div className="card2 primaryInfo">
      <h4 className="boxTitle">Driver Information</h4>
      <p className="copyStyle">
        The driver may need to provide a credit card at the rental counter.
        Please review the <Link to="/home">acceptable forms of payment</Link>{" "}
        for this car rental to determine the specific requirement.
      </p>
      <div className="halfCol mdTitleNname">
        <SelectFieldOption
          name={title}
          label2="Title"
          placeholder="Title"
          options={titleOption}
          value={values.title}
          error={errors.title}
          touched={touched.title}
          onChange={handleCustomChange}
          onBlur={handleBlur}
          formikProps={formikProps}
          className="col selectStyle profileTitle"
        />
        <CarInputField
          name={firstName}
          label="Frist Name"
          placeholder="First Name"
          type="text"
          value={values.firstName}
          error={errors.firstName}
          touched={touched.firstName}
          onChange={handleChange}
          className="firstNamecol"
        />
        <CarInputField
          name={lastName}
          label="Last Name"
          placeholder="Last Name"
          type="text"
          value={values.lastName}
          error={errors.lastName}
          touched={touched.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          className="lastNameCol"
        />
      </div>
      <div className="col3 flexStart mdFullWidth">
        <CarInputField
          name={email}
          type="email"
          label="Email"
          placeholder="Email"
          value={values.email}
          touched={touched.email}
          error={errors.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <CarInputField
          name={phoneNumber}
          type="text"
          label="Phone Number"
          placeholder="Phone Number"
          value={values.phoneNumber}
          error={errors.phoneNumber}
          touched={touched.phoneNumber}
          onChange={(val) => {
            nubmberCustomChange(formikProps, phoneNumber, val.target.value);
          }}
          onBlur={handleBlur}
        />
        <SelectFieldOption
          name={nationality}
          label2="Nationality"
          placeholder="Nationality"
          options={nationalityOption}
          value={values.nationality}
          error={errors.nationality}
          touched={touched.nationality}
          onChange={handleCustomChange}
          onBlur={handleBlur}
          formikProps={formikProps}
          className="col selectStyle"
        />
      </div>
      <div className="BSrow gutter15">
        <CarInputField
          name={addressLine1}
          type="text"
          label="Address Line1"
          placeholder="Address Line1"
          value={values.addressLine1}
          error={errors.addressLine1}
          touched={touched.addressLine1}
          onChange={handleChange}
          onBlur={handleBlur}
          colClassName="col-6 inputStyle inputStyle2"
        />
        <CarInputField
          name={addressLine2}
          type="text"
          label="Address Line2"
          placeholder="Address Line2"
          value={values.addressLine2}
          error={errors.addressLine2}
          touched={touched.addressLine2}
          onChange={handleChange}
          onBlur={handleBlur}
          colClassName="col-6 inputStyle inputStyle2"
        />
      </div>
      <div className="BSrow gutter15">
        <CarInputField
          name={city}
          type="text"
          label="City"
          placeholder="City"
          value={values.city}
          touched={touched.city}
          error={errors.city}
          onChange={handleChange}
          onBlur={handleBlur}
          colClassName="col-6 inputStyle inputStyle2"
        />
        <CarInputField
          name={state}
          type="text"
          label="State/Province/Region"
          placeholder="State/Province/Region"
          value={values.state}
          error={errors.state}
          touched={touched.state}
          onChange={handleChange}
          onBlur={handleBlur}
          colClassName="col-6 inputStyle inputStyle2"
        />
      </div>
      <div className="BSrow gutter15">
        <CarInputField
          name={zipCode}
          type="text"
          label="ZIP/Postal Code"
          placeholder="ZIP/Postal Code"
          value={values.zipCode}
          error={errors.zipCode}
          touched={touched.zipCode}
          onChange={handleChange}
          onBlur={handleBlur}
          colClassName="col-6 inputStyle inputStyle2"
        />
        <SelectFieldOption
          name={country}
          label2="Country"
          placeholder="Country"
          options={countryOption}
          value={values.country}
          error={errors.country}
          touched={touched.country}
          onChange={handleCustomChange}
          onBlur={handleBlur}
          formikProps={formikProps}
          className="col-6 selectStyle"
        />
      </div>
      <div className="lightBgLabel">
        <Checkbox
          name={checkBox1}
          // value={values.checkBox1}
          onChange={handleCustomChange}
          onBlur={handleBlur}
          formikProps={formikProps}
          message="*Hassle-free pick up: Enter your cell number for a one-time SMS reminder of your confirmation number and counter details. Only applicable at airport locations."
        />
      </div>
      <div className="labelSpace">
        <Checkbox
          name={checkBox2}
          // value={values.checkBox2}
          onChange={handleCustomChange}
          formikProps={formikProps}
          message="Yes, I would like to receive exclusive promotions, coupons and discounts."
        />
      </div>
    </div>
  );
}

export default DriverInfo;
