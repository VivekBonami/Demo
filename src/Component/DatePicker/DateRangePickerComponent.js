import React, { useState, useEffect } from 'react';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';
import 'react-dates/lib/css/_datepicker.css';
import { date } from 'yup';
import { StyledDateRangePickerWrapper } from '../StyledComponents/StyledComponent';

function DateRangePickerComponent(props) {
  // Styling wrapper of date range picker component

  const {
    startDatePlaceholderText,
    endDatePlaceholderText,
    startDateId,
    endDateId,
    startDate,
    endDate,
    focusedInput,
    onFocusChange,
    isOutsideRange,
    onDatesChange,
    disableBeforeDate,

    orientation,
    isDayBlocked,
  } = props;
  const [focused, setfocused] = useState(null);
  return (
    <StyledDateRangePickerWrapper>
      <DateRangePicker
        startDate={startDate}
        startDateId={startDateId}
        endDate={endDate}
        endDateId={endDateId}
        onDatesChange={onDatesChange}
        focusedInput={focused}
        onFocusChange={(focusedInput) => {
          setfocused(focusedInput);
        }}
        customInputIcon={
          <span className="startDate">
            <i className="icon-invitation" />
          </span>
        }
        customArrowIcon={
          <>
            <div className="icon-arrow" />
            <span className="endDate">
              <i className="icon-invitation" />
            </span>
          </>
        }
        startDateTitleText="Check in"
        startDatePlaceholderText={startDatePlaceholderText}
        endDatePlaceholderText={endDatePlaceholderText}
        displayFormat="MM/DD/YYYY"
        orientation={orientation}
        isDayBlocked={isDayBlocked}
        isOutsideRange={isOutsideRange}
        // enableOutsideDays={true}
        // readOnly={true}
      />
    </StyledDateRangePickerWrapper>
  );
}

export default DateRangePickerComponent;
