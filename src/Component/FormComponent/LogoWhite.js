import React from "react";

function LogoWhite({ className, src }) {
  //white tripello logo

  return (
    <div className={className}>
      <img src={src} alt="Tripello" />
    </div>
  );
}

export default LogoWhite;
