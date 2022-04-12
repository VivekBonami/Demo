import styled from "styled-components";

export const StyledDateRangePickerWrapper = styled.div`
  & .DateRangePicker,
  .DateRangePickerInput_calendarIcon {
    background: 0 0;
    border: 0;
    color: inherit;
    font: inherit;
    line-height: normal;
    overflow: visible;
    cursor: pointer;
    display: inline-block;
    vertical-align: middle;

    padding: 0px;
  }

  //selected range
  .CalendarDay__selected_span {
    background: #82e0aa; //edit background colour here
    color: white; //text
    border: 1px solid $light-red; //set border colour if needed
  }

  .CalendarDay__hovered_span:hover,
  .CalendarDay__hovered_span {
    background: #add8e6;
  }

  .DateRangePickerInput {
    background-color: #e6e7ee;
    .DateRangePickerInput_arrow_svg {
      display: block;
    }
    display: flex;
    .DateInput {
      height: 25px;
      display: flex;
      background: #e6e7ee;
      border: none;
      .DateInput_input {
        font-size: 1rem;
        border-bottom: 0;
        padding: 0px 0px 0px;
      }
      .DateRangePickerInput__withBorder {
        border-radius: 0px;
        border: none;
      }
    }

    .DateRangePicker_picker.DateRangePicker_picker {
      top: 43px;
      left: 2px;
      /* top: 43px !important;
      left: 2px !important; */
    }
  }
`;
