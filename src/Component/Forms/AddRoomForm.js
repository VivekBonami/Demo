import React, { useState, useEffect, Fragment, useRef } from "react";
import { Link } from "react-router-dom";
import { FieldArray } from "formik";
import SelectComponent from "../Select/SelectComponent";
import useOutsideHandler from "../../Stores/Utils/useOutsideHandler";
import { childAge } from "../../Stores/Constants/siteConstants/dropdownConstants";
import Button from "../FormComponent/Button";
import IconButton from "../FormComponent/IconButton";

export default function AddRoomForm(props) {
  const { isOpen, roomObject, handleClose, formikProps } = props;
  const { values } = formikProps;
  const exportRef = useRef(null);
  useOutsideHandler(exportRef, isOpen, handleClose);
  // to add form
  const handleAddFields = (formikProps) => {
    console.log(formikProps.values);
    formikProps.setFieldValue("rooms", [
      ...formikProps.values.rooms,
      { ...roomObject },
    ]);
  };
  // to remove form
  const handleRemoveFields = (roomIndex, formikProps) => {
    const newValues = formikProps.values.rooms.filter((obj, index) => {
      if (index === roomIndex) return null;
      return obj;
    });
    formikProps.setFieldValue("rooms", newValues);
  };
  // handle select child age
  const handleSelectChange = (value, fieldName, formikProps) => {
    formikProps.setFieldValue(fieldName, value);
  };

  return (
    // <form onSubmit={onSubmit}>
    <div ref={exportRef} className="form-row">
      {/* inputfields array mapping for re-rendering the room form */}
      <Fragment>
        <FieldArray
          name="rooms"
          render={(arrayHelpers) => {
            return (
              <>
                {values.rooms.map((room, index) => {
                  return (
                    <div className="dropDownSubWrap">
                      <div className="dflex roomHead">
                        <span>Room {index + 1} </span>

                        {index !== 0 && (
                          <Button
                            type="button"
                            onClick={() =>
                              handleRemoveFields(index, formikProps)
                            }
                            icon={"icon-close"}
                          />
                        )}
                      </div>
                      <div key={index} className="dflex inWrap">
                        {/* Adult section */}
                        <div className="adultstitle">Adults</div>
                        <div className="dflex addMinusWrap">
                          <Button
                            type="button"
                            className={room.adults <= 1 ? "disable" : ""}
                            onClick={() => {
                              formikProps.setFieldValue(
                                `rooms[${index}].adults`,
                                values.rooms[index].adults - 1
                              );
                            }}
                            disabled={room.adults <= 1}
                            icon="minus"
                          />
                          <input
                            type="text"
                            value={values.rooms[index].adults}
                            name={`rooms[${index}].adults`}
                          />
                          <Button
                            className={
                              room.adults + room.children >= 8 ? "disable" : ""
                            }
                            type="button"
                            onClick={() => {
                              formikProps.setFieldValue(
                                `rooms[${index}].adults`,
                                values.rooms[index].adults + 1
                              );
                            }}
                            disabled={room.adults + room.children >= 8}
                            icon="icon-add"
                          />
                        </div>
                      </div>
                      <div key={index} className="dflex inWrap">
                        {/* Adult section */}
                        <div className="adultstitle">
                          Children
                          <span className="noteText"> (0-17 years)</span>
                        </div>
                        <div className="dflex addMinusWrap">
                          <Button
                            type="button"
                            className={room.children <= 0 ? "disable" : ""}
                            onClick={() => {
                              formikProps.setFieldValue(
                                `rooms[${index}].children`,
                                values.rooms[index].children - 1
                              );
                            }}
                            disabled={room.children <= 0}
                            icon="minus"
                          />
                          <input
                            type="text"
                            value={values.rooms[index].children}
                            name={`rooms[${index}].children`}
                          />
                          <Button
                            className={
                              room.adults + room.children >= 8 ? "disable" : ""
                            }
                            type="button"
                            onClick={() => {
                              formikProps.setFieldValue(
                                `rooms[${index}].children`,
                                values.rooms[index].children + 1
                              );
                              formikProps.setFieldValue(
                                `rooms[${index}].childAge`,
                                [
                                  ...values.rooms[index].childAge,
                                  {
                                    value: 0,
                                    label: "Under 1",
                                  },
                                ]
                              );
                            }}
                            disabled={room.adults + room.children >= 8}
                            icon="icon-add"
                          />
                        </div>
                      </div>
                      {/* <FieldArray
                                  name={`rooms[${index}].childAge`}
                                  render={(arrayHelpers) => { */}
                      {/* return */}
                      {values.rooms[index].childAge.map((age, childIndex) => (
                        <div className="dflex inWrap" key={childIndex}>
                          <div className="adultstitle">
                            <SelectComponent
                              isComponents={false}
                              label={"Child " + (childIndex + 1) + " Age"}
                              name={`rooms[${index}].childAge[${childIndex}]`}
                              placeholder=""
                              // error={errors.childAgeId}
                              // touched={touched.childAgeId}
                              options={childAge}
                              onChange={(value) => {
                                console.log(values, "value");
                                handleSelectChange(
                                  value,
                                  `rooms[${index}].childAge[${childIndex}]`,
                                  formikProps
                                );
                              }}
                              value={values.rooms[index].childAge[childIndex]}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  );
                })}
              </>
            );
          }}
        />
      </Fragment>

      {/* Add room button */}
      <div className="addRoom">
        <IconButton
          onClick={() => handleAddFields(formikProps)}
          type="button"
          text="Add Room"
          icon="icon-add"
        />
        {/* <i className="icon-add" />
            &nbsp; Add Room */}
      </div>
    </div>
  );
}
