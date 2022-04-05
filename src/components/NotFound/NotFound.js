import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-32">
      <h1 className="text-6xl text-red-700 mb-3 font-serif">Oops!</h1>
      <p className="font-bold text-2xl font-serif ">404-PAGE NOT FOUND</p>
      <p className="text-xl font-serif mt-2">
        The page you are looking for might have been removed had its name
        changed or temporarily unavailable.
      </p>
      <Link to="/">
        <button className="border-2 rounded-lg bg-rose-500 text-2xl p-4 font-bold text-white mt-3">
          GO TO HOMEPAGE
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
