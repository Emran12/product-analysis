import React from "react";

const Review = (props) => {
  const { img, name, ratings, description } = props.review;
  return (
    <div className="flex flex-col justify-center items-center bg-white w-auto h-auto border-2 p-4 rounded-lg">
      <p>
        <img
          className="w-32 h-32 rounded-full bg-gray-100 bor"
          src={img}
          alt=""
        />
      </p>
      <p className="pt-3 text-2xl font-bold text-rose-500">{name}</p>
      <p className="pt-3 pb-3">{ratings}</p>
      <p className="text-center text-lg">{description}</p>
    </div>
  );
};

export default Review;
