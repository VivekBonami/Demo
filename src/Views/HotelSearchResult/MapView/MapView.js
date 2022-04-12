import React from 'react'
import MapImg from '../../../Assets/img/map-placeholder.png'
function MapView({className, button}) {
  return (
    <div className={className ? className : "mapWrap"}>
                  <img src={MapImg} alt="map" className="w-100" />
                  {!button && <a href="#" className="whiteBtn">Map View</a>}
                </div>
  )
}

export default MapView