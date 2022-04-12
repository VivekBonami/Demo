import React from "react";

//Start to End trveling details
function StartToEnd({ dateNTime, content, className }) {
  return (
    <div className={className}>
      <i className="icon-location"></i>
      <div>
        <div className="carDateNTime">{dateNTime}</div>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default StartToEnd;
