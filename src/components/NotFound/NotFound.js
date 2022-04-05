import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-48">
      <h1 className="text-6xl text-red-700">Oops!</h1>
      <p>404-PAGE NOT FOUND</p>
      <p>
        The page you are looking for might have been removed had its name
        changed or temporarily unavailable.
      </p>
      <p>
        <button>GO TO HOMEPAGE</button>
      </p>
    </div>
  );
};

export default NotFound;
