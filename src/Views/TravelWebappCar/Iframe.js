import React from "react";

//iframe for google map view
function Iframe({ src }) {
  return (
    <iframe
      width="100%"
      height="100%"
      id="gmap_canvas"
      src={src}
      frameBorder="0"
      scrolling="no"
      marginHeight="0"
      marginWidth="0"
    />
  );
}

export default Iframe;
