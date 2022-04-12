import React from "react";

// cord using in home page and premium signup page

function Card(props) {
  const {
    title,
    description,
    image,
    colClassName,
    styleClassName,
    imgClassName,
    textClassName,
  } = props;
  return (
    <div className={colClassName}>
      <div className={styleClassName}>
        <div className={imgClassName}>
          <img src={image} alt="" />
        </div>
        <div className={textClassName}>
          {title}
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
