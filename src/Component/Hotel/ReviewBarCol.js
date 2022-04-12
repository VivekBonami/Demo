import React from "react";

function ReviewBarCol({ reviewTypeData }) {
  return (
    <div className="progressWrapper">
      {reviewTypeData.map((ele, index) => {
        return (
          <div className="progressList" key={index}>
            <div className="d-flex justify-content-between">
              <h4>{ele.type}</h4>
              <h3>{ele.score}</h3>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${ele.score}%` }}
                aria-valuenow={String(ele.score)}
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ReviewBarCol;
