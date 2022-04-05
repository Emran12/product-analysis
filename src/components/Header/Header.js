import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex justify-center bg-indigo-200 text-rose-800">
      <Link className="mr-6 p-6 hover:text-rose-500 font-bold" to="/">
        HOME
      </Link>
      <Link className="mr-6 p-6 hover:text-rose-500 font-bold" to="/reviews">
        REVIEWS
      </Link>
      <Link className="mr-6 p-6 hover:text-rose-500 font-bold" to="/dashboard">
        DASHABOARD
      </Link>
      <Link className="mr-6 p-6 hover:text-rose-500 font-bold" to="/blogs">
        BLOGS
      </Link>
      <Link className="mr-6 p-6 hover:text-rose-500 font-bold" to="/about">
        ABOUT
      </Link>
    </nav>
  );
};

export default Header;
