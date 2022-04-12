import React from "react";
import Icon from "../../Component/FormComponent/Icon";

//car details info

function CarDetailsInfo({ detail1, detail2, iconName, spanClassName }) {
  return (
    <div className="dflex mb-5">
      <Icon
        className="font14 lightText"
        iconName={iconName}
        text={detail1}
        spanClassName={spanClassName}
      />

      <span className="font14 darkText">{detail2}</span>
    </div>
  );
}

export default CarDetailsInfo;
