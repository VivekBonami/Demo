import React from 'react'
import ExpireRate from '../../../Component/ExpireRate/ExpireRate'
import HotelRoomTab from '../HotelRoomTab'
import RoomContainer from '../../../Component/Hotel/RoomContainer';
function Rooms({rooms}) {
  return (
    <>
    <div id="rooms" className="selectRoomTabs">
              <div className="sectionTitle">
                <h2>Select Your Room</h2>
              <ExpireRate className="expireTimer desktopViewDisplayNone" showIcon={false} text="(Rates will expire)" time={1200000} />
              </div>
              <div className="d-flex justify-content-between">
              <HotelRoomTab />
              <ExpireRate className="expireTimer mobileViewDisplayNone" showIcon={true} text="Rates will expire" time={1200000} />
              </div>
            </div>
            <div className="selectRoomContentMain">
              {rooms && rooms.map((ele,index) => {
                console.log("rooms: ", ele)
                return <RoomContainer {...ele} key={index}/>
              })}
            </div>
</>
  )
}
export default Rooms