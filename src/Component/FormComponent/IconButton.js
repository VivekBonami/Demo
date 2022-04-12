import React from "react";

function IconButton({
  text,
  type,
  onClick,
  className,
  imageSrc,
  disabled,
  icon,
}) {
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {imageSrc && <img src={imageSrc} alt="icon-button" />}
      {icon && <i className={icon} />}
      {text && text}
    </button>
  );
}

export default IconButton;
