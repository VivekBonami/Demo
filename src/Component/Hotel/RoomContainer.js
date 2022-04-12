import React from 'react'
import RoomCard from './RoomCard'
import RoomPriceCard from './RoomPriceCard'
import Button from '../FormComponent/Button'
function RoomContainer({roomDetails, roomPricedDetails}) {
  return (
    <div className="selectRoomContent">
                <div className="row no-gutters">
                  <RoomCard {...roomDetails} />
                  <div className="col rightContent">
                    {roomPricedDetails && roomPricedDetails.map((ele,index)=>{
                      return <RoomPriceCard {...ele} key={index}/>
                    })}
                    <div className="showMoreLinks">
                      <Button >
                        Show More{" "}
                        <i className="fa fa-angle-down"
                        ></i>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
  )
}

export default RoomContainer