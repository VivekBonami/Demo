import React from "react";
import { Link } from "react-router-dom";

function MessageBox({ message1, message2 }) {
  return (
    // Greeting message box
    <div className="messageBox centerAlign">
      <h3 className="boxTitle">{message1}</h3>
      <p className="boxCopy">{message2}</p>
      <div className="boxBtnWrap">
        <Link className="btn" to="/home">
          <span className="icon-printer"></span>Print Receipt
        </Link>
        <Link className="btn" to="">
          <span className="icon-mail"></span>Email Receipt
        </Link>
        <Link className="btnBorder" to="">
          Cancel Itinerary
        </Link>
      </div>
    </div>
  );
}

export default MessageBox;
