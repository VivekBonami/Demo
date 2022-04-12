import React, { useState } from "react";

function SortBy() {
    const [showOption, setshowOption] = useState(true)
  return (
    <>
      <div className="content col">
        <p className="whiteText" onClick={()=>setshowOption(!showOption)}>Sort by</p>
        <div className={`${showOption ? '' : 'd-none'}`}>
        <h6>Savings % (high to low)</h6>
        </div>
      </div>
      <div className="col textRight dropdown-arrow" onClick={()=>setshowOption(!showOption)}></div>
    </>
  );
}

export default SortBy;
