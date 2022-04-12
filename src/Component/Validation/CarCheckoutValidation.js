import * as Yup from "yup";

export const CarCheckoutValidaion = () => {
  const phoneRegExp = /^[0-9\b]+$/;
  const zipCodeRegExp = /^([a-zA-Z0-9]){3,7}$/;

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
    phoneNumber: Yup.string("")
      .matches(phoneRegExp, "Enter a valid number.")
      .length(12, "Enter 10 digit phone nubmer")
      .required("Phone number is required"),
    addressLine1: Yup.string("").required("Required"),
    addressLine2: Yup.string("").required("Required"),
    city: Yup.string("").required("Required"),
    state: Yup.string("").required("Required"),
    zipCode: Yup.string("")
      .matches(zipCodeRegExp, "Enter valid zip code")
      .required("Required"),
    nationality: Yup.string("").required("Required"),
    country: Yup.string("").required("Required"),
  });
};
