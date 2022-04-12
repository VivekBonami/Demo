import React, { useRef } from "react";
import Button from "../FormComponent/Button";
import useOutsideHandler from "../../Stores/Utils/useOutsideHandler";

export default function AddPassengerForm(props) {
  const { isOpen, handleClose, formikProps } = props;
  const { values } = formikProps;
  const exportRef = useRef(null);
  useOutsideHandler(exportRef, isOpen, handleClose);

  return (
    <div ref={exportRef} className="dropDownSubWrap">
      <div className="dflex inWrap">
        <div className="adultstitle">Adults</div>
        <div className="dflex addMinusWrap">
          <Button
            type="button"
            className={values.persons.passengers <= 1 ? "disable" : ""}
            onClick={() => {
              formikProps.setFieldValue(
                `persons.passengers`,
                values.persons.passengers - 1
              );
            }}
            disabled={values.persons.passengers <= 1}
            icon="minus"
          />
          <input
            type="text"
            value={values.persons.passengers}
            name={`passengers`}
          />
          <Button
            className={
              values.persons.passengers +
                values.persons.children +
                values.persons.infants >=
              6
                ? "disable"
                : ""
            }
            type="button"
            onClick={() => {
              formikProps.setFieldValue(
                `persons.passengers`,
                values.persons.passengers + 1
              );
            }}
            disabled={
              values.persons.passengers +
                values.persons.children +
                values.persons.infants >=
              6
            }
            icon="icon-add"
          />
        </div>
      </div>
      <div className="dflex inWrap">
        <div className="adultstitle">
          Children <span className="noteText"> (2-12 years)</span>
        </div>
        <div className="dflex addMinusWrap">
          <Button
            type="button"
            className={values.persons.children <= 0 ? "disable" : ""}
            onClick={() => {
              formikProps.setFieldValue(
                `persons.children`,
                values.persons.children - 1
              );
            }}
            disabled={values.persons.children <= 0}
            icon="minus"
          />
          <input
            type="text"
            value={values.persons.children}
            name={`children`}
          />
          <Button
            className={
              values.persons.passengers +
                values.persons.children +
                values.persons.infants >=
              6
                ? "disable"
                : ""
            }
            type="button"
            onClick={() => {
              formikProps.setFieldValue(
                `persons.children`,
                values.persons.children + 1
              );
            }}
            disabled={
              values.persons.passengers +
                values.persons.children +
                values.persons.infants >=
              6
            }
            icon="icon-add"
          />
        </div>
      </div>
      <div className="dflex inWrap">
        <div className="adultstitle">
          Infants<span className="noteText"> (0-2 years)</span>
        </div>
        <div className="dflex addMinusWrap">
          <Button
            type="button"
            className={values.persons.infants <= 0 ? "disable" : ""}
            onClick={() => {
              formikProps.setFieldValue(
                `persons.infants`,
                values.persons.infants - 1
              );
            }}
            disabled={values.persons.infants <= 0}
            icon="minus"
          />
          <input type="text" value={values.persons.infants} name={`infants`} />
          <Button
            className={
              values.persons.passengers +
                values.persons.children +
                values.persons.infants >=
              6
                ? "disable"
                : ""
            }
            type="button"
            onClick={() => {
              formikProps.setFieldValue(
                `persons.infants`,
                values.persons.infants + 1
              );
            }}
            disabled={
              values.persons.passengers +
                values.persons.children +
                values.persons.infants >=
              6
            }
            icon="icon-add"
          />
        </div>
      </div>
    </div>
  );
}
