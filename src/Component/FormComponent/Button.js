import React from "react";

function Button({ text, type, onClick, className, imageSrc, disabled, icon, children }) {
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {imageSrc && <img src={imageSrc} alt="play-button" />}
      {text && text}
      {icon && <i className={icon} />}
      {children}
    </button>
  );
}

export default Button;
