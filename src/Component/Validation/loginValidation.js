import * as Yup from "yup";

export const loginValidation = () => {
  return Yup.object().shape({
    email: Yup.string("")
      .email("Please enter a valid email")
      .required("This field is required"),
    password: Yup.string("")
      .required("This field is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/,
        "Password must Contain 6 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
  });
};
