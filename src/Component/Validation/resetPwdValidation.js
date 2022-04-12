import * as Yup from "yup";

export const resetPwdValidation = () => {
  return Yup.object().shape({
    newPassword: Yup.string("")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/,
        "Password must Contain 6 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      )
      .required("This field is required"),
    confirmPassword: Yup.string("")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/,
        "Password must Contain 6 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      )
      .oneOf([Yup.ref("newPassword"), null], "Passwords do not match")
      .required("This field is required"),
  });
};
