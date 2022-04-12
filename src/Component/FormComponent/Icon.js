import React from "react";

function Icon({ iconName, className, text, spanClassName }) {
  return (
    //font awsome icon used in login, fogot password and reset password

    <span className={className}>
      <i className={iconName}></i>{" "}
      {text && (
        <span className={spanClassName ? spanClassName : ""}>{text}</span>
      )}
    </span>
  );
}

export default Icon;
