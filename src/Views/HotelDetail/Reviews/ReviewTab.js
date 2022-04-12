import React from "react";
import Button from "../../../Component/FormComponent/Button";

function ReviewTab() {
  return (
    <ul className="reviewTabs list-unstyled d-flex">
      <li className="active">
        <Button>All (1,628)</Button>
      </li>
      <li>
        <Button>Business (432)</Button>
      </li>
      <li>
        <Button>Couples (468)</Button>
      </li>
      <li>
        <Button>Family (236)</Button>
      </li>
      <li>
        <Button>Solo (185)</Button>
      </li>
    </ul>
  );
}

export default ReviewTab;
