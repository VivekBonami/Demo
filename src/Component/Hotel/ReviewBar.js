import React, { useState } from "react";
import Button from "../FormComponent/Button";

function ReviewBar({ reviews }) {
  const [showMoreReview, setshowMoreReview] = useState(false);
  return (
    <>
      <div className="heading">
        <div className="ratingComment">
          <span className="commentCount">{reviews.score.points}</span>
          {reviews.score.label}
        </div>
        <h4>{reviews.reviewCount} reviews</h4>
      </div>
      <ul>
        {reviews.reviewTypeData &&
          reviews.reviewTypeData.map((ele, index) => {
            return (
              <li key={index}>
                <div className="d-flex justify-content-between">
                  <h4>{ele.type}</h4>
                  <h3>{ele.score}</h3>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "95%" }}
                    aria-valuenow={String(ele.score)}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </li>
            );
          })}
      </ul>
      <div className="showMoreLink">
        <Button onClick={() => setshowMoreReview(!showMoreReview)}>
          Show All Reviews{" "}
          <i className={`fa fa-angle-${showMoreReview ? "up" : "down"}`}></i>
        </Button>
      </div>
    </>
  );
}

export default ReviewBar;
