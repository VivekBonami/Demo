import React from "react";

function ReviewCommentCard({
  score,
  label,
  date,
  title,
  comment,
  countryIcon,
  userName,
}) {
  return (
    <div className="card2">
      <div className="heading">
        <div className="d-flex justify-content-between">
          <div className="ratingComment font14">
            <span className="commentCount">{score}</span>
            {label}
          </div>
          <h4>{date}</h4>
        </div>
      </div>
      <h3>{title}</h3>
      <p>{comment}</p>
      <h5>
        <img src={countryIcon} alt="icon" />
        {userName}
      </h5>
    </div>
  );
}

export default ReviewCommentCard;
