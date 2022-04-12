import React from 'react'
import ThumbIcon from '../../Assets/img/thumbnail-count.png'
function ThumbCount({count, toggleShowGallery}) {
  return (
    <div className="thumbnailCount" onClick={()=>toggleShowGallery()}>
          <div className="d-flex">
            <img
              src={ThumbIcon}
              alt="thumbnail-count"
              className="w-100"
            />
            <h3 className="font17">{count}+</h3>
          </div>
        </div>
  )
}

export default ThumbCount