import React from "react";
import InputField from "./FormComponent/InputField";
import SimpleInputField from "./FormComponent/SimpleInputField";

// Billing Details Section
function BillingDetails(props) {
  const {
    formikProps,
    cardHeadingLabel,
    numberCustomChange,

    cardHolderName,
    cardHolderNameLabel,
    cardHolderNamePlaceholder,

    cardImage,
    cardNumber,
    cardNumberPlaceholder,

    mmyy,
    mmyyPlaceholder,

    cvv,
    cvvPlaceholder,
    memberNumber,
    memberNumberLabel,

    billingDetails,
  } = props;

  const { values, errors, touched, handleChange, handleBlur } = formikProps;

  return (
    <>
      {memberNumber ? (
        <div className="member-number-wrap row">
          <div className="sectionTitle col">
            <h2>Billing Details</h2>
          </div>

          <InputField
            name={memberNumber}
            type="text"
            label={memberNumberLabel}
            value={values.memberNumber}
            error={errors.memberNumber}
            touched={touched.memberNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            memberNumberClassName="member-number-box col"
          />
        </div>
      ) : (
        billingDetails
      )}
      <div className="row">
        <InputField
          name={cardHolderName}
          type="text"
          label={cardHolderNameLabel}
          placeholder={cardHolderNamePlaceholder}
          value={values.cardHolderName}
          error={errors.cardHolderName}
          touched={touched.cardHolderName}
          onChange={handleChange}
          onBlur={handleBlur}
          className="cardHolder"
        />
        <div className="col formGroup cardDetails">
          <h5>{cardHeadingLabel}</h5>
          <div className="cardWrapper">
            <div className="cardImage">
              <img src={cardImage} alt="credit-card" />
            </div>
            <SimpleInputField
              name={cardNumber}
              placeholder={cardNumberPlaceholder}
              type="text"
              value={values.cardNumber}
              error={errors.cardNumber}
              touched={touched.cardNumber}
              onChange={(e) => {
                numberCustomChange(formikProps, cardNumber, e.target.value);
              }}
              formikProps={formikProps}
              onBlur={handleBlur}
            />
            <SimpleInputField
              name={mmyy}
              type="text"
              placeholder={mmyyPlaceholder}
              value={values.mmyy}
              error={errors.mmyy}
              touched={touched.mmyy}
              onChange={handleChange}
              onBlur={handleBlur}
              formikProps={formikProps}
              className="mm-yy"
            />
            <SimpleInputField
              name={cvv}
              type="text"
              placeholder={cvvPlaceholder}
              value={values.cvv}
              error={errors.cvv}
              touched={touched.cvv}
              onChange={(e) => {
                numberCustomChange(formikProps, cvv, e.target.value);
              }}
              formikProps={formikProps}
              onBlur={handleBlur}
              className="cvv"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default BillingDetails;
