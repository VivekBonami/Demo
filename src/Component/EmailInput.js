import React from 'react';
import paypalImg from '../Assets/img/PayPal.png';
import InputField from './FormComponent/InputField';

// Email input field

function EmailInput(props) {
  const {
    email,
    emailPlaceholder,
    emailLabel,
    formikProps,
    confirmEmail,
    confirmEmailLabel,
    confirmEmailPlaceholder,
  } = props;
  const { values, errors, touched, handleChange, handleBlur } = formikProps;
  return (
    <div className="card2 PaypalInfo">
      <div className="row heading-row">
        <div className="col">
          <div className="sectionTitle">
            <h2>Paypal Email</h2>
          </div>
        </div>
        <div className="col">
          <div className="sectionInfo">
            <p>
              An existing Paypal account is required for Sign Up. If you do not
              have an existing PayPal account please click{' '}
              <a
                href="https://www.paypal.com/us/webapps/mpp/account-selection"
                target="_blank"
                rel="noreferrer"
              >
                HERE
              </a>{' '}
              to create one.
            </p>
            <div className="paypal-logo">
              <a
                href="https://www.paypal.com/us/webapps/mpp/account-selection"
                target="_blank"
                rel="noreferrer"
              >
                <img src={paypalImg} alt="PayPal" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <InputField
          name={email}
          label={emailLabel}
          type="text"
          placeholder={emailPlaceholder}
          value={values.email}
          error={errors.email}
          touched={touched.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <InputField
          name={confirmEmail}
          tyep="text"
          label={confirmEmailLabel}
          placeholder={confirmEmailPlaceholder}
          value={values.confirmEmail}
          touched={touched.confirmEmail}
          error={errors.confirmEmail}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
    </div>
  );
}

export default EmailInput;
