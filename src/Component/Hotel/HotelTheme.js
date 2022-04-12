import React from "react";

function HotelTheme({ title, themes }) {
  return (
    <>
      <h4>{title}:</h4>
      <div className="row no-gutters">
        {themes &&
          themes.map((ele, index) => {
            return (
              <div className="col" key={index}>
                <h3>
                  <img src={ele.image} alt="icon" />
                </h3>
                <h5>{ele.title}</h5>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default HotelTheme;
