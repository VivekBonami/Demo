import * as Yup from "yup";

//Freemium sign up form validation

export const FreemiumSignUpValidation = () => {
  return Yup.object().shape({
    firstName: Yup.string("")
      .matches(/^[aA-zZ\s]+$/, "Must only have letters [A-Z a-z].")
      .required("First Name is required."),
    lastName: Yup.string("")
      .matches(/^[aA-zZ\s]+$/, "Must only have letters [A-Z a-z].")
      .required("First Name is required."),
    email: Yup.string("")
      .email("Enter a valid email address")
      .required("Email is required"),
    password: Yup.string("")
      .min(8, "Must be 8 characters or more")
      .matches(/[a-z]+/, "One lowercase character")
      .matches(/[A-Z]+/, "One uppercase character")
      .matches(/[@$!%*#?&]+/, "One special character")
      .matches(/\d+/, "One number")
      .required("Password Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Please confirm password"),
  });
};
