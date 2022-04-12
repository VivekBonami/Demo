import React from "react";
import Button from "../FormComponent/Button";

function Pagination() {
  return (
    <>
      <ul className="pagination">
        <li>
          <Button>Prev</Button>
        </li>
        <li>
          <Button className="active">1</Button>
        </li>
        <li>
          <Button>2</Button>
        </li>
        <li>
          <Button>3</Button>
        </li>
        <li className="hide-for-mobile">
          <Button>4</Button>
        </li>
        <li>
          <Button>...</Button>
        </li>
        <li>
          <Button>23</Button>
        </li>
        <li>
          <Button>Next</Button>
        </li>
      </ul>
      <ul className="results hide-for-mobile">
        <li>Results on page:</li>
        <li>
          <Button className="active">10</Button>
        </li>
        <li>
          <Button>20</Button>
        </li>
        <li>
          <Button>30</Button>
        </li>
      </ul>
    </>
  );
}

export default Pagination;
