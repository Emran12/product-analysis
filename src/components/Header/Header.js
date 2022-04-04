import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex justify-center bg-indigo-200 text-rose-800 hover:text-rose-500 ">
      <Link className="mr-6 p-6" to="/">
        HOME
      </Link>
      <Link className="mr-6 p-6" to="/reviews">
        REVIEWS
      </Link>
      <Link className="mr-6 p-6" to="/dashboard">
        DASHABOARD
      </Link>
      <Link className="mr-6 p-6" to="/blogs">
        BLOGS
      </Link>
      <Link className="mr-6 p-6" to="/about">
        ABOUT
      </Link>
    </nav>
  );
};

export default Header;
