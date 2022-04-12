import React from "react";

function SingleAmenities({title, icon, data}) {
  return (
    <div className="col">
      <h3>
        <img src={icon} alt="icons" /> {title}
      </h3>
      <ul className="list-unstyled">
          {data && data.map((ele,index)=><li key={index}>{ele}</li>)}
      </ul>
    </div>
  );
}

export default SingleAmenities;
