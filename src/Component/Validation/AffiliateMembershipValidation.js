import * as Yup from "yup";

export const AffiliateMembershipValidation = () => {
  const phoneRegExp = /^[0-9\b]+$/;
  const zipCodeRegExp = /^([a-zA-Z0-9]){3,7}$/;
  const cvvRegExp = /^[0-9]{3,4}$/;
  const cardNumberRegExp = /^[0-9]{14,17}$/;
  const mmyyFormatRegExp = /([0-9]{2})\/([0-9]{2})/;

  // Validation for affiliate premium membership

  return Yup.object().shape({
    firstName: Yup.string("")
      .matches(/^[aA-zZ\s]+$/, "Must only have alphabet letters")
      .required("First Name is required"),
    lastName: Yup.string("")
      .matches(/^[aA-zZ\s]+$/, "Must only have alphabet letters")
      .required("Last Name is required"),
    email: Yup.string("")
      .email("Enter a valid email address.")
      .required("Email is required"),
    confirmEmail: Yup.string("")
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Please confirm password"),
    phoneNumber: Yup.string("")
      .matches(phoneRegExp, "Enter a valid number.")
      .length(12, "Enter 10 digit phone nubmer")
      .required("Phone number is required"),
    nationality: Yup.string("").required("Required"),
    addressOne: Yup.string("").required("Required"),
    addressTwo: Yup.string("").required("Required"),
    city: Yup.string("").required("Required"),
    state: Yup.string("").required("Required"),
    zipCode: Yup.string("")
      .matches(zipCodeRegExp, "Enter valid zip code")
      .required("Required"),
    cardHolderName: Yup.string("").required("Required"),
    cardNumber: Yup.string("")
      .matches(cardNumberRegExp, "Length should between 14 and 17")
      .required("Required"),
    mmyy: Yup.string()
      .typeError("Not a valid expiration date. Example: MM/YY")
      .max(5, "Not a valid expiration date. Example: MM/YY")
      .matches(mmyyFormatRegExp, "Not a valid expiration date. Example: MM/YY")
      .required("Expiration date is required"),
    cvv: Yup.string("")
      .matches(cvvRegExp, "Enter valid CVV")
      .required("Required"),
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
