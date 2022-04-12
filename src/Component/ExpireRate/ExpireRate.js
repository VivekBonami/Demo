import React from "react";
import TimerIcon from "../../Assets/img/timer-blue.png";
import Countdown from 'react-countdown';

const renderer = ({minutes, seconds}) => {
      return <span>{minutes} min {seconds} sec</span>;
  };

function ExpireRate({ className, showIcon, text, time }) {
  return (
    <div className={className}>
      <div className="d-flex">
        {showIcon && <img src={TimerIcon} alt="icons" />}
        <h3>
          {text} in <Countdown date={Date.now() + time} renderer={renderer}/>
        </h3>
      </div>
    </div>
  );
}

export default ExpireRate;
