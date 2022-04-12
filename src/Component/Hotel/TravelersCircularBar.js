import React from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";

function TravelersCircularBar({ typesOfTravlers }) {
  return (
    <div className="progressListRow">
      {typesOfTravlers &&
        typesOfTravlers.map((ele, index) => {
          return (
            <div className="progressList" key={index}>
              <div className="rings">
                <div className="percent1">
                  <CircularProgressbarWithChildren
                    value={ele.percentage}
                    strokeWidth={6}
                    styles={{
                      path: { stroke: `#00b7a6`, strokeLinecap: "round" },
                      trail: { stroke: `rgba(126, 148, 168, 0.4)` },
                    }}
                  >
                    <img
                      style={{ width: 30, marginTop: -5 }}
                      src={ele.logo}
                      alt="doge"
                    />
                  </CircularProgressbarWithChildren>
                </div>
              </div>
              <h4>
                {ele.label} <span>({ele.percentage}%)</span>
              </h4>
            </div>
          );
        })}
    </div>
  );
}

export default TravelersCircularBar;
