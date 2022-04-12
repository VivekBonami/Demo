import React from "react";
import { Link } from "react-router-dom";
import Checkbox from "./FormComponent/Checkbox";

//Terms Checkbox

function TermsCheckbox(props) {
  const { value, onChange, name, onBlur } = props;

  return (
    <div className="checkBoxContent">
      <Checkbox name={name} value={value} onChange={onChange} onBlur={onBlur} />
      <p>
        By clicking «Pay Now», I agree to the{" "}
        <Link to="/home">Terms and Conditions</Link> and{" "}
        <Link to="/home">Privacy Policy</Link>
      </p>
    </div>
  );
}

export default TermsCheckbox;
