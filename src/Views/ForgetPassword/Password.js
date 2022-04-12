import React from "react";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import LogoWhite from "../../Component/FormComponent/LogoWhite";
import { forgotPwdValidation } from "../../Component/Validation/forgotPwdValidation";
import IconInputField from "../../Component/FormComponent/IconInputField";
import Button from "../../Component/FormComponent/Button";
import Icon from "../../Component/FormComponent/Icon";
import LoginBgVideo from "../../Component/LoginBgVideo";
import Footer from "../../Component/Footer";
import logo from "../../Assets/img/logo.png";
import { authActions } from "../../Stores/Actions";

function Password() {
  const dispatch = useDispatch();
  const forgotPasswordDetails = useSelector(
    (state) => state.authReducer.forgotPasswordDetails
  );
  const serverErrors = useSelector((state) => state.authReducer.errors);
  const initVal = {
    email: "",
  };

  const handleSubmit = (value) => {
    const payload = {
      email: value.email.trim(),
      tenant_id: process.env.REACT_APP_TENANT_ID,
    };
    dispatch(authActions.forgotPasswordRequest(payload));
  };

  const renderForm = (formikProps) => {
    const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
      formikProps;

    return (
      <div className="pageBg forgotPasswordWrap">
        <form onSubmit={handleSubmit}>
          <div className="pageBoxWrap pageCenterCnt pageForgotPassword min-height-100vh">
            <Link className="logo" to={"/"}>
              <LogoWhite src={logo} />
            </Link>
            <div className="boxBg">
              <div className="textCnt">
                <h6>Forgot Password</h6>
                <p>
                  Please enter your email. We will send reset instructions to
                  your registered email.{" "}
                </p>
              </div>
              <div className="input-text-wrapper">
                <IconInputField
                  // label="Email"
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={values.eamil}
                  onChange={handleChange}
                  iconName="fa fa-envelope"
                  className="iconWrap"
                  onBlur={handleBlur}
                  errors={errors.email}
                  touched={touched.email}
                  successMessage={forgotPasswordDetails}
                  serverErrors={serverErrors}
                />
              </div>
              <div className="dflex flexColReverse">
                <Link className="linkStyle" to={"/login"}>
                  <Icon className="iconWrap" iconName="fa fa-angle-left" />
                  Back
                </Link>
                <Button text="Send" type="submit" className="btn" />
              </div>
            </div>
            <Footer />
          </div>
        </form>
      </div>
    );
  };

  return (
    <Formik
      initialValues={initVal}
      onSubmit={handleSubmit}
      validationSchema={forgotPwdValidation()}
    >
      {renderForm}
    </Formik>
  );
}

export default Password;
