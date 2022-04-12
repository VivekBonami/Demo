import * as Yup from 'yup';

export const forgotPwdValidation = () => {
    return(
      Yup.object().shape({
        email: Yup.string("").email("Please enter a valid email").required("This field is required"),
      })
    )
  }
  