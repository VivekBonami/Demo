import React, { useState } from "react";
import Button from "../../../Component/FormComponent/Button";
import ReviewBarCol from "../../../Component/Hotel/ReviewBarCol";
import ReviewCommentCard from "../../../Component/Hotel/ReviewCommentCard";
import TravelersCircularBar from "../../../Component/Hotel/TravelersCircularBar";
import ReviewTab from "./ReviewTab";

function Reviews({ overAllReview, reviewTypeData, typesOfTravlers, userReviews }) {
    const [showMoreReviews, setshowMoreReviews] = useState(false);
  return (
    <div id="reviews" className="rewievsWrapper">
      <div className="sectionTitle">
        <h2>Rewievs</h2>
      </div>
      <div className="rewievsInfo">
        <div className="row no-gutters">
          <div className="col leftContent">
            <div className="contentWrap">
              <div className="ratingComment">
                <h3 className="commentCount">{overAllReview.overAllScore}</h3>
                <div className="verifiedReviews">
                  <h4>{overAllReview.lable}</h4>
                  <p>{overAllReview.reviewCount} verified reviews</p>
                </div>
              </div>
              <ReviewBarCol reviewTypeData={reviewTypeData} />
            </div>
            <div className="typesofTravelers">
              <div className="text-center heading">
                <h3>Types of Travelers</h3>
              </div>
              <TravelersCircularBar typesOfTravlers={typesOfTravlers} />
            </div>
          </div>
          <div className="col rightContent">
            <ReviewTab />
            {userReviews && userReviews.map((item,index) =>{
                return <ReviewCommentCard {...item} key={index} />
            })}

            {showMoreReviews && <div className="showMoreLink text-center">
              <Button className="show-more-reviews-popup" onClick={()=>setshowMoreReviews(!showMoreReviews)}>
                Show More Reviews <i className={`fa fa-angle-${showMoreReviews ? 'up' : 'down'}`}></i>
              </Button>
            </div>}
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
