import React from "react";
import { Link } from "react-router-dom";
import useReviews from "../../hook/useReviews";
import Review from "../Review/Review";
import img from "./chair.jpg";

const Home = () => {
  const [reviews] = useReviews();
  return (
    <div>
      <div className="lg:grid grid-cols-2  gap-32 container mx-auto">
        <div>
          <h1 className="text-5xl font-bold">
            Best Selling Chair <br></br>
            <span className="text-4xl text-rose-800 ">
              360 Degree Rotary Mesh Chair
            </span>
          </h1>
          <p className="mt-4 mb-1 text-lg">
            Office chair to home computer table adjacent chair, the solution is
            the only one; buy a 360-degree rotary mesh chair. Recommending this
            highly cause the interesting fact behind this is though max holding
            capacity is 80kg, this chair can easily survive up to 95kg
            seriously. And with this Adjustable chair height, not only you are
            having a High-density sponge seat but also the highly demanded
            Curved backrest design along with High-quality chrome finishing leg
            and 5pcs PVC 2″ wheel indeed.
          </p>

          <button className="border-2 rounded-lg bg-rose-500 text-2xl p-4 font-bold text-white">
            Live Demo
          </button>
        </div>
        <div>
          <img src={img} className="w-auto h-96" alt="" />
        </div>
      </div>
      <div className="mt-12 mb-12">
        <h1 className="text-center text-4xl text-rose-800 font-bold">
          Customer Reviews(3)
        </h1>
      </div>
      <div className="lg:grid grid-cols-3 gap-4 container mx-auto ">
        {reviews.slice(0, 3).map((review) => (
          <Review key={review.name} review={review}></Review>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link to="/reviews">
          <button className="border-2 rounded-lg bg-rose-500 text-2xl p-4 font-bold text-white">
            See More Reviews
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
