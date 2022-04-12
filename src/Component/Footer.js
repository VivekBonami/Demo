import React from "react";
import moment from "moment";
export default function Footer({ copyright }) {
  return (
    //footer Section

    <p className="footCopy">
      Copyright &copy; {moment().year()} Tripello Inc. All Rights Reserved.
    </p>
  );
}
