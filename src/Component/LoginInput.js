import React from "react";
import InputField from "./FormComponent/InputField";

//Login Input field
function LoginInput(props) {
  const {
    label,
    formikProps,
    password,
    passwordPlaceholder,
    confirmPassword,
    confirmPasswordPlaceholder,
  } = props;

  const { values, errors, touched, handleChange, handleBlur } = formikProps;

  return (
    <div className="card2 LoginInfo">
      <div className="sectionTitle">
        <h2>Login</h2>
      </div>
      <div className="row">
        <InputField
          name={password}
          label={label}
          placeholder={passwordPlaceholder}
          type="text"
          value={values.password}
          touched={touched.password}
          error={errors.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <InputField
          name={confirmPassword}
          label={label}
          type="text"
          placeholder={confirmPasswordPlaceholder}
          value={values.confirmPassword}
          touched={touched.confirmPassword}
          error={errors.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
    </div>
  );
}

export default LoginInput;
