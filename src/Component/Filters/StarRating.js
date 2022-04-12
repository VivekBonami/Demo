import React, { useState } from "react";
import StarImg from "../../Assets/img/star.png";

function StarRating() {
  const [showFilter, setshowFilter] = useState(true);

  return (
    <>
      <div
        className="cardHead dflex"
        onClick={() => setshowFilter(!showFilter)}
      >
        <h6>Star Ratings</h6>
        <span className={`fa fa-angle-${showFilter ? "up" : "down"}`}></span>
      </div>
      <div className={`cardBody ${!showFilter ? "d-none" : ""}`}>
        <div className="rate">
          <div className="ratings">
            1 <img src={StarImg} alt="star" />
          </div>
          <div className="ratings">
            2 <img src={StarImg} alt="star" />
          </div>
          <div className="ratings">
            3 <img src={StarImg} alt="star" />
          </div>
          <div className="ratings">
            4 <img src={StarImg} alt="star" />
          </div>
          <div className="ratings">
            5 <img src={StarImg} alt="star" />
          </div>
        </div>
        <button className="btnBorder">Apply</button>
      </div>
    </>
  );
}

export default StarRating;
