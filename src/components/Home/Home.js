import React from "react";
import img from "./chair.jpg";

const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-2  gap-48 ml-32">
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
      <div>
        <h1 className="text-center">Customer Reviews(3)</h1>
      </div>
    </div>
  );
};

export default Home;
