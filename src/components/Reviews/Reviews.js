import React from "react";
import useReviews from "../../hook/useReviews";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews] = useReviews();
  return (
    <div>
      <div className="mt-12 mb-12">
        <h1 className="text-center text-4xl text-rose-800 font-bold">
          All Reviews({reviews.length})
        </h1>
      </div>
      {
        <div className="grid grid-cols-3 gap-4 ml-32 mr-32  ">
          {reviews.map((review) => (
            <Review key={review.name} review={review}></Review>
          ))}
        </div>
      }
    </div>
  );
};

export default Reviews;
