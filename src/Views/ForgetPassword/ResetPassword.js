import React from "react";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LogoWhite from "../../Component/FormComponent/LogoWhite";
import { resetPwdValidation } from "../../Component/Validation/resetPwdValidation";
import IconInputField from "../../Component/FormComponent/IconInputField";
import Button from "../../Component/FormComponent/Button";
import Icon from "../../Component/FormComponent/Icon";
import LoginBgVideo from "../../Component/LoginBgVideo";
import Footer from "../../Component/Footer";
import logo from "../../Assets/img/logo.png";
import { authActions } from "../../Stores/Actions";

function ResetPassword() {
  //initial values
  const resetPasswordDetails = useSelector(
    (state) => state.authReducer.resetPasswordDetails
  );
  const serverErrors = useSelector((state) => state.authReducer.errors);
  const dispatch = useDispatch();
  const initialValues = {
    newPassword: "",
    confirmPassword: "",
  };

  const handleSubmit = (value) => {
    console.log(value);
    const payload = {
      email: "nikita@betacraft.com",
      password: value.newPassword.trim(),
      password_confirmation: value.confirmPassword.trim(),
      tenant_id: process.env.REACT_APP_TENANT_ID,
      token: "652ccab1201c64a5c9e89c6e221d78a1830d7f81a3fabbc01b114f8d4c74871b",
    };
    dispatch(authActions.resetPasswordRequest(payload));
  };

  const renderForm = (formikProps) => {
    const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
      formikProps;

    return (
      <form onSubmit={handleSubmit}>
        <div className="pageBg forgotPasswordWrap">
          <div className="pageBoxWrap pageCenterCnt pageForgotPassword min-height-100vh">
            <Link className="logo" to={"/"}>
              <LogoWhite src={logo} />
            </Link>

            <div className="boxBg">
              <div className="textCnt">
                <h6>Reset Password</h6>
              </div>
              <span className="star-red">{serverErrors?.message}</span>
              <div className="input-text-wrapper">
                <IconInputField
                  // label="Email"
                  type="password"
                  name="newPassword"
                  placeholder="New Password"
                  value={values.newPassword}
                  onChange={handleChange}
                  iconName="fa fa-lock"
                  className="iconWrap"
                  onBlur={handleBlur}
                  errors={errors.newPassword}
                  touched={touched.newPassword}
                  autoComplete={"new-password"}
                />
              </div>
              <div className="input-text-wrapper">
                <IconInputField
                  // label="Email"
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  iconName="fa fa-lock"
                  className="iconWrap"
                  onBlur={handleBlur}
                  errors={errors.confirmPassword}
                  touched={touched.confirmPassword}
                  autoComplete={"confirm-password"}
                />
              </div>

              <div className="dflex flexColReverse">
                <Link className="linkStyle" to={"/login"}>
                  <Icon className="iconWrap" iconName="fa fa-angle-left" />
                  Back
                </Link>
                <Button text="Submit" type="submit" className="btn" />
              </div>
            </div>
            {serverErrors && <div className="input-text-wrapper"></div>}
            <Footer />
          </div>
        </div>
      </form>
    );
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={resetPwdValidation()}
    >
      {renderForm}
    </Formik>
  );
}

export default ResetPassword;
