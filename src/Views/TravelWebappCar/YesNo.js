import React from "react";
import RadioGroup from "../../Component/FormComponent/RadioGroup";

//yes no radio button
function YesNo({ handleCustomChange, formikProps, yesNo }) {
  const { values } = formikProps;
  return (
    <div>
      <RadioGroup
        name={yesNo}
        id="yes"
        value="Yes"
        onChange={handleCustomChange}
        className="customRadio"
        check={values.yesNo === "Yes"}
        text={
          <>
            <strong>Yes</strong>, add this plan for $11/calendar day. Save now!
            Coverage typically costs more at the counter.
          </>
        }
        formikProps={formikProps}
      />
      <RadioGroup
        name={yesNo}
        id="no"
        value="No"
        onChange={handleCustomChange}
        className="customRadio"
        check={values.yesNo === "No"}
        text={
          <>
            <strong>No</strong>, I decline coverage.
          </>
        }
        formikProps={formikProps}
      />
    </div>
  );
}

export default YesNo;
